import { useEffect, useMemo, useState } from 'react';
import authManager from '../auth.js';
import StaffDashboardLayout from '../components/StaffDashboardLayout.jsx';

const DASHBOARD_LINKS = [
  { href: '/customer-care-dashboard', label: 'Messages' },
  { href: '/order-management-dashboard', label: 'Orders' },
  { href: '/admin-dashboard', label: 'Admin' }
];

const emptyMessage = {
  title: '',
  message: '',
  type: 'general',
  status: 'active',
  targetAudience: 'all',
  sendOnLogin: true
};

export default function CustomerCareDashboardPage() {
  const [staffUser, setStaffUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({ totalMessages: 0, activeMessages: 0, totalSent: 0 });
  const [form, setForm] = useState(emptyMessage);
  const [editingId, setEditingId] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const activeCount = useMemo(
    () => messages.filter((item) => item.status === 'active').length,
    [messages]
  );

  useEffect(() => {
    document.title = 'Customer Care Dashboard - Saranya Jewellery';
  }, []);

  useEffect(() => {
    async function bootstrap() {
      const me = await authManager.checkStaffAuth('Customer Care');
      if (!me || me.needsApproval) return;
      setStaffUser(me);
      await Promise.all([loadMessages(), loadStats()]);
    }
    bootstrap();
  }, []);

  async function loadMessages() {
    try {
      setError('');
      const response = await authManager.apiRequest('/api/messages');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load messages');
      setMessages(Array.isArray(data) ? data : []);
    } catch (loadError) {
      setError(loadError.message || 'Failed to load messages');
      setMessages([]);
    }
  }

  async function loadStats() {
    try {
      const response = await authManager.apiRequest('/api/messages/stats');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load message stats');
      setStats(data || { totalMessages: 0, activeMessages: 0, totalSent: 0 });
    } catch {
      setStats({ totalMessages: 0, activeMessages: 0, totalSent: 0 });
    }
  }

  async function saveMessage(event) {
    event.preventDefault();
    setIsSaving(true);
    setError('');
    try {
      const endpoint = editingId ? `/api/messages/${editingId}` : '/api/messages';
      const method = editingId ? 'PUT' : 'POST';
      const response = await authManager.apiRequest(endpoint, {
        method,
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to save message');
      setForm(emptyMessage);
      setEditingId('');
      await Promise.all([loadMessages(), loadStats()]);
    } catch (saveError) {
      setError(saveError.message || 'Failed to save message');
    } finally {
      setIsSaving(false);
    }
  }

  function startEdit(item) {
    setEditingId(item._id);
    setForm({
      title: item.title || '',
      message: item.message || '',
      type: item.type || 'general',
      status: item.status || 'active',
      targetAudience: item.targetAudience || 'all',
      sendOnLogin: item.sendOnLogin !== false
    });
  }

  async function deleteMessage(messageId) {
    if (!window.confirm('Delete this message?')) return;
    try {
      setError('');
      const response = await authManager.apiRequest(`/api/messages/${messageId}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to delete message');
      if (editingId === messageId) {
        setEditingId('');
        setForm(emptyMessage);
      }
      await Promise.all([loadMessages(), loadStats()]);
    } catch (deleteError) {
      setError(deleteError.message || 'Failed to delete message');
    }
  }

  if (!staffUser) return <p style={{ padding: '1rem' }}>Checking customer care access...</p>;

  return (
    <StaffDashboardLayout
      title="Customer Care Dashboard"
      staff={staffUser}
      onLogout={() => authManager.logout()}
      links={DASHBOARD_LINKS}
    >
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Total Messages</p>
          <h2 style={{ margin: '0.3rem 0 0', color: '#6f0022' }}>{stats.totalMessages}</h2>
        </div>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Active Messages</p>
          <h2 style={{ margin: '0.3rem 0 0', color: '#6f0022' }}>{stats.activeMessages || activeCount}</h2>
        </div>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Total Sent</p>
          <h2 style={{ margin: '0.3rem 0 0', color: '#6f0022' }}>{stats.totalSent}</h2>
        </div>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>{editingId ? 'Edit Message' : 'Create Message'}</h3>
        <form onSubmit={saveMessage} style={{ display: 'grid', gap: '0.6rem' }}>
          <input required value={form.title} onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))} placeholder="Title" />
          <textarea required rows={4} value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} placeholder="Message text" />
          <div style={{ display: 'grid', gap: '0.6rem', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
            <select value={form.type} onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value }))}>
              <option value="general">General</option>
              <option value="promo">Promo</option>
              <option value="alert">Alert</option>
            </select>
            <select value={form.status} onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value }))}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <select value={form.targetAudience} onChange={(e) => setForm((prev) => ({ ...prev, targetAudience: e.target.value }))}>
              <option value="all">All Customers</option>
              <option value="loyalty">Loyalty Members</option>
              <option value="new">New Customers</option>
            </select>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <input type="checkbox" checked={form.sendOnLogin} onChange={(e) => setForm((prev) => ({ ...prev, sendOnLogin: e.target.checked }))} />
              Send On Login
            </label>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="submit" disabled={isSaving} style={{ background: '#6f0022', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem 0.9rem' }}>
              {isSaving ? 'Saving...' : editingId ? 'Update Message' : 'Create Message'}
            </button>
            {editingId && (
              <button type="button" onClick={() => { setEditingId(''); setForm(emptyMessage); }}>
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>Recent Messages</h3>
        {error && <p style={{ color: '#b42318' }}>{error}</p>}
        <div style={{ display: 'grid', gap: '0.7rem' }}>
          {messages.map((item) => (
            <article key={item._id} style={{ border: '1px solid #f0f0f0', borderRadius: 10, padding: '0.75rem' }}>
              <h4 style={{ margin: '0 0 0.3rem' }}>{item.title}</h4>
              <p style={{ margin: 0, color: '#555' }}>{item.message}</p>
              <p style={{ margin: '0.45rem 0', color: '#666', fontSize: '0.9rem' }}>
                Type: {item.type} | Status: {item.status} | Audience: {item.targetAudience || 'all'}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button type="button" onClick={() => startEdit(item)}>Edit</button>
                <button type="button" onClick={() => deleteMessage(item._id)}>Delete</button>
              </div>
            </article>
          ))}
          {messages.length === 0 && <p style={{ margin: 0, color: '#666' }}>No messages created yet.</p>}
        </div>
      </section>
    </StaffDashboardLayout>
  );
}
