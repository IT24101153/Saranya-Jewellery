import { useEffect, useMemo, useState } from 'react';
import authManager from '../auth.js';
import { FiBox, FiTrendingUp, FiTruck, FiLogOut } from 'react-icons/fi';

const emptyStock = {
  name: '',
  category: 'Ring',
  karat: '22K',
  weight: '',
  quantity: '',
  supplier: ''
};

const emptySupplier = {
  name: '',
  contact: '',
  email: '',
  location: '',
  itemsSupplied: ''
};

export default function InventoryDashboardPage() {
  const [staffUser, setStaffUser] = useState(null);
  const [activeTab, setActiveTab] = useState('stock'); // 'stock', 'rates', 'suppliers'
  
  // Stock state
  const [stockRows, setStockRows] = useState([]);
  const [stockForm, setStockForm] = useState(emptyStock);
  const [isSavingStock, setIsSavingStock] = useState(false);
  const [editingStock, setEditingStock] = useState(null);
  
  // Rates state
  const [goldRates, setGoldRates] = useState({ '18K': 0, '22K': 0, '24K': 0 });
  const [isSavingRates, setIsSavingRates] = useState(false);
  
  // Suppliers state
  const [suppliers, setSuppliers] = useState([]);
  const [supplierForm, setSupplierForm] = useState(emptySupplier);
  const [isSavingSupplier, setIsSavingSupplier] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);

  const [error, setError] = useState('');
  const [isLogoutHovered, setIsLogoutHovered] = useState(false);

  const totalUnits = useMemo(
    () => stockRows.reduce((sum, row) => sum + Number(row.quantity || 0), 0),
    [stockRows]
  );

  const supplierOptions = useMemo(
    () => [...suppliers].sort((a, b) => (a.name || '').localeCompare(b.name || '')),
    [suppliers]
  );

  useEffect(() => {
    document.title = 'Inventory Dashboard - Saranya Jewellery';
  }, []);

  useEffect(() => {
    async function bootstrap() {
      const me = await authManager.checkStaffAuth('Inventory');
      if (!me || me.needsApproval) return;
      setStaffUser(me);
      await Promise.all([loadStock(), loadRates(), loadSuppliers()]);
    }
    bootstrap();
  }, []);

  // ============ STOCK FUNCTIONS ============
  async function loadStock() {
    try {
      const response = await authManager.apiRequest('/api/inventory/stock');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load stock');
      setStockRows(Array.isArray(data.data) ? data.data : []);
    } catch (loadError) {
      console.error('Error loading stock:', loadError);
    }
  }

  async function saveStock(event) {
    event.preventDefault();
    setError('');

    const parsedWeight = Number(stockForm.weight);
    const parsedQuantity = Number(stockForm.quantity);

    if (!Number.isFinite(parsedWeight) || parsedWeight < 0) {
      setError('Weight cannot be negative');
      return;
    }

    if (!Number.isFinite(parsedQuantity) || parsedQuantity < 0) {
      setError('Quantity cannot be negative');
      return;
    }

    setIsSavingStock(true);
    try {
      const payload = {
        ...stockForm,
        weight: parsedWeight,
        quantity: parsedQuantity
      };
      const endpoint = editingStock ? `/api/inventory/stock/${editingStock._id}` : '/api/inventory/stock';
      const method = editingStock ? 'PUT' : 'POST';

      const response = await authManager.apiRequest(endpoint, {
        method,
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || data.details || data.message || 'Failed to add stock item');
      }
      setStockForm(emptyStock);
      setEditingStock(null);
      await loadStock();
    } catch (saveError) {
      setError(saveError.message || (editingStock ? 'Failed to update stock item' : 'Failed to add stock item'));
    } finally {
      setIsSavingStock(false);
    }
  }

  function startEditStock(stockItem) {
    setEditingStock(stockItem);
    setError('');
    setStockForm({
      name: stockItem.name || '',
      category: stockItem.category || 'Ring',
      karat: stockItem.karat || '22K',
      weight: String(stockItem.weight ?? ''),
      quantity: String(stockItem.quantity ?? ''),
      supplier: stockItem.supplierId || ''
    });
  }

  function cancelEditStock() {
    setEditingStock(null);
    setStockForm(emptyStock);
    setError('');
  }

  async function deleteStock(stockId) {
    if (!window.confirm('Delete this stock item?')) return;
    setError('');
    try {
      const response = await authManager.apiRequest(`/api/inventory/stock/${stockId}`, { method: 'DELETE' });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete stock item');
      }
      await loadStock();
    } catch (deleteError) {
      setError(deleteError.message || 'Failed to delete stock item');
    }
  }

  // ============ RATES FUNCTIONS ============
  async function loadRates() {
    try {
      const response = await authManager.apiRequest('/api/inventory/gold-rates');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load rates');
      setGoldRates({ '18K': data['18K'] || 0, '22K': data['22K'] || 0, '24K': data['24K'] || 0 });
    } catch (err) {
      console.error('Error loading rates:', err);
    }
  }

  async function saveRates(event) {
    event.preventDefault();
    setError('');

    const normalizedRates = {
      '18K': Number(goldRates['18K']),
      '22K': Number(goldRates['22K']),
      '24K': Number(goldRates['24K'])
    };

    const hasNegativeRate = Object.values(normalizedRates).some(
      (rate) => !Number.isFinite(rate) || rate < 0
    );

    if (hasNegativeRate) {
      setError('Gold rates cannot be negative');
      return;
    }

    setIsSavingRates(true);
    try {
      const response = await authManager.apiRequest('/api/inventory/gold-rates', {
        method: 'POST',
        body: JSON.stringify(normalizedRates)
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

  // ============ SUPPLIERS FUNCTIONS ============
  async function loadSuppliers() {
    try {
      const response = await authManager.apiRequest('/api/inventory/suppliers');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load suppliers');

      const supplierRows = Array.isArray(data)
        ? data
        : Array.isArray(data.data)
          ? data.data
          : Array.isArray(data.suppliers)
            ? data.suppliers
            : [];

      setSuppliers(supplierRows);
    } catch (err) {
      setError(err.message || 'Failed to load suppliers');
      setSuppliers([]);
    }
  }

  async function saveSupplier(event) {
    event.preventDefault();
    setError('');

    const normalizedName = supplierForm.name.trim();
    const normalizedContact = String(supplierForm.contact || '').replace(/\D/g, '');
    const duplicateSupplier = suppliers.find(
      (supplier) =>
        supplier.name?.trim().toLowerCase() === normalizedName.toLowerCase() &&
        supplier._id !== editingSupplier?._id
    );

    if (!/^\d{10}$/.test(normalizedContact)) {
      setError('Contact number must be exactly 10 digits');
      return;
    }

    if (duplicateSupplier) {
      setError('Supplier name already exists');
      return;
    }

    setIsSavingSupplier(true);
    try {
      const method = editingSupplier ? 'PATCH' : 'POST';
      const endpoint = editingSupplier 
        ? `/api/suppliers/${editingSupplier._id}`
        : '/api/suppliers';

      const payload = {
        ...supplierForm,
        name: normalizedName,
        contact: normalizedContact
      };

      const response = await authManager.apiRequest(endpoint, {
        method,
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to save supplier');
      
      setSupplierForm(emptySupplier);
      setEditingSupplier(null);
      await loadSuppliers();
    } catch (err) {
      setError(err.message || 'Failed to save supplier');
    } finally {
      setIsSavingSupplier(false);
    }
  }

  function startEditSupplier(supplier) {
    setEditingSupplier(supplier);
    setSupplierForm({
      name: supplier.name,
      contact: supplier.contact,
      email: supplier.email || '',
      location: supplier.location || '',
      itemsSupplied: supplier.itemsSupplied || ''
    });
  }

  async function deleteSupplier(supplierId) {
    if (!window.confirm('Delete this supplier?')) return;
    
    try {
      setError('');
      const response = await authManager.apiRequest(`/api/suppliers/${supplierId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to delete supplier');
      await loadSuppliers();
    } catch (err) {
      setError(err.message || 'Failed to delete supplier');
    }
  }

  if (!staffUser) return <p style={{ padding: '1rem' }}>Checking inventory access...</p>;

  if (!staffUser) return <p style={{ padding: '1rem' }}>Checking inventory access...</p>;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fafbfc' }}>
      {/* Sidebar */}
      <aside style={{
        width: '320px',
        background: '#6f0022',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 100
      }}>
        {/* Sidebar Header */}
        <div style={{
          padding: '2rem 1.5rem 1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '1.2rem',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 600,
            letterSpacing: '0.5px',
            color: '#e0bf63',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textTransform: 'uppercase'
          }}>
            <FiBox size={28} />
            Inventory
          </h1>
        </div>

        {/* Navigation Items */}
        <nav style={{
          flex: 1,
          padding: '1.5rem 1rem',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { id: 'stock', icon: FiBox, label: 'Stock Management' },
              { id: 'rates', icon: FiTrendingUp, label: 'Gold Rates' },
              { id: 'suppliers', icon: FiTruck, label: 'Suppliers' }
            ].map(item => {
              const isActive = activeTab === item.id;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    width: '100%',
                    padding: '1rem 1rem',
                    background: isActive ? '#e0bf63' : 'transparent',
                    color: isActive ? '#3d2b00' : '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(224, 191, 99, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <IconComponent size={24} style={{ minWidth: '24px' }} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* User Profile Section */}
        <div style={{
          padding: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#e0bf63',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#3d2b00',
            flexShrink: 0
          }}>
            {staffUser?.fullName?.charAt(0).toUpperCase()}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontWeight: 600,
              fontSize: '0.95rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              Hello, {staffUser?.fullName?.split(' ')[0]}
            </div>
          </div>
          <button
            onClick={() => authManager.logout()}
            style={{
              background: isLogoutHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
              color: '#fff',
              border: 'none',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              transition: 'background 0.2s',
              flexShrink: 0
            }}
            title="Logout"
            onMouseEnter={() => setIsLogoutHovered(true)}
            onMouseLeave={() => setIsLogoutHovered(false)}
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{
        marginLeft: '320px',
        flex: 1,
        overflow: 'auto',
        padding: '2rem'
      }}>
        {/* Stats */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Stock Entries</p>
            <h2 style={{ margin: '0.5rem 0 0', color: '#6f0022', fontSize: '1.8rem' }}>{stockRows.length}</h2>
          </div>
          <div style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Total Units</p>
            <h2 style={{ margin: '0.5rem 0 0', color: '#6f0022', fontSize: '1.8rem' }}>{totalUnits}</h2>
          </div>
          <div style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Suppliers</p>
            <h2 style={{ margin: '0.5rem 0 0', color: '#6f0022', fontSize: '1.8rem' }}>{suppliers.length}</h2>
          </div>
        </section>

        {error && (
          <div style={{
            background: '#fee',
            border: '1px solid #fcc',
          color: '#c33',
          padding: '0.75rem 1rem',
          borderRadius: 8,
          marginBottom: '1rem'
        }}>
          {error}
        </div>
      )}

      {/* STOCK TAB */}
      {activeTab === 'stock' && (
        <div>
          {/* Add Stock Form */}
          <section style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: '#6f0022', fontSize: '1.1rem' }}>
              {editingStock ? 'Edit Stock Item' : 'Add Stock Item'}
            </h3>
            <form onSubmit={saveStock} style={{ display: 'grid', gap: '0.8rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <input
                  required
                  type="text"
                  placeholder="Product Name"
                  value={stockForm.name}
                  onChange={(e) => setStockForm({ ...stockForm, name: e.target.value })}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
                <select
                  value={stockForm.category}
                  onChange={(e) => setStockForm({ ...stockForm, category: e.target.value })}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  <option>Ring</option>
                  <option>Necklace</option>
                  <option>Earrings</option>
                  <option>Bangle</option>
                  <option>Bracelet</option>
                  <option>Pendant</option>
                  <option>Chain</option>
                  <option>Bangles</option>
                  <option>Anklet</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem' }}>
                <select
                  value={stockForm.karat}
                  onChange={(e) => setStockForm({ ...stockForm, karat: e.target.value })}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  <option>18K</option>
                  <option>22K</option>
                  <option>24K</option>
                </select>
                <input
                  type="number"
                  min="0.1"
                  step="0.01"
                  required
                  placeholder="Weight (g)"
                  value={stockForm.weight}
                  onChange={(e) => setStockForm({ ...stockForm, weight: e.target.value })}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
                <input
                  type="number"
                  min="1"
                  required
                  placeholder="Quantity"
                  value={stockForm.quantity}
                  onChange={(e) => setStockForm({ ...stockForm, quantity: e.target.value })}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </div>
              <select
                value={stockForm.supplier}
                onChange={(e) => setStockForm({ ...stockForm, supplier: e.target.value })}
                style={{
                  padding: '0.6rem',
                  border: '1px solid #ddd',
                  borderRadius: 8,
                  fontSize: '0.94rem',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                <option value="">Select Supplier (optional)</option>
                {supplierOptions.map((supplier) => (
                  <option key={supplier._id} value={supplier._id}>
                    {supplier.name}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                disabled={isSavingStock}
                style={{
                  padding: '0.7rem 1.2rem',
                  background: '#6f0022',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: isSavingStock ? 'not-allowed' : 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  opacity: isSavingStock ? 0.6 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                {isSavingStock ? (editingStock ? 'Updating Item...' : 'Adding Item...') : (editingStock ? 'Update Stock Item' : 'Add Stock Item')}
              </button>
              {editingStock && (
                <button
                  type="button"
                  onClick={cancelEditStock}
                  style={{
                    padding: '0.7rem 1.2rem',
                    background: '#fff',
                    color: '#666',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Cancel Edit
                </button>
              )}
            </form>
          </section>

          {/* Stock List */}
          <section style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: '#6f0022', fontSize: '1.1rem' }}>Stock Inventory</h3>
            {stockRows.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '2rem' }}>No stock items yet</p>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ background: '#6f0022', borderBottom: '2px solid #e0bf63' }}>
                      <th style={{ textAlign: 'left', padding: '0.8rem', fontWeight: '700', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.06em' }}>SKU</th>
                      <th style={{ textAlign: 'left', padding: '0.8rem', fontWeight: '700', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.06em' }}>NAME</th>
                      <th style={{ textAlign: 'left', padding: '0.8rem', fontWeight: '700', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.06em' }}>CATEGORY</th>
                      <th style={{ textAlign: 'left', padding: '0.8rem', fontWeight: '700', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.06em' }}>KARAT</th>
                      <th style={{ textAlign: 'left', padding: '0.8rem', fontWeight: '700', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.06em' }}>WEIGHT</th>
                      <th style={{ textAlign: 'center', padding: '0.8rem', fontWeight: '700', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.06em' }}>QTY</th>
                      <th style={{ textAlign: 'left', padding: '0.8rem', fontWeight: '700', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.06em' }}>SUPPLIER</th>
                      <th style={{ textAlign: 'center', padding: '0.8rem', fontWeight: '700', color: '#fff', fontSize: '0.78rem', letterSpacing: '0.06em' }}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockRows.map((row) => (
                      <tr key={row._id} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '0.8rem', fontSize: '0.85rem', color: '#666' }}>{row.serial}</td>
                        <td style={{ padding: '0.8rem' }}>{row.name}</td>
                        <td style={{ padding: '0.8rem', fontSize: '0.9rem', color: '#666' }}>{row.category}</td>
                        <td style={{ padding: '0.8rem', fontWeight: '600', color: '#6f0022' }}>{row.karat || '-'}</td>
                        <td style={{ padding: '0.8rem', color: '#666' }}>{row.weight}g</td>
                        <td style={{ padding: '0.8rem', textAlign: 'center', fontWeight: '600', color: '#6f0022' }}>{row.quantity}</td>
                        <td style={{ padding: '0.8rem', fontSize: '0.9rem', color: '#666' }}>{row.supplier || '-'}</td>
                        <td style={{ padding: '0.8rem', textAlign: 'center' }}>
                          <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                            <button
                              onClick={() => startEditStock(row)}
                              style={{
                                padding: '0.4rem 0.8rem',
                                background: '#e0bf63',
                                color: '#6f0022',
                                border: 'none',
                                borderRadius: 6,
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontFamily: 'Poppins, sans-serif'
                              }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteStock(row._id)}
                              style={{
                                padding: '0.4rem 0.8rem',
                                background: '#fff',
                                color: '#c33',
                                border: '1px solid #ddd',
                                borderRadius: 6,
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                                fontFamily: 'Poppins, sans-serif'
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      )}

      {/* RATES TAB */}
      {activeTab === 'rates' && (
        <div>
          <section style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: '#6f0022', fontSize: '1.1rem' }}>Update Gold Rates</h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>Set the current market rates for each gold karat</p>
            <form onSubmit={saveRates} style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontSize: '0.9rem', fontWeight: '600' }}>
                    18 Karat Price
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={goldRates['18K']}
                    onChange={(e) => setGoldRates({ ...goldRates, '18K': Number(e.target.value) })}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      border: '1px solid #ddd',
                      borderRadius: 8,
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontSize: '0.9rem', fontWeight: '600' }}>
                    22 Karat Price
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={goldRates['22K']}
                    onChange={(e) => setGoldRates({ ...goldRates, '22K': Number(e.target.value) })}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      border: '1px solid #ddd',
                      borderRadius: 8,
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontSize: '0.9rem', fontWeight: '600' }}>
                    24 Karat Price
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={goldRates['24K']}
                    onChange={(e) => setGoldRates({ ...goldRates, '24K': Number(e.target.value) })}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      border: '1px solid #ddd',
                      borderRadius: 8,
                      fontSize: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSavingRates}
                style={{
                  padding: '0.8rem 1.5rem',
                  background: '#6f0022',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: isSavingRates ? 'not-allowed' : 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  opacity: isSavingRates ? 0.6 : 1,
                  transition: 'all 0.2s ease',
                  maxWidth: '300px'
                }}
              >
                {isSavingRates ? 'Updating Rates...' : 'Update Gold Rates'}
              </button>
            </form>
          </section>
        </div>
      )}

      {/* SUPPLIERS TAB */}
      {activeTab === 'suppliers' && (
        <div>
          {/* Add Supplier Form */}
          <section style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: '#6f0022', fontSize: '1.1rem' }}>
              {editingSupplier ? 'Edit Supplier' : 'Add New Supplier'}
            </h3>
            <form onSubmit={saveSupplier} style={{ display: 'grid', gap: '0.8rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <input
                  required
                  type="text"
                  placeholder="Supplier Name"
                  value={supplierForm.name}
                  onChange={(e) => setSupplierForm({ ...supplierForm, name: e.target.value })}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
                <input
                  required
                  type="tel"
                  placeholder="Contact Number"
                  value={supplierForm.contact}
                  onChange={(e) => setSupplierForm({ ...supplierForm, contact: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Contact number must be exactly 10 digits"
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={supplierForm.email}
                  onChange={(e) => setSupplierForm({ ...supplierForm, email: e.target.value })}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
                <input
                  type="text"
                  placeholder="Location (optional)"
                  value={supplierForm.location}
                  onChange={(e) => setSupplierForm({ ...supplierForm, location: e.target.value })}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Items Supplied (optional)"
                value={supplierForm.itemsSupplied}
                onChange={(e) => setSupplierForm({ ...supplierForm, itemsSupplied: e.target.value })}
                style={{
                  padding: '0.6rem',
                  border: '1px solid #ddd',
                  borderRadius: 8,
                  fontSize: '0.94rem',
                  fontFamily: 'Poppins, sans-serif'
                }}
              />
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="submit"
                  disabled={isSavingSupplier}
                  style={{
                    flex: 1,
                    padding: '0.7rem 1.2rem',
                    background: '#6f0022',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: isSavingSupplier ? 'not-allowed' : 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    opacity: isSavingSupplier ? 0.6 : 1,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isSavingSupplier ? 'Saving...' : editingSupplier ? 'Update Supplier' : 'Add Supplier'}
                </button>
                {editingSupplier && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingSupplier(null);
                      setSupplierForm(emptySupplier);
                    }}
                    style={{
                      padding: '0.7rem 1.2rem',
                      background: '#fff',
                      color: '#666',
                      border: '1px solid #ddd',
                      borderRadius: 8,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </section>

          {/* Suppliers List */}
          <section style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: '#6f0022', fontSize: '1.1rem' }}>Supplier Directory</h3>
            {suppliers.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '2rem' }}>No suppliers added yet</p>
            ) : (
              <div style={{ display: 'grid', gap: '0.8rem' }}>
                {suppliers.map((supplier) => (
                  <div key={supplier._id} style={{
                    background: '#fff',
                    border: '1px solid #eee',
                    borderRadius: 8,
                    padding: '1rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'start',
                    gap: '1rem'
                  }}>
                    <div>
                      <h4 style={{ margin: '0 0 0.4rem', color: '#6f0022', fontSize: '1rem' }}>
                        {supplier.name}
                      </h4>
                      <p style={{ margin: '0.3rem 0', color: '#333', fontSize: '0.9rem' }}>
                        Contact: <strong>{supplier.contact}</strong>
                      </p>
                      {supplier.email && (
                        <p style={{ margin: '0.2rem 0', color: '#666', fontSize: '0.9rem' }}>
                          Email: {supplier.email}
                        </p>
                      )}
                      {supplier.location && (
                        <p style={{ margin: '0.2rem 0', color: '#666', fontSize: '0.9rem' }}>
                          Location: {supplier.location}
                        </p>
                      )}
                      {supplier.itemsSupplied && (
                        <p style={{ margin: '0.3rem 0 0', color: '#666', fontSize: '0.9rem' }}>
                          Items: {supplier.itemsSupplied}
                        </p>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                      <button
                        onClick={() => startEditSupplier(supplier)}
                        style={{
                          padding: '0.5rem 1rem',
                          background: '#e0bf63',
                          color: '#6f0022',
                          border: 'none',
                          borderRadius: 6,
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontFamily: 'Poppins, sans-serif',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteSupplier(supplier._id)}
                        style={{
                          padding: '0.5rem 1rem',
                          background: '#fff',
                          color: '#c33',
                          border: '1px solid #ddd',
                          borderRadius: 6,
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
      </main>
    </div>
  );
}
