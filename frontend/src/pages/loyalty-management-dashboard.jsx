import { useEffect, useMemo, useState } from 'react';
import authManager from '../auth.js';
import StaffDashboardLayout from '../components/StaffDashboardLayout.jsx';

const DASHBOARD_LINKS = [
  { href: '/loyalty-management-dashboard', label: 'Loyalty' },
  { href: '/customer-care-dashboard', label: 'Customer Care' },
  { href: '/admin-dashboard', label: 'Admin' }
];

const TIER_OPTIONS = ['Silver', 'Gold', 'Platinum'];

export default function LoyaltyManagementDashboardPage() {
  const [staffUser, setStaffUser] = useState(null);
  const [tiers, setTiers] = useState([]);
  const [members, setMembers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [error, setError] = useState('');

  const loyaltyMembers = useMemo(
    () => members.filter((item) => item.isLoyalty),
    [members]
  );

  const nonMembers = useMemo(
    () => members.filter((item) => !item.isLoyalty),
    [members]
  );

  useEffect(() => {
    document.title = 'Loyalty Management Dashboard - Saranya Jewellery';
  }, []);

  useEffect(() => {
    async function bootstrap() {
      const me = await authManager.checkStaffAuth('Loyalty Management');
      if (!me || me.needsApproval) return;
      setStaffUser(me);
      await Promise.all([loadTiers(), loadMembers()]);
    }
    bootstrap();
  }, []);

  async function loadTiers() {
    setError('');
    try {
      const response = await authManager.apiRequest('/api/loyalty/tiers');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load tiers');
      setTiers(Array.isArray(data) ? data : []);
    } catch (loadError) {
      setError(loadError.message || 'Failed to load tiers');
      setTiers([]);
    }
  }

  async function loadMembers() {
    try {
      const response = await authManager.apiRequest('/api/loyalty/members');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load members');
      setMembers(Array.isArray(data) ? data : []);
    } catch {
      setMembers([]);
    }
  }

  async function updateTier(tier) {
    setError('');
    try {
      const response = await authManager.apiRequest(`/api/loyalty/tiers/${tier._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          minSpent: Number(tier.minSpent),
          maxSpent: Number(tier.maxSpent),
          pointMultiplier: Number(tier.pointMultiplier),
          benefits: Array.isArray(tier.benefits) ? tier.benefits : String(tier.benefits || '').split('\n').filter(Boolean),
          description: tier.description || ''
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to update tier');
      await loadTiers();
    } catch (updateError) {
      setError(updateError.message || 'Failed to update tier');
    }
  }

  async function addMember(event) {
    event.preventDefault();
    if (!selectedCustomerId) return;
    setError('');
    try {
      const response = await authManager.apiRequest('/api/loyalty/members/add', {
        method: 'POST',
        body: JSON.stringify({ customerId: selectedCustomerId })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to add customer');
      setSelectedCustomerId('');
      await loadMembers();
    } catch (addError) {
      setError(addError.message || 'Failed to add customer');
    }
  }

  async function removeMember(customerId) {
    if (!window.confirm('Remove this customer from loyalty program?')) return;
    setError('');
    try {
      const response = await authManager.apiRequest('/api/loyalty/members/remove', {
        method: 'POST',
        body: JSON.stringify({ customerId })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to remove member');
      await loadMembers();
    } catch (removeError) {
      setError(removeError.message || 'Failed to remove member');
    }
  }

  async function changeTier(customerId, newTier) {
    setError('');
    try {
      const response = await authManager.apiRequest(`/api/loyalty/members/upgrade/${customerId}`, {
        method: 'POST',
        body: JSON.stringify({ newTier })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to change tier');
      await loadMembers();
    } catch (changeError) {
      setError(changeError.message || 'Failed to change tier');
    }
  }

  if (!staffUser) return <p style={{ padding: '1rem' }}>Checking loyalty management access...</p>;

  return (
    <StaffDashboardLayout
      title="Loyalty Management Dashboard"
      staff={staffUser}
      onLogout={() => authManager.logout()}
      links={DASHBOARD_LINKS}
    >
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Total Customers</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{members.length}</h2>
        </div>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Loyalty Members</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{loyaltyMembers.length}</h2>
        </div>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>Add Member To Loyalty</h3>
        <form onSubmit={addMember} style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <select value={selectedCustomerId} onChange={(e) => setSelectedCustomerId(e.target.value)}>
            <option value="">Select customer</option>
            {nonMembers.map((customer) => (
              <option key={customer._id} value={customer._id}>{customer.fullName} ({customer.email})</option>
            ))}
          </select>
          <button type="submit" style={{ background: '#6f0022', color: '#fff', border: 'none', borderRadius: 8, padding: '0.55rem 0.9rem' }}>
            Add
          </button>
        </form>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>Loyalty Tiers</h3>
        {error && <p style={{ color: '#b42318' }}>{error}</p>}
        <div style={{ display: 'grid', gap: '0.7rem' }}>
          {tiers.map((tier) => (
            <article key={tier._id} style={{ border: '1px solid #f0f0f0', borderRadius: 10, padding: '0.8rem' }}>
              <h4 style={{ margin: '0 0 0.5rem' }}>{tier.tierName}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
                <input type="number" value={tier.minSpent} onChange={(e) => setTiers((prev) => prev.map((item) => (item._id === tier._id ? { ...item, minSpent: e.target.value } : item)))} />
                <input type="number" value={tier.maxSpent} onChange={(e) => setTiers((prev) => prev.map((item) => (item._id === tier._id ? { ...item, maxSpent: e.target.value } : item)))} />
                <input type="number" step="0.1" value={tier.pointMultiplier} onChange={(e) => setTiers((prev) => prev.map((item) => (item._id === tier._id ? { ...item, pointMultiplier: e.target.value } : item)))} />
              </div>
              <textarea rows={2} value={Array.isArray(tier.benefits) ? tier.benefits.join('\n') : tier.benefits || ''} onChange={(e) => setTiers((prev) => prev.map((item) => (item._id === tier._id ? { ...item, benefits: e.target.value } : item)))} />
              <textarea rows={2} value={tier.description || ''} onChange={(e) => setTiers((prev) => prev.map((item) => (item._id === tier._id ? { ...item, description: e.target.value } : item)))} />
              <button type="button" onClick={() => updateTier(tier)}>Save Tier</button>
            </article>
          ))}
        </div>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <h3 style={{ marginTop: 0, color: '#6f0022' }}>Member List</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th align="left">Name</th>
                <th align="left">Tier</th>
                <th align="left">Points</th>
                <th align="left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loyaltyMembers.map((member) => (
                <tr key={member._id} style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td>{member.fullName}<br /><small>{member.email}</small></td>
                  <td>{member.loyaltyTier || 'Silver'}</td>
                  <td>{member.loyaltyPoints || 0}</td>
                  <td style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', padding: '0.45rem 0' }}>
                    {TIER_OPTIONS.map((tierName) => (
                      <button key={tierName} type="button" onClick={() => changeTier(member._id, tierName)}>
                        {tierName}
                      </button>
                    ))}
                    <button type="button" onClick={() => removeMember(member._id)}>Remove</button>
                  </td>
                </tr>
              ))}
              {loyaltyMembers.length === 0 && (
                <tr>
                  <td colSpan={4} style={{ padding: '0.8rem 0', color: '#666' }}>No loyalty members yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </StaffDashboardLayout>
  );
}
