import { useEffect, useMemo, useState } from 'react';
import authManager from '../auth.js';
import StaffDashboardLayout from '../components/StaffDashboardLayout.jsx';

const DASHBOARD_LINKS = [
  { href: '/product-management-dashboard', label: 'Products' },
  { href: '/inventory-dashboard', label: 'Inventory' },
  { href: '/admin-dashboard', label: 'Admin' }
];

const emptyForm = {
  stockProductId: '',
  name: '',
  description: '',
  image: '/assets/placeholder-product.jpg',
  category: 'Ring',
  featured: false
};

export default function ProductManagementDashboardPage() {
  const [staffUser, setStaffUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [stockOptions, setStockOptions] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const activeProducts = useMemo(
    () => products.filter((item) => item.productStatus === 'Active').length,
    [products]
  );

  useEffect(() => {
    document.title = 'Product Management Dashboard - Saranya Jewellery';
  }, []);

  useEffect(() => {
    async function bootstrap() {
      const me = await authManager.checkStaffAuth('Product Management');
      if (!me || me.needsApproval) return;
      setStaffUser(me);
      await Promise.all([loadProducts(), loadStockOptions()]);
    }
    bootstrap();
  }, []);

  async function loadProducts() {
    setError('');
    try {
      const response = await authManager.apiRequest('/api/products');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load products');
      setProducts(Array.isArray(data) ? data : []);
    } catch (loadError) {
      setError(loadError.message || 'Failed to load products');
      setProducts([]);
    }
  }

  async function loadStockOptions() {
    try {
      const response = await authManager.apiRequest('/api/products/stock-options');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load inventory options');
      setStockOptions(Array.isArray(data) ? data : []);
    } catch {
      setStockOptions([]);
    }
  }

  async function saveProduct(event) {
    event.preventDefault();
    setIsSaving(true);
    setError('');
    try {
      const payload = {
        ...form,
        stockProductId: form.stockProductId || undefined,
        featured: Boolean(form.featured)
      };
      const response = await authManager.apiRequest('/api/products', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to save product');
      setForm(emptyForm);
      await Promise.all([loadProducts(), loadStockOptions()]);
    } catch (saveError) {
      setError(saveError.message || 'Failed to save product');
    } finally {
      setIsSaving(false);
    }
  }

  async function removeProduct(productId) {
    if (!window.confirm('Delete this product?')) return;
    setError('');
    try {
      const response = await authManager.apiRequest(`/api/products/${productId}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to delete product');
      await Promise.all([loadProducts(), loadStockOptions()]);
    } catch (removeError) {
      setError(removeError.message || 'Failed to delete product');
    }
  }

  if (!staffUser) return <p style={{ padding: '1rem' }}>Checking product management access...</p>;

  return (
    <StaffDashboardLayout
      title="Product Management Dashboard"
      staff={staffUser}
      onLogout={() => authManager.logout()}
      links={DASHBOARD_LINKS}
    >
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Total Products</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{products.length}</h2>
        </div>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Active Products</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{activeProducts}</h2>
        </div>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Draft Stock Options</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{stockOptions.length}</h2>
        </div>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>Create / Publish Product</h3>
        <form onSubmit={saveProduct} style={{ display: 'grid', gap: '0.6rem' }}>
          <select value={form.stockProductId} onChange={(e) => setForm((prev) => ({ ...prev, stockProductId: e.target.value }))}>
            <option value="">Create brand new product</option>
            {stockOptions.map((item) => (
              <option key={item._id} value={item._id}>{item.name} ({item.category}) - Qty {item.stockQuantity}</option>
            ))}
          </select>
          <input required value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="Product name" />
          <textarea required rows={3} value={form.description} onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))} placeholder="Description" />
          <input required value={form.image} onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))} placeholder="Image URL" />
          <select value={form.category} onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}>
            <option>Ring</option>
            <option>Necklace</option>
            <option>Earrings</option>
            <option>Bangles</option>
            <option>Bracelet</option>
            <option>Pendant</option>
          </select>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input type="checkbox" checked={form.featured} onChange={(e) => setForm((prev) => ({ ...prev, featured: e.target.checked }))} />
            Featured Product
          </label>
          <button type="submit" disabled={isSaving} style={{ background: '#6f0022', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem 0.9rem' }}>
            {isSaving ? 'Saving...' : 'Save Product'}
          </button>
        </form>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>Products</h3>
        {error && <p style={{ color: '#b42318' }}>{error}</p>}
        <div style={{ display: 'grid', gap: '0.7rem' }}>
          {products.map((product) => (
            <article key={product._id} style={{ border: '1px solid #f0f0f0', borderRadius: 10, padding: '0.75rem' }}>
              <h4 style={{ margin: '0 0 0.3rem' }}>{product.name}</h4>
              <p style={{ margin: 0, color: '#555' }}>{product.description}</p>
              <p style={{ margin: '0.45rem 0', color: '#666', fontSize: '0.9rem' }}>
                Category: {product.category} | Status: {product.productStatus} | Stock: {product.stockQuantity || 0}
              </p>
              <button type="button" onClick={() => removeProduct(product._id)}>Delete</button>
            </article>
          ))}
          {products.length === 0 && <p style={{ margin: 0, color: '#666' }}>No products available.</p>}
        </div>
      </section>
    </StaffDashboardLayout>
  );
}
