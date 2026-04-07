import { useEffect, useMemo, useState } from 'react';
import { FiHome, FiUsers, FiTrendingUp, FiLogOut, FiActivity, FiEye, FiDollarSign, FiShield } from 'react-icons/fi';
import authManager from '../auth.js';

const dashboardNav = [
  { href: '/admin-dashboard', label: 'Admin', icon: 'shield-alt' },
  { href: '/product-management-dashboard', label: 'Products', icon: 'box' },
  { href: '/order-management-dashboard', label: 'Orders', icon: 'receipt' },
  { href: '/inventory-dashboard', label: 'Inventory', icon: 'warehouse' },
  { href: '/customer-care-dashboard', label: 'Support', icon: 'headset' },
  { href: '/loyalty-management-dashboard', label: 'Loyalty', icon: 'star' }
];

const emptyForm = {
  fullName: '',
  email: '',
  password: '',
  role: 'Customer Care'
};

const emptyEditForm = {
  fullName: '',
  role: 'Customer Care',
  status: 'Pending',
  password: ''
};

export default function AdminDashboardPage() {
  const [staffUser, setStaffUser] = useState(null);
  const [staffList, setStaffList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);
  const [isEditStaffModalOpen, setIsEditStaffModalOpen] = useState(false);
  const [editingStaffId, setEditingStaffId] = useState('');
  const [editForm, setEditForm] = useState(emptyEditForm);
  const [activeSection, setActiveSection] = useState('analytics');
  const [statusFilter, setStatusFilter] = useState('all');
  const [busyId, setBusyId] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isUpdatingStaff, setIsUpdatingStaff] = useState(false);
  const [error, setError] = useState('');
  
  // Statistics
  const [stats, setStats] = useState({
    totalIncome: 0,
    monthIncome: 0,
    yearIncome: 0,
    totalOrders: 0,
    completedOrders: 0,
    pendingOrders: 0,
    totalRefunds: 0,
    totalCustomers: 0,
    totalProducts: 0,
    loyaltyMembers: 0,
    promotionsSentToday: 0,
    goldRate: 0
  });
  const [customerFilter, setCustomerFilter] = useState('all');
  const [customerBusyId, setCustomerBusyId] = useState('');
  const [orders, setOrders] = useState([]);
  const [serverAuditLogs, setServerAuditLogs] = useState([]);
  const [revenueRange, setRevenueRange] = useState('30d');
  const [orderStatusFilter, setOrderStatusFilter] = useState('all');

  const filteredList = useMemo(() => {
    if (statusFilter === 'all') return staffList;
    return staffList.filter((item) => item.status === statusFilter);
  }, [staffList, statusFilter]);

  const filteredOrders = useMemo(() => {
    const now = new Date();
    const days = revenueRange === '7d' ? 7 : revenueRange === '30d' ? 30 : revenueRange === '90d' ? 90 : 3650;
    const start = new Date(now);
    start.setDate(now.getDate() - days);

    return orders.filter((order) => {
      const created = new Date(order.createdAt);
      const inRange = created >= start;
      const statusMatch = orderStatusFilter === 'all' ? true : order.status === orderStatusFilter;
      return inRange && statusMatch;
    });
  }, [orders, revenueRange, orderStatusFilter]);

  const revenueMetrics = useMemo(() => {
    const totalRevenue = filteredOrders.reduce((sum, order) => sum + Number(order.total || 0), 0);
    const totalCount = filteredOrders.length;
    const completedCount = filteredOrders.filter((order) => order.status === 'Completed').length;
    const avgOrderValue = totalCount > 0 ? totalRevenue / totalCount : 0;

    return {
      totalRevenue,
      totalCount,
      completedCount,
      avgOrderValue
    };
  }, [filteredOrders]);

  const customerInsights = useMemo(() => {
    const spendByEmail = new Map();
    const latestOrderByEmail = new Map();

    orders.forEach((order) => {
      const email = String(order.customerEmail || '').toLowerCase();
      if (!email) return;
      spendByEmail.set(email, (spendByEmail.get(email) || 0) + Number(order.total || 0));

      const existing = latestOrderByEmail.get(email);
      const currentDate = new Date(order.createdAt);
      if (!existing || currentDate > existing) {
        latestOrderByEmail.set(email, currentDate);
      }
    });

    const topSpenders = [...customerList]
      .map((customer) => {
        const email = String(customer.email || '').toLowerCase();
        const orderSpend = spendByEmail.get(email) || 0;
        return {
          ...customer,
          computedSpend: Math.max(Number(customer.totalSpent || 0), orderSpend)
        };
      })
      .sort((a, b) => b.computedSpend - a.computedSpend)
      .slice(0, 5);

    const now = new Date();
    const inactiveCutoff = new Date(now);
    inactiveCutoff.setDate(now.getDate() - 90);

    const atRisk = customerList
      .filter((customer) => {
        const email = String(customer.email || '').toLowerCase();
        const lastOrderDate = latestOrderByEmail.get(email);
        return !lastOrderDate || lastOrderDate < inactiveCutoff;
      })
      .slice(0, 5);

    const loyaltyBreakdown = {
      standard: customerList.filter((customer) => !customer.loyaltyTier).length,
      silver: customerList.filter((customer) => customer.loyaltyTier === 'Silver').length,
      gold: customerList.filter((customer) => customer.loyaltyTier === 'Gold').length,
      platinum: customerList.filter((customer) => customer.loyaltyTier === 'Platinum').length
    };

    return {
      topSpenders,
      atRisk,
      loyaltyBreakdown
    };
  }, [customerList, orders]);

  const staffAuditTrail = useMemo(() => {
    return serverAuditLogs
      .map((item) => ({
        id: item._id,
        action: `${item.method} ${item.path}`,
        details: `Status ${item.statusCode}${item.staffRole ? ` • ${item.staffRole}` : ''}`,
        actor: item.staffName || 'Unknown Staff',
        at: item.createdAt
      }))
      .slice(0, 100);
  }, [serverAuditLogs]);

  useEffect(() => {
    document.title = 'Admin Dashboard - Saranya Jewellery';
  }, []);

  useEffect(() => {
    if (!isAddStaffModalOpen && !isEditStaffModalOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsAddStaffModalOpen(false);
        setIsEditStaffModalOpen(false);
      }
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isAddStaffModalOpen, isEditStaffModalOpen]);

  useEffect(() => {
    async function bootstrap() {
      const me = await authManager.checkStaffAuth('Admin');
      if (!me || me.needsApproval) return;
      setStaffUser(me);
      await Promise.all([loadStaff(), loadStats(), loadCustomers(), loadOrders(), loadAuditLogs()]);
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

    if (String(form.password || '').length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

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
      await loadAuditLogs();
      setIsAddStaffModalOpen(false);
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
      await loadAuditLogs();
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
      await loadAuditLogs();
    } catch (deleteError) {
      setError(deleteError.message || 'Failed to delete staff');
    } finally {
      setBusyId('');
    }
  }

  function openEditStaffModal(item) {
    setError('');
    setEditingStaffId(item._id);
    setEditForm({
      fullName: item.fullName || '',
      role: item.role || 'Customer Care',
      status: item.status || 'Pending',
      password: ''
    });
    setIsEditStaffModalOpen(true);
  }

  async function updateStaff(event) {
    event.preventDefault();
    if (!editingStaffId) return;

    setIsUpdatingStaff(true);
    setError('');
    try {
      const response = await authManager.apiRequest(`/api/staff/${editingStaffId}`, {
        method: 'PUT',
        body: JSON.stringify({
          fullName: editForm.fullName,
          role: editForm.role,
          status: editForm.status,
          password: editForm.password || undefined
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to update staff');
      await loadStaff();
      await loadAuditLogs();
      setIsEditStaffModalOpen(false);
      setEditingStaffId('');
      setEditForm(emptyEditForm);
    } catch (updateError) {
      setError(updateError.message || 'Failed to update staff');
    } finally {
      setIsUpdatingStaff(false);
    }
  }

  async function loadStats() {
    try {
      const response = await authManager.apiRequest('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (err) {
      console.error('Failed to load stats:', err);
    }
  }

  async function loadCustomers() {
    try {
      const response = await authManager.apiRequest('/api/customers');
      if (response.ok) {
        const data = await response.json();
        setCustomerList(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error('Failed to load customers:', err);
    }
  }

  async function loadOrders() {
    try {
      const response = await authManager.apiRequest('/api/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error('Failed to load orders:', err);
      setOrders([]);
    }
  }

  async function loadAuditLogs() {
    try {
      const response = await authManager.apiRequest('/api/admin/audit-logs?limit=250');
      if (response.ok) {
        const data = await response.json();
        setServerAuditLogs(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error('Failed to load audit logs:', err);
      setServerAuditLogs([]);
    }
  }

  useEffect(() => {
    if (!staffUser || activeSection !== 'staffAudit') return undefined;

    loadAuditLogs();
    const intervalId = setInterval(() => {
      loadAuditLogs();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [staffUser, activeSection]);

  async function deleteCustomer(customerId) {
    if (!window.confirm('Are you sure you want to delete this customer? This action cannot be undone.')) return;
    setCustomerBusyId(customerId);
    setError('');
    try {
      const response = await authManager.apiRequest(`/api/customers/${customerId}`, { method: 'DELETE' });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete customer');
      }
      await loadCustomers();
    } catch (deleteError) {
      setError(deleteError.message || 'Failed to delete customer');
    } finally {
      setCustomerBusyId('');
    }
  }

  if (!staffUser) return <p style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>Checking admin access...</p>;

  const navItems = [
    { key: 'analytics', icon: FiHome, label: 'Dashboard' },
    { key: 'staff', icon: FiUsers, label: 'Staff' },
    { key: 'customers', icon: FiTrendingUp, label: 'Customers' },
    { key: 'staffAudit', icon: FiActivity, label: 'Staff Audit' },
    { key: 'customerInsights', icon: FiEye, label: 'Insights' },
    { key: 'revenueFilters', icon: FiDollarSign, label: 'Revenue' }
  ];

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
            <FiShield size={28} />
            Admin Dashboard
          </h1>
        </div>

        {/* Navigation Items */}
        <nav style={{
          flex: 1,
          padding: '1.5rem 1rem',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.key;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveSection(item.key)}
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
            {staffUser.fullName?.charAt(0).toUpperCase()}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontWeight: 600,
              fontSize: '0.95rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              Hello, {staffUser.fullName?.split(' ')[0]}
            </div>
          </div>
          <button
            onClick={() => authManager.logout()}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
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
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{
        flex: 1,
        marginLeft: '320px',
        padding: '2rem',
        overflowY: 'auto'
      }}>

        {activeSection === 'analytics' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {[
            { label: 'Total Customers', value: stats.totalCustomers, color: '#6f0022' },
            { label: 'Total Products', value: stats.totalProducts, color: '#0066cc' },
            { label: 'Total Orders', value: stats.totalOrders, color: '#28a745' },
            { label: 'Loyalty Members', value: stats.loyaltyMembers, color: '#e0bf63' },
            { label: 'Total Income', value: `LKR ${(stats.totalIncome || 0).toLocaleString()}`, color: '#ffc107' },
            { label: 'This Month Income', value: `LKR ${(stats.monthIncome || 0).toLocaleString()}`, color: '#17a2b8' },
            { label: 'This Year Income', value: `LKR ${(stats.yearIncome || 0).toLocaleString()}`, color: '#6f0022' },
            { label: 'Completed Orders', value: stats.completedOrders, color: '#28a745' },
            { label: 'Pending Orders', value: stats.pendingOrders, color: '#ffc107' },
            { label: 'Total Refunds', value: `LKR ${(stats.totalRefunds || 0).toLocaleString()}`, color: '#dc3545' },
            { label: 'Gold Rate (Today)', value: `LKR ${(stats.goldRate || 0).toLocaleString()}/gram`, color: '#e0bf63' },
            { label: 'Promotions Sent Today', value: stats.promotionsSentToday, color: '#ff6b6b' }
          ].map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <p style={{
                  margin: 0,
                  color: '#666',
                  fontSize: '0.9rem',
                  fontWeight: 500
                }}>
                  {stat.label}
                </p>
                <span
                  style={{
                    width: '32px',
                    height: '6px',
                    borderRadius: '999px',
                    background: stat.color,
                    display: 'inline-block',
                    marginTop: '0.35rem'
                  }}
                />
              </div>
              <h2 style={{
                margin: '0.8rem 0 0',
                color: stat.color,
                fontSize: '2rem',
                fontWeight: 700,
                wordBreak: 'break-word'
              }}>
                {stat.value}
              </h2>
            </div>
          ))}
        </div>
        )}

        {activeSection === 'staffAudit' && (
          <section style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '2rem',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ margin: 0, color: '#6f0022', fontSize: '1.4rem', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
              Staff Audit Log
            </h3>
            <p style={{ margin: '0.35rem 0 1.2rem', color: '#666', fontSize: '0.95rem' }}>
              Recent activity and staff management events.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e9ecef', background: '#f8f9fa' }}>
                    <th style={{ padding: '0.85rem', textAlign: 'left' }}>Time</th>
                    <th style={{ padding: '0.85rem', textAlign: 'left' }}>Action</th>
                    <th style={{ padding: '0.85rem', textAlign: 'left' }}>Details</th>
                    <th style={{ padding: '0.85rem', textAlign: 'left' }}>Actor</th>
                  </tr>
                </thead>
                <tbody>
                  {staffAuditTrail.map((log) => (
                    <tr key={log.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                      <td style={{ padding: '0.85rem', color: '#555' }}>{new Date(log.at).toLocaleString()}</td>
                      <td style={{ padding: '0.85rem' }}><span style={{ background: '#f3e8eb', color: '#6f0022', padding: '0.25rem 0.6rem', borderRadius: '999px', fontWeight: 600 }}>{log.action}</span></td>
                      <td style={{ padding: '0.85rem', color: '#444' }}>{log.details}</td>
                      <td style={{ padding: '0.85rem', color: '#666' }}>{log.actor}</td>
                    </tr>
                  ))}
                  {staffAuditTrail.length === 0 && (
                    <tr>
                      <td colSpan={4} style={{ padding: '1.2rem', textAlign: 'center', color: '#999' }}>No staff audit logs yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeSection === 'revenueFilters' && (
          <section style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '2rem',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, color: '#6f0022', fontSize: '1.4rem', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                Revenue and Order Analytics Filters
              </h3>
              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                <select value={revenueRange} onChange={(e) => setRevenueRange(e.target.value)} style={{ padding: '0.55rem 0.8rem', border: '1px solid #dee2e6', borderRadius: '6px' }}>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="all">All Time</option>
                </select>
                <select value={orderStatusFilter} onChange={(e) => setOrderStatusFilter(e.target.value)} style={{ padding: '0.55rem 0.8rem', border: '1px solid #dee2e6', borderRadius: '6px' }}>
                  <option value="all">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Refunded">Refunded</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.1rem' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e9ecef', borderRadius: '10px', padding: '1rem' }}>
                <p style={{ margin: 0, color: '#666' }}>Filtered Revenue</p>
                <h4 style={{ margin: '0.35rem 0 0', color: '#6f0022', fontSize: '1.4rem' }}>LKR {Math.round(revenueMetrics.totalRevenue).toLocaleString()}</h4>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #e9ecef', borderRadius: '10px', padding: '1rem' }}>
                <p style={{ margin: 0, color: '#666' }}>Orders Count</p>
                <h4 style={{ margin: '0.35rem 0 0', color: '#0066cc', fontSize: '1.4rem' }}>{revenueMetrics.totalCount}</h4>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #e9ecef', borderRadius: '10px', padding: '1rem' }}>
                <p style={{ margin: 0, color: '#666' }}>Completed Orders</p>
                <h4 style={{ margin: '0.35rem 0 0', color: '#28a745', fontSize: '1.4rem' }}>{revenueMetrics.completedCount}</h4>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #e9ecef', borderRadius: '10px', padding: '1rem' }}>
                <p style={{ margin: 0, color: '#666' }}>Avg. Order Value</p>
                <h4 style={{ margin: '0.35rem 0 0', color: '#17a2b8', fontSize: '1.4rem' }}>LKR {Math.round(revenueMetrics.avgOrderValue).toLocaleString()}</h4>
              </div>
            </div>

            <div style={{ marginTop: '1.4rem' }}>
              <h4 style={{ margin: '0 0 0.85rem', color: '#6f0022', fontSize: '1.08rem' }}>
                Filtered Orders Details
              </h4>

              <div style={{ overflowX: 'auto', border: '1px solid #e9ecef', borderRadius: '10px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '980px' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e9ecef' }}>
                      <th style={{ padding: '0.85rem', textAlign: 'left', color: '#333' }}>Order #</th>
                      <th style={{ padding: '0.85rem', textAlign: 'left', color: '#333' }}>Customer</th>
                      <th style={{ padding: '0.85rem', textAlign: 'left', color: '#333' }}>Date</th>
                      <th style={{ padding: '0.85rem', textAlign: 'left', color: '#333' }}>Status</th>
                      <th style={{ padding: '0.85rem', textAlign: 'left', color: '#333' }}>Payment</th>
                      <th style={{ padding: '0.85rem', textAlign: 'left', color: '#333' }}>Items</th>
                      <th style={{ padding: '0.85rem', textAlign: 'right', color: '#333' }}>Subtotal</th>
                      <th style={{ padding: '0.85rem', textAlign: 'right', color: '#333' }}>Tax</th>
                      <th style={{ padding: '0.85rem', textAlign: 'right', color: '#333' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => {
                      const itemCount = Array.isArray(order.items)
                        ? order.items.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
                        : 0;

                      const statusColor = order.status === 'Completed'
                        ? { bg: '#d4edda', text: '#155724' }
                        : order.status === 'Pending'
                          ? { bg: '#fff3cd', text: '#856404' }
                          : order.status === 'Cancelled' || order.status === 'Refunded'
                            ? { bg: '#f8d7da', text: '#721c24' }
                            : { bg: '#e2e8f0', text: '#334155' };

                      return (
                        <tr key={order._id} style={{ borderBottom: '1px solid #eef2f5' }}>
                          <td style={{ padding: '0.85rem', fontWeight: 600, color: '#1f2937' }}>{order.orderNumber || '-'}</td>
                          <td style={{ padding: '0.85rem' }}>
                            <div style={{ fontWeight: 600, color: '#1f2937' }}>{order.customerName || '-'}</div>
                            <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>{order.customerEmail || '-'}</div>
                          </td>
                          <td style={{ padding: '0.85rem', color: '#374151' }}>{order.createdAt ? new Date(order.createdAt).toLocaleString() : '-'}</td>
                          <td style={{ padding: '0.85rem' }}>
                            <span style={{
                              background: statusColor.bg,
                              color: statusColor.text,
                              borderRadius: '999px',
                              padding: '0.25rem 0.6rem',
                              fontWeight: 600,
                              fontSize: '0.8rem'
                            }}>
                              {order.status || '-'}
                            </span>
                          </td>
                          <td style={{ padding: '0.85rem', color: '#374151' }}>
                            <div>{order.paymentStatus || 'Pending'}</div>
                            <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>{order.paymentMethod || '-'}</div>
                          </td>
                          <td style={{ padding: '0.85rem', color: '#374151' }}>{itemCount}</td>
                          <td style={{ padding: '0.85rem', textAlign: 'right', color: '#374151' }}>LKR {Math.round(Number(order.subtotal || 0)).toLocaleString()}</td>
                          <td style={{ padding: '0.85rem', textAlign: 'right', color: '#374151' }}>LKR {Math.round(Number(order.tax || 0)).toLocaleString()}</td>
                          <td style={{ padding: '0.85rem', textAlign: 'right', fontWeight: 700, color: '#6f0022' }}>LKR {Math.round(Number(order.total || 0)).toLocaleString()}</td>
                        </tr>
                      );
                    })}

                    {filteredOrders.length === 0 && (
                      <tr>
                        <td colSpan={9} style={{ padding: '1.1rem', textAlign: 'center', color: '#999' }}>
                          No orders found for the selected filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'customerInsights' && (
          <section style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '2rem',
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{ margin: 0, color: '#6f0022', fontSize: '1.4rem', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
              Customer Insights Panel
            </h3>
            <p style={{ margin: '0.35rem 0 1.2rem', color: '#666', fontSize: '0.95rem' }}>
              Top spenders, loyalty split, and customers at risk of inactivity.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.9rem', marginBottom: '1rem' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e9ecef', borderRadius: '10px', padding: '0.9rem' }}><strong>Standard:</strong> {customerInsights.loyaltyBreakdown.standard}</div>
              <div style={{ background: '#f8fafc', border: '1px solid #e9ecef', borderRadius: '10px', padding: '0.9rem' }}><strong>Silver:</strong> {customerInsights.loyaltyBreakdown.silver}</div>
              <div style={{ background: '#f8fafc', border: '1px solid #e9ecef', borderRadius: '10px', padding: '0.9rem' }}><strong>Gold:</strong> {customerInsights.loyaltyBreakdown.gold}</div>
              <div style={{ background: '#f8fafc', border: '1px solid #e9ecef', borderRadius: '10px', padding: '0.9rem' }}><strong>Platinum:</strong> {customerInsights.loyaltyBreakdown.platinum}</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ border: '1px solid #e9ecef', borderRadius: '10px', padding: '1rem' }}>
                <h4 style={{ margin: '0 0 0.8rem', color: '#6f0022' }}>Top Spenders</h4>
                {customerInsights.topSpenders.map((customer) => (
                  <div key={customer._id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #f1f3f5' }}>
                    <span>{customer.fullName}</span>
                    <strong>LKR {Math.round(customer.computedSpend || 0).toLocaleString()}</strong>
                  </div>
                ))}
                {customerInsights.topSpenders.length === 0 && <p style={{ color: '#888', margin: 0 }}>No spender insights yet.</p>}
              </div>

              <div style={{ border: '1px solid #e9ecef', borderRadius: '10px', padding: '1rem' }}>
                <h4 style={{ margin: '0 0 0.8rem', color: '#6f0022' }}>At-Risk Customers (90+ days inactive)</h4>
                {customerInsights.atRisk.map((customer) => (
                  <div key={customer._id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #f1f3f5' }}>
                    <div style={{ fontWeight: 600 }}>{customer.fullName}</div>
                    <div style={{ fontSize: '0.88rem', color: '#666' }}>{customer.email}</div>
                  </div>
                ))}
                {customerInsights.atRisk.length === 0 && <p style={{ color: '#888', margin: 0 }}>No inactive customers in this range.</p>}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'staff' && (
        <>
        {/* Create Staff Section */}
        <section style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '2rem',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <h3 style={{
                margin: 0,
                color: '#6f0022',
                fontSize: '1.4rem',
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 600
              }}>
                Staff Management
              </h3>
              <p style={{ margin: '0.35rem 0 0', color: '#666', fontSize: '0.95rem' }}>
                Add and manage staff accounts from one place.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setError('');
                setIsAddStaffModalOpen(true);
              }}
              style={{
                background: '#6f0022',
                color: '#fff',
                border: 'none',
                padding: '0.85rem 1.35rem',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: '0 8px 16px rgba(111, 0, 34, 0.18)',
                transition: 'transform 0.2s, background 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#4f0018';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#6f0022';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Add New Staff Member
            </button>
          </div>
        </section>
        </>
        )}

        {activeSection === 'staff' && isAddStaffModalOpen && (
          <div
            role="presentation"
            onClick={() => setIsAddStaffModalOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(18, 18, 18, 0.65)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              zIndex: 1000
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="add-staff-title"
              onClick={(event) => event.stopPropagation()}
              style={{
                width: 'min(100%, 760px)',
                background: '#fff',
                borderRadius: '24px',
                border: '1px solid #eadfd6',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.28)',
                overflow: 'hidden'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                gap: '1rem',
                padding: '2rem 2rem 1.25rem',
                borderBottom: '1px solid #f1e8ea'
              }}>
                <div>
                  <h3 id="add-staff-title" style={{
                    margin: 0,
                    color: '#6f0022',
                    fontSize: '1.8rem',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 600
                  }}>
                    Add New Staff Member
                  </h3>
                  <p style={{ margin: '0.35rem 0 0', color: '#666', fontSize: '0.95rem' }}>
                    Create a new staff login and assign a role.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddStaffModalOpen(false)}
                  aria-label="Close add staff dialog"
                  style={{
                    width: '2.9rem',
                    height: '2.9rem',
                    borderRadius: '50%',
                    border: '1px solid #eadfd6',
                    background: '#fff',
                    color: '#6f0022',
                    fontSize: '1.45rem',
                    lineHeight: 1,
                    cursor: 'pointer'
                  }}
                >
                  ×
                </button>
              </div>

              <form
                onSubmit={createStaff}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: '1.15rem',
                  padding: '2rem'
                }}
              >
                {error && (
                  <div style={{
                    gridColumn: '1 / -1',
                    background: '#f8d7da',
                    color: '#721c24',
                    padding: '0.9rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #f1b0b7',
                    fontSize: '0.92rem',
                    fontWeight: 500
                  }}>
                    {error}
                  </div>
                )}
                <input
                  required
                  value={form.fullName}
                  onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                  placeholder="Full Name"
                  style={{
                    gridColumn: '1 / -1',
                    padding: '1rem 1.1rem',
                    border: '1px solid #dee2e6',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    transition: 'border-color 0.2s'
                  }}
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="Email Address"
                  style={{
                    padding: '1rem 1.1rem',
                    border: '1px solid #dee2e6',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    transition: 'border-color 0.2s'
                  }}
                />
                <input
                  required
                  minLength={8}
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                  placeholder="Password (min. 8 characters)"
                  style={{
                    padding: '1rem 1.1rem',
                    border: '1px solid #dee2e6',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    transition: 'border-color 0.2s'
                  }}
                />
                <select
                  value={form.role}
                  onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
                  style={{
                    gridColumn: '1 / -1',
                    padding: '1rem 1.1rem',
                    border: '1px solid #dee2e6',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    background: '#fff',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <option>Customer Care</option>
                  <option>Inventory</option>
                  <option>Order Management</option>
                  <option>Product Management</option>
                  <option>Loyalty Management</option>
                  <option>Admin</option>
                </select>

                <div style={{
                  gridColumn: '1 / -1',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '0.9rem',
                  flexWrap: 'wrap',
                  paddingTop: '0.5rem'
                }}>
                  <button
                    type="button"
                    onClick={() => setIsAddStaffModalOpen(false)}
                    style={{
                      border: '1px solid #dee2e6',
                      color: '#6b7280',
                      padding: '0.95rem 1.4rem',
                      fontSize: '0.98rem',
                      borderRadius: '999px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    style={{
                      background: '#6f0022',
                      color: '#fff',
                      border: 'none',
                      padding: '0.95rem 1.55rem',
                      borderRadius: '999px',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      cursor: isSaving ? 'not-allowed' : 'pointer',
                      opacity: isSaving ? 0.7 : 1,
                      transition: 'background 0.2s'
                    }}
                  >
                    {isSaving ? 'Creating...' : 'Add Staff Member'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeSection === 'staff' && isEditStaffModalOpen && (
          <div
            role="presentation"
            onClick={() => {
              if (!isUpdatingStaff) setIsEditStaffModalOpen(false);
            }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(18, 18, 18, 0.65)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              zIndex: 1001
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="edit-staff-title"
              onClick={(event) => event.stopPropagation()}
              style={{
                width: 'min(100%, 700px)',
                background: '#fff',
                borderRadius: '24px',
                border: '1px solid #eadfd6',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.28)',
                overflow: 'hidden'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                gap: '1rem',
                padding: '2rem 2rem 1.25rem',
                borderBottom: '1px solid #f1e8ea'
              }}>
                <div>
                  <h3 id="edit-staff-title" style={{
                    margin: 0,
                    color: '#6f0022',
                    fontSize: '1.8rem',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 600
                  }}>
                    Edit Staff Member
                  </h3>
                  <p style={{ margin: '0.35rem 0 0', color: '#666', fontSize: '0.95rem' }}>
                    Update profile details and approval status.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={isUpdatingStaff}
                  onClick={() => setIsEditStaffModalOpen(false)}
                  aria-label="Close edit staff dialog"
                  style={{
                    width: '2.9rem',
                    height: '2.9rem',
                    borderRadius: '50%',
                    border: '1px solid #eadfd6',
                    background: '#fff',
                    color: '#6f0022',
                    fontSize: '1.45rem',
                    lineHeight: 1,
                    cursor: isUpdatingStaff ? 'not-allowed' : 'pointer',
                    opacity: isUpdatingStaff ? 0.6 : 1
                  }}
                >
                  ×
                </button>
              </div>

              <form
                onSubmit={updateStaff}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: '1.15rem',
                  padding: '2rem'
                }}
              >
                {error && (
                  <div style={{
                    gridColumn: '1 / -1',
                    background: '#f8d7da',
                    color: '#721c24',
                    padding: '0.9rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #f1b0b7',
                    fontSize: '0.92rem',
                    fontWeight: 500
                  }}>
                    {error}
                  </div>
                )}

                <input
                  required
                  value={editForm.fullName}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, fullName: e.target.value }))}
                  placeholder="Full Name"
                  style={{
                    gridColumn: '1 / -1',
                    padding: '1rem 1.1rem',
                    border: '1px solid #dee2e6',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />

                <select
                  value={editForm.role}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, role: e.target.value }))}
                  style={{
                    padding: '1rem 1.1rem',
                    border: '1px solid #dee2e6',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    background: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  <option>Customer Care</option>
                  <option>Inventory</option>
                  <option>Order Management</option>
                  <option>Product Management</option>
                  <option>Loyalty Management</option>
                  <option>Admin</option>
                </select>

                <select
                  value={editForm.status}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, status: e.target.value }))}
                  style={{
                    padding: '1rem 1.1rem',
                    border: '1px solid #dee2e6',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    background: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Revoked">Revoked</option>
                </select>

                <input
                  type="password"
                  minLength={8}
                  value={editForm.password}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, password: e.target.value }))}
                  placeholder="New Password (optional, min. 8 characters)"
                  style={{
                    gridColumn: '1 / -1',
                    padding: '1rem 1.1rem',
                    border: '1px solid #dee2e6',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />

                <div style={{
                  gridColumn: '1 / -1',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '0.9rem',
                  flexWrap: 'wrap',
                  paddingTop: '0.5rem'
                }}>
                  <button
                    type="button"
                    disabled={isUpdatingStaff}
                    onClick={() => setIsEditStaffModalOpen(false)}
                    style={{
                      border: '1px solid #dee2e6',
                      color: '#6b7280',
                      padding: '0.95rem 1.4rem',
                      fontSize: '0.98rem',
                      borderRadius: '999px',
                      fontWeight: 600,
                      cursor: isUpdatingStaff ? 'not-allowed' : 'pointer',
                      opacity: isUpdatingStaff ? 0.7 : 1
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isUpdatingStaff}
                    style={{
                      background: '#6f0022',
                      color: '#fff',
                      border: 'none',
                      padding: '0.95rem 1.55rem',
                      borderRadius: '999px',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      cursor: isUpdatingStaff ? 'not-allowed' : 'pointer',
                      opacity: isUpdatingStaff ? 0.7 : 1
                    }}
                  >
                    {isUpdatingStaff ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeSection === 'staff' && (
        <section style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '2rem',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h3 style={{
              margin: 0,
              color: '#6f0022',
              fontSize: '1.4rem',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 600
            }}>
              Staff Directory
            </h3>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{
                padding: '0.6rem 1rem',
                border: '1px solid #dee2e6',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontFamily: 'Poppins, sans-serif',
                background: '#fff',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Staff</option>
              <option value="Pending">Pending Approval</option>
              <option value="Approved">Approved</option>
              <option value="Revoked">Revoked</option>
            </select>
          </div>

          {error && (
            <div style={{
              background: '#f8d7da',
              color: '#721c24',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1.5rem',
              borderLeft: '4px solid #dc3545'
            }}>
              {error}
            </div>
          )}

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.95rem'
            }}>
              <thead>
                <tr style={{
                  borderBottom: '2px solid #e9ecef',
                  background: '#f8f9fa'
                }}>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Name
                  </th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Role
                  </th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Status
                  </th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredList.map((item) => (
                  <tr
                    key={item._id}
                    style={{
                      borderBottom: '1px solid #e9ecef',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
                  >
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: 500, color: '#333' }}>{item.fullName}</div>
                      <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.2rem' }}>
                        {item.email}
                      </div>
                    </td>
                    <td style={{ padding: '1rem', color: '#555' }}>
                      <span style={{
                        background: '#e9ecef',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontWeight: 500
                      }}>
                        {item.role}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{
                        background: item.status === 'Approved' ? '#d4edda' : item.status === 'Pending' ? '#fff3cd' : '#f8d7da',
                        color: item.status === 'Approved' ? '#155724' : item.status === 'Pending' ? '#856404' : '#721c24',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontWeight: 500
                      }}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        flexWrap: 'wrap'
                      }}>
                        {item.status !== 'Approved' && (
                          <button
                            disabled={busyId === item._id}
                            onClick={() => performAction(item._id, '/approve')}
                            style={{
                              padding: '0.4rem 0.8rem',
                              border: '1px solid #28a745',
                              background: '#fff',
                              color: '#28a745',
                              borderRadius: '4px',
                              fontSize: '0.8rem',
                              fontWeight: 500,
                              cursor: busyId === item._id ? 'not-allowed' : 'pointer',
                              opacity: busyId === item._id ? 0.6 : 1,
                              transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => !busyId && (e.target.style.background = '#28a745', e.target.style.color = '#fff')}
                            onMouseLeave={(e) => !busyId && (e.target.style.background = '#fff', e.target.style.color = '#28a745')}
                          >
                            Approve
                          </button>
                        )}
                        {item.status === 'Approved' && (
                          <button
                            disabled={busyId === item._id}
                            onClick={() => performAction(item._id, '/reject')}
                            style={{
                              padding: '0.4rem 0.8rem',
                              border: '1px solid #dc3545',
                              background: '#fff',
                              color: '#dc3545',
                              borderRadius: '4px',
                              fontSize: '0.8rem',
                              fontWeight: 500,
                              cursor: busyId === item._id ? 'not-allowed' : 'pointer',
                              opacity: busyId === item._id ? 0.6 : 1,
                              transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => !busyId && (e.target.style.background = '#dc3545', e.target.style.color = '#fff')}
                            onMouseLeave={(e) => !busyId && (e.target.style.background = '#fff', e.target.style.color = '#dc3545')}
                          >
                            Reject
                          </button>
                        )}
                        <button
                          disabled={busyId === item._id}
                          onClick={() => openEditStaffModal(item)}
                          style={{
                            padding: '0.4rem 0.8rem',
                            border: '1px solid #0ea5e9',
                            background: '#fff',
                            color: '#0ea5e9',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            cursor: busyId === item._id ? 'not-allowed' : 'pointer',
                            opacity: busyId === item._id ? 0.6 : 1,
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => !busyId && (e.target.style.background = '#0ea5e9', e.target.style.color = '#fff')}
                          onMouseLeave={(e) => !busyId && (e.target.style.background = '#fff', e.target.style.color = '#0ea5e9')}
                        >
                          Edit
                        </button>
                        <button
                          disabled={busyId === item._id}
                          onClick={() => deleteStaff(item._id)}
                          style={{
                            padding: '0.4rem 0.8rem',
                            border: '1px solid #999',
                            background: '#fff',
                            color: '#999',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            cursor: busyId === item._id ? 'not-allowed' : 'pointer',
                            opacity: busyId === item._id ? 0.6 : 1,
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => !busyId && (e.target.style.background = '#999', e.target.style.color = '#fff')}
                          onMouseLeave={(e) => !busyId && (e.target.style.background = '#fff', e.target.style.color = '#999')}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredList.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{
                      padding: '2rem 1rem',
                      textAlign: 'center',
                      color: '#999'
                    }}>
                      No staff members found for the selected filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
        )}

        {activeSection === 'customers' && (
        <section style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '2rem',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          marginTop: '2rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h3 style={{
              margin: 0,
              color: '#6f0022',
              fontSize: '1.4rem',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 600
            }}>
              Customer Management
            </h3>
            <select
              value={customerFilter}
              onChange={(e) => setCustomerFilter(e.target.value)}
              style={{
                padding: '0.6rem 1rem',
                border: '1px solid #dee2e6',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontFamily: 'Poppins, sans-serif',
                background: '#fff',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Customers</option>
              <option value="active">Active Only</option>
              <option value="premium">Premium Members</option>
            </select>
          </div>

          {error && (
            <div style={{
              background: '#f8d7da',
              color: '#721c24',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1.5rem',
              borderLeft: '4px solid #dc3545'
            }}>
              {error}
            </div>
          )}

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.95rem'
            }}>
              <thead>
                <tr style={{
                  borderBottom: '2px solid #e9ecef',
                  background: '#f8f9fa'
                }}>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Customer Name
                  </th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Email
                  </th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Phone
                  </th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Loyalty Tier
                  </th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#333',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {customerList && customerList.length > 0 ? (
                  customerList.map((customer) => (
                    <tr
                      key={customer._id}
                      style={{
                        borderBottom: '1px solid #e9ecef',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
                    >
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontWeight: 500, color: '#333' }}>{customer.fullName || 'N/A'}</div>
                      </td>
                      <td style={{ padding: '1rem', color: '#555' }}>
                        {customer.email}
                      </td>
                      <td style={{ padding: '1rem', color: '#555' }}>
                        {customer.phone || 'N/A'}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          background: '#e9ecef',
                          padding: '0.3rem 0.7rem',
                          borderRadius: '4px',
                          fontSize: '0.85rem',
                          fontWeight: 500
                        }}>
                          {customer.loyaltyTier || 'Standard'}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <button
                          disabled={customerBusyId === customer._id}
                          onClick={() => deleteCustomer(customer._id)}
                          style={{
                            padding: '0.4rem 0.8rem',
                            border: '1px solid #dc3545',
                            background: '#fff',
                            color: '#dc3545',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            cursor: customerBusyId === customer._id ? 'not-allowed' : 'pointer',
                            opacity: customerBusyId === customer._id ? 0.6 : 1,
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => !customerBusyId && (e.target.style.background = '#dc3545', e.target.style.color = '#fff')}
                          onMouseLeave={(e) => !customerBusyId && (e.target.style.background = '#fff', e.target.style.color = '#dc3545')}
                        >
                          {customerBusyId === customer._id ? 'Deleting...' : 'Delete'}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{
                      padding: '2rem 1rem',
                      textAlign: 'center',
                      color: '#999'
                    }}>
                      No customers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
        )}
      </main>
    </div>
  );
}
