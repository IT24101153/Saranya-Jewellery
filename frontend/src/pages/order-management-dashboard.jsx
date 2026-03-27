import { useEffect, useMemo, useState } from 'react';
import authManager from '../auth.js';
import StaffDashboardLayout from '../components/StaffDashboardLayout.jsx';

const DASHBOARD_LINKS = [
  { href: '/order-management-dashboard', label: 'Orders' },
  { href: '/inventory-dashboard', label: 'Inventory' },
  { href: '/customer-care-dashboard', label: 'Customer Care' }
];

const STATUSES = ['All', 'Pending', 'Payment Received', 'Invoice Created', 'Confirmed', 'Preparing', 'Ready for Collection', 'Completed', 'Cancelled', 'Refunded'];

const NEXT_STATUS = {
  Pending: 'Payment Received',
  'Payment Received': 'Invoice Created',
  'Invoice Created': 'Confirmed',
  Confirmed: 'Preparing',
  Preparing: 'Ready for Collection',
  'Ready for Collection': 'Completed'
};

export default function OrderManagementDashboardPage() {
  const [staffUser, setStaffUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [busyId, setBusyId] = useState('');
  const [error, setError] = useState('');

  const filteredOrders = useMemo(() => {
    if (statusFilter === 'All') return orders;
    return orders.filter((item) => item.status === statusFilter);
  }, [orders, statusFilter]);

  const totalRevenue = useMemo(
    () => filteredOrders.reduce((sum, order) => sum + Number(order.total || 0), 0),
    [filteredOrders]
  );

  useEffect(() => {
    document.title = 'Order Management Dashboard - Saranya Jewellery';
  }, []);

  useEffect(() => {
    async function bootstrap() {
      const me = await authManager.checkStaffAuth('Order Management');
      if (!me || me.needsApproval) return;
      setStaffUser(me);
      await loadOrders();
    }
    bootstrap();
  }, []);

  async function loadOrders() {
    setError('');
    try {
      const query = statusFilter === 'All' ? '' : `?status=${encodeURIComponent(statusFilter)}`;
      const response = await authManager.apiRequest(`/api/orders${query}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to load orders');
      setOrders(Array.isArray(data) ? data : []);
    } catch (loadError) {
      setError(loadError.message || 'Failed to load orders');
      setOrders([]);
    }
  }

  useEffect(() => {
    if (!staffUser) return;
    loadOrders();
  }, [statusFilter]);

  async function patchOrder(orderId, endpoint, body = null) {
    setBusyId(orderId);
    setError('');
    try {
      const response = await authManager.apiRequest(endpoint, {
        method: 'PATCH',
        ...(body ? { body: JSON.stringify(body) } : {})
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to update order');
      await loadOrders();
    } catch (patchError) {
      setError(patchError.message || 'Failed to update order');
    } finally {
      setBusyId('');
    }
  }

  async function advanceOrder(order) {
    const next = NEXT_STATUS[order.status];
    if (!next) return;
    await patchOrder(order._id, `/api/orders/${order._id}/status`, { status: next });
  }

  async function markPaid(order) {
    await patchOrder(order._id, `/api/orders/${order._id}/payment-received`);
  }

  async function markUnpaid(order) {
    if (!window.confirm('Cancel this order due to payment not received?')) return;
    await patchOrder(order._id, `/api/orders/${order._id}/payment-not-received`);
  }

  if (!staffUser) return <p style={{ padding: '1rem' }}>Checking order management access...</p>;

  return (
    <StaffDashboardLayout
      title="Order Management Dashboard"
      staff={staffUser}
      onLogout={() => authManager.logout()}
      links={DASHBOARD_LINKS}
    >
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Orders</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>{filteredOrders.length}</h2>
        </div>
        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: '0.85rem' }}>
          <p style={{ margin: 0, color: '#666' }}>Revenue (filtered)</p>
          <h2 style={{ margin: '0.35rem 0 0', color: '#6f0022' }}>Rs. {totalRevenue.toLocaleString()}</h2>
        </div>
      </section>

      <section style={{ border: '1px solid #eee', borderRadius: 12, padding: '1rem', marginTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.7rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <h3 style={{ margin: 0, color: '#6f0022' }}>Orders</h3>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            {STATUSES.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        {error && <p style={{ color: '#b42318' }}>{error}</p>}
        <div style={{ display: 'grid', gap: '0.7rem', marginTop: '0.8rem' }}>
          {filteredOrders.map((order) => {
            const busy = busyId === order._id;
            return (
              <article key={order._id} style={{ border: '1px solid #f0f0f0', borderRadius: 10, padding: '0.8rem' }}>
                <h4 style={{ margin: '0 0 0.3rem' }}>{order.orderNumber} | {order.customerName}</h4>
                <p style={{ margin: 0, color: '#666' }}>
                  Status: {order.status} | Payment: {order.paymentStatus || 'Pending'} | Total: Rs. {Number(order.total || 0).toLocaleString()}
                </p>
                <p style={{ margin: '0.4rem 0', color: '#555' }}>Items: {Array.isArray(order.items) ? order.items.length : 0}</p>
                <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                  <button type="button" disabled={busy} onClick={() => markPaid(order)}>Mark Paid</button>
                  <button type="button" disabled={busy} onClick={() => markUnpaid(order)}>Payment Not Received</button>
                  <button type="button" disabled={busy || !NEXT_STATUS[order.status]} onClick={() => advanceOrder(order)}>
                    {NEXT_STATUS[order.status] ? `Move to ${NEXT_STATUS[order.status]}` : 'No Next Stage'}
                  </button>
                </div>
              </article>
            );
          })}
          {filteredOrders.length === 0 && <p style={{ margin: 0, color: '#666' }}>No orders for selected filter.</p>}
        </div>
      </section>
    </StaffDashboardLayout>
  );
}
