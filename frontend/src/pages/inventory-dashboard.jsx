import { useEffect, useMemo, useState } from 'react';
import authManager from '../auth.js';
import StaffDashboardLayout from '../components/StaffDashboardLayout.jsx';

const DASHBOARD_LINKS = [
  { href: '/inventory-dashboard', label: 'Inventory' },
  { href: '/order-management-dashboard', label: 'Orders' },
  { href: '/product-management-dashboard', label: 'Products' }
];

const emptyStock = {
  name: '',
  category: 'Ring',
  karat: '22K',
  weight: '',
  quantity: '',
  supplier: ''
};

export default function InventoryDashboardPage() {
  const [staffUser, setStaffUser] = useState(null);
  const [stockRows, setStockRows] = useState([]);
  const [stockForm, setStockForm] = useState(emptyStock);
  const [goldRates, setGoldRates] = useState({ '18K': 0, '22K': 0, '24K': 0 });
  const [isSavingRates, setIsSavingRates] = useState(false);
  const [isSavingStock, setIsSavingStock] = useState(false);
  const [error, setError] = useState('');

  const totalUnits = useMemo(
    () => stockRows.reduce((sum, row) => sum + Number(row.quantity || 0), 0),
    [stockRows]
  );

  useEffect(() => {
    document.title = 'Inventory Dashboard - Saranya Jewellery';
  }, []);

  useEffect(() => {
    async function bootstrap() {
      const me = await authManager.checkStaffAuth('Inventory');
      if (!me || me.needsApproval) return;
      setStaffUser(me);
      await Promise.all([loadStock(), loadRates()]);
    }
    bootstrap();
  }, []);

  async function loadStock() {
    try {
      setError('');
      const response = await authManager.apiRequest('/api/inventory/stock');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load stock');
      setStockRows(Array.isArray(data.data) ? data.data : []);
    } catch (loadError) {
      setError(loadError.message || 'Failed to load stock');
      setStockRows([]);
    }
  }

  async function loadRates() {
    try {
      const response = await authManager.apiRequest('/api/inventory/gold-rates');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load rates');
      setGoldRates({ '18K': data['18K'] || 0, '22K': data['22K'] || 0, '24K': data['24K'] || 0 });
    } catch {
      setGoldRates({ '18K': 0, '22K': 0, '24K': 0 });
    }
  }

  async function saveRates(event) {
    event.preventDefault();
    setIsSavingRates(true);
    setError('');
    try {
      const response = await authManager.apiRequest('/api/inventory/gold-rates', {
        method: 'POST',
        body: JSON.stringify(goldRates)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to update rates');
      await loadRates();
    } catch (saveError) {
      setError(saveError.message || 'Failed to update rates');
    } finally {
      setIsSavingRates(false);
    }
  }

  async function addStock(event) {
    event.preventDefault();
    setIsSavingStock(true);
    setError('');
    try {
      const payload = {
        ...stockForm,
        weight: Number(stockForm.weight),
        quantity: Number(stockForm.quantity)
      };
      const response = await authManager.apiRequest('/api/inventory/stock', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to add stock item');
      setStockForm(emptyStock);
      await loadStock();
    } catch (saveError) {
      setError(saveError.message || 'Failed to add stock item');
    } finally {
      setIsSavingStock(false);
    }
  }

  async function deleteStock(stockId) {
    if (!window.confirm('Delete this stock item?')) return;
    setError('');
    try {
      const response = await authManager.apiRequest(`/api/inventory/stock/${stockId}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to delete stock item');
      await loadStock();
    } catch (deleteError) {
      setError(deleteError.message || 'Failed to delete stock item');
    }
  }

  if (!staffUser) return <p style={{ padding: '1rem' }}>Checking inventory access...</p>;

  return (
    <StaffDashboardLayout
      title="Inventory Dashboard"
      staff={staffUser}
      onLogout={() => authManager.logout()}
      links={DASHBOARD_LINKS}
    >
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Stock Entries</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{stockRows.length}</h2>
        </div>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Total Units</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{totalUnits}</h2>
        </div>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>Gold Rates</h3>
        <form onSubmit={saveRates} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.6rem' }}>
          <input type="number" min="0" required value={goldRates['18K']} onChange={(e) => setGoldRates((prev) => ({ ...prev, '18K': Number(e.target.value) }))} placeholder="18K" />
          <input type="number" min="0" required value={goldRates['22K']} onChange={(e) => setGoldRates((prev) => ({ ...prev, '22K': Number(e.target.value) }))} placeholder="22K" />
          <input type="number" min="0" required value={goldRates['24K']} onChange={(e) => setGoldRates((prev) => ({ ...prev, '24K': Number(e.target.value) }))} placeholder="24K" />
          <button type="submit" disabled={isSavingRates} style={{ background: '#6f0022', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem' }}>
            {isSavingRates ? 'Updating...' : 'Update Rates'}
          </button>
        </form>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>Add Stock</h3>
        <form onSubmit={addStock} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.6rem' }}>
          <input required value={stockForm.name} onChange={(e) => setStockForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="Product name" />
          <select value={stockForm.category} onChange={(e) => setStockForm((prev) => ({ ...prev, category: e.target.value }))}>
            <option>Ring</option>
            <option>Necklace</option>
            <option>Earrings</option>
            <option>Bangle</option>
            <option>Bracelet</option>
            <option>Pendant</option>
          </select>
          <select value={stockForm.karat} onChange={(e) => setStockForm((prev) => ({ ...prev, karat: e.target.value }))}>
            <option>18K</option>
            <option>22K</option>
            <option>24K</option>
          </select>
          <input type="number" min="0.1" step="0.01" required value={stockForm.weight} onChange={(e) => setStockForm((prev) => ({ ...prev, weight: e.target.value }))} placeholder="Weight (g)" />
          <input type="number" min="0" required value={stockForm.quantity} onChange={(e) => setStockForm((prev) => ({ ...prev, quantity: e.target.value }))} placeholder="Quantity" />
          <input value={stockForm.supplier} onChange={(e) => setStockForm((prev) => ({ ...prev, supplier: e.target.value }))} placeholder="Supplier" />
          <button type="submit" disabled={isSavingStock} style={{ background: '#6f0022', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem' }}>
            {isSavingStock ? 'Adding...' : 'Add Stock'}
          </button>
        </form>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>Stock List</h3>
        {error && <p style={{ color: '#b42318' }}>{error}</p>}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th align="left">Serial</th>
                <th align="left">Name</th>
                <th align="left">Category</th>
                <th align="left">Karat</th>
                <th align="left">Qty</th>
                <th align="left">Status</th>
                <th align="left">Action</th>
              </tr>
            </thead>
            <tbody>
              {stockRows.map((row) => (
                <tr key={row._id} style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td>{row.serial}</td>
                  <td>{row.name}</td>
                  <td>{row.category}</td>
                  <td>{row.karat || '-'}</td>
                  <td>{row.quantity}</td>
                  <td>{row.status}</td>
                  <td>
                    <button type="button" onClick={() => deleteStock(row._id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {stockRows.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ padding: '0.8rem 0', color: '#666' }}>No stock available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </StaffDashboardLayout>
  );
}
