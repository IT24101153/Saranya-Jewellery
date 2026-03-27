import { useEffect, useMemo, useState } from 'react';
import authManager from '../auth.js';
import StaffDashboardLayout from '../components/StaffDashboardLayout.jsx';

const DASHBOARD_LINKS = [
  { href: '/admin-dashboard', label: 'Admin' },
  { href: '/product-management-dashboard', label: 'Products' },
  { href: '/order-management-dashboard', label: 'Orders' },
  { href: '/inventory-dashboard', label: 'Inventory' },
  { href: '/customer-care-dashboard', label: 'Customer Care' },
  { href: '/loyalty-management-dashboard', label: 'Loyalty' }
];

const emptyForm = {
  fullName: '',
  email: '',
  password: '',
  role: 'Customer Care'
};

export default function AdminDashboardPage() {
  const [staffUser, setStaffUser] = useState(null);
  const [staffList, setStaffList] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [statusFilter, setStatusFilter] = useState('all');
  const [busyId, setBusyId] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const filteredList = useMemo(() => {
    if (statusFilter === 'all') return staffList;
    if (statusFilter === 'active') return staffList.filter((item) => item.isActive);
    if (statusFilter === 'inactive') return staffList.filter((item) => !item.isActive);
    return staffList.filter((item) => item.status === statusFilter);
  }, [staffList, statusFilter]);

  useEffect(() => {
    document.title = 'Admin Dashboard - Saranya Jewellery';
  }, []);

  useEffect(() => {
    async function bootstrap() {
      const me = await authManager.checkStaffAuth('Admin');
      if (!me || me.needsApproval) return;
      setStaffUser(me);
      await loadStaff();
    }

    bootstrap();
  }, []);

  async function loadStaff() {
    setError('');
    try {
      const response = await authManager.apiRequest('/api/staff');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load staff');
      setStaffList(Array.isArray(data) ? data : []);
    } catch (loadError) {
      setError(loadError.message || 'Failed to load staff');
      setStaffList([]);
    }
  }

  async function createStaff(event) {
    event.preventDefault();
    setIsSaving(true);
    setError('');
    try {
      const response = await authManager.apiRequest('/api/staff', {
        method: 'POST',
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
          role: form.role,
          status: 'Approved'
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to create staff');
      setForm(emptyForm);
      await loadStaff();
    } catch (saveError) {
      setError(saveError.message || 'Failed to create staff');
    } finally {
      setIsSaving(false);
    }
  }

  async function performAction(staffId, action) {
    setBusyId(staffId);
    setError('');
    try {
      const response = await authManager.apiRequest(`/api/staff/${staffId}${action}`, { method: 'PATCH' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Staff action failed');
      await loadStaff();
    } catch (actionError) {
      setError(actionError.message || 'Staff action failed');
    } finally {
      setBusyId('');
    }
  }

  async function deleteStaff(staffId) {
    if (!window.confirm('Delete this staff account permanently?')) return;
    setBusyId(staffId);
    setError('');
    try {
      const response = await authManager.apiRequest(`/api/staff/${staffId}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to delete staff');
      await loadStaff();
    } catch (deleteError) {
      setError(deleteError.message || 'Failed to delete staff');
    } finally {
      setBusyId('');
    }
  }

  if (!staffUser) return <p style={{ padding: '1rem' }}>Checking admin access...</p>;

  return (
    <StaffDashboardLayout
      title="Admin Dashboard"
      staff={staffUser}
      onLogout={() => authManager.logout()}
      links={DASHBOARD_LINKS}
    >
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Total Staff</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{staffList.length}</h2>
        </div>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Approved</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{staffList.filter((item) => item.status === 'Approved').length}</h2>
        </div>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Pending</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{staffList.filter((item) => item.status === 'Pending').length}</h2>
        </div>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>Create Staff Account</h3>
        <form onSubmit={createStaff} style={{ display: 'grid', gap: '0.6rem', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          <input required value={form.fullName} onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))} placeholder="Full name" />
          <input required type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} placeholder="Email" />
          <input required minLength={6} value={form.password} onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))} placeholder="Password" />
          <select value={form.role} onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}>
            <option>Customer Care</option>
            <option>Inventory</option>
            <option>Order Management</option>
            <option>Product Management</option>
            <option>Loyalty Management</option>
            <option>Admin</option>
          </select>
          <button type="submit" disabled={isSaving} style={{ background: '#6f0022', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem' }}>
            {isSaving ? 'Creating...' : 'Create Staff'}
          </button>
        </form>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
          <h3 style={{ margin: 0, color: '#6f0022' }}>Staff Management</h3>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Revoked">Revoked</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>
        </div>
        {error && <p style={{ color: '#b42318' }}>{error}</p>}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th align="left">Name</th>
                <th align="left">Role</th>
                <th align="left">Status</th>
                <th align="left">Active</th>
                <th align="left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((item) => (
                <tr key={item._id} style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td>{item.fullName}<br /><small>{item.email}</small></td>
                  <td>{item.role}</td>
                  <td>{item.status}</td>
                  <td>{item.isActive ? 'Yes' : 'No'}</td>
                  <td style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', padding: '0.5rem 0' }}>
                    <button disabled={busyId === item._id} onClick={() => performAction(item._id, '/approve')}>Approve</button>
                    <button disabled={busyId === item._id} onClick={() => performAction(item._id, '/reject')}>Reject</button>
                    <button disabled={busyId === item._id} onClick={() => performAction(item._id, '/toggle-active')}>Toggle Active</button>
                    <button disabled={busyId === item._id} onClick={() => deleteStaff(item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {filteredList.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: '0.8rem 0', color: '#666' }}>No staff found for this filter.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </StaffDashboardLayout>
  );
}
