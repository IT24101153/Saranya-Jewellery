import { useEffect, useState } from 'react';
import authManager from '../auth.js';
import { FiGift, FiMessageCircle, FiStar, FiLogOut } from 'react-icons/fi';

const DASHBOARD_LINKS = [
  { href: '/customer-care-dashboard', label: 'Messages' },
  { href: '/order-management-dashboard', label: 'Orders' },
  { href: '/admin-dashboard', label: 'Admin' }
];

const SEASON_TYPES = ['Seasonal Offer', 'Clearance Sale', 'Flash Sale', 'New Collection', 'Alert'];

export default function CustomerCareDashboardPage() {
  const [staffUser, setStaffUser] = useState(null);
  const [activeTab, setActiveTab] = useState('offers'); // 'offers', 'messages', 'reviews'
  
  // Offers state
  const [offers, setOffers] = useState([]);
  const [offerForm, setOfferForm] = useState({
    title: '',
    description: '',
    offerType: 'Seasonal Offer',
    discountPercentage: '',
    validUntil: ''
  });
  const [isCreatingOffer, setIsCreatingOffer] = useState(false);
  const [editingOfferId, setEditingOfferId] = useState(null);

  // Messages state
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [chatStats, setChatStats] = useState({ active: 0, resolved: 0, pending: 0 });

  // Reviews state
  const [reviews, setReviews] = useState([]);
  const [reviewStats, setReviewStats] = useState({ pending: 0, approved: 0, rejected: 0 });
  const [selectedReview, setSelectedReview] = useState(null);
  const [staffReply, setStaffReply] = useState('');

  const [error, setError] = useState('');

  const todayDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    document.title = 'Customer Care Dashboard - Saranya Jewellery';
  }, []);

  useEffect(() => {
    async function bootstrap() {
      const me = await authManager.checkStaffAuth('Customer Care');
      if (!me || me.needsApproval) return;
      setStaffUser(me);
      await Promise.all([loadOffers(), loadChats(), loadReviews()]);
    }
    bootstrap();
  }, []);

  // ============ OFFERS FUNCTIONS ============
  async function loadOffers() {
    try {
      const response = await authManager.apiRequest('/api/messages');
      const data = await response.json();
      if (response.ok) {
        const seasonalOffers = Array.isArray(data) ? data.filter(m => m.type === 'promotion') : [];
        setOffers(seasonalOffers);
      }
    } catch (err) {
      console.error('Error loading offers:', err);
    }
  }

  async function createOffer(event) {
    event.preventDefault();
    if (!offerForm.title || !offerForm.description || !offerForm.validUntil) {
      setError('All fields required');
      return;
    }

    const parsedDiscount = Number(offerForm.discountPercentage || 0);
    if (!Number.isFinite(parsedDiscount) || parsedDiscount < 0 || parsedDiscount > 100) {
      setError('Discount percentage must be between 0 and 100');
      return;
    }

    if (offerForm.validUntil < todayDate) {
      setError('Offer valid until date cannot be in the past');
      return;
    }

    setIsCreatingOffer(true);
    setError('');
    try {
      const endpoint = editingOfferId ? `/api/messages/${editingOfferId}` : '/api/messages';
      const method = editingOfferId ? 'PUT' : 'POST';

      const response = await authManager.apiRequest(endpoint, {
        method,
        body: JSON.stringify({
          title: offerForm.title,
          message: offerForm.description,
          type: 'promotion',
          status: 'active',
          targetAudience: 'all',
          sendOnLogin: true,
          validUntil: offerForm.validUntil,
          discountPercentage: parsedDiscount
        })
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Failed to create offer');
      } else {
        setOfferForm({ title: '', description: '', offerType: 'Seasonal Offer', discountPercentage: '', validUntil: '' });
        setEditingOfferId(null);
        await loadOffers();
      }
    } catch (err) {
      setError(err.message || 'Error creating offer');
    } finally {
      setIsCreatingOffer(false);
    }
  }

  function startEditOffer(offer) {
    setEditingOfferId(offer._id);
    setError('');
    setOfferForm({
      title: offer.title || '',
      description: offer.message || '',
      offerType: 'Seasonal Offer',
      discountPercentage: offer.discountPercentage ?? '',
      validUntil: offer.validUntil ? new Date(offer.validUntil).toISOString().split('T')[0] : ''
    });
  }

  function cancelEditOffer() {
    setEditingOfferId(null);
    setOfferForm({ title: '', description: '', offerType: 'Seasonal Offer', discountPercentage: '', validUntil: '' });
    setError('');
  }

  async function sendOfferEmails(offerId) {
    if (!window.confirm('Send this offer to all customers?')) return;

    try {
      setError('');
      const response = await authManager.apiRequest(`/api/messages/${offerId}/send-email`, {
        method: 'POST'
      });

      const data = await response.json();
      if (response.ok) {
        alert(`Offer sent to ${data.recipientsCount || 0} customers`);
        await loadOffers();
      } else {
        setError(data.message || 'Failed to send offer');
      }
    } catch (err) {
      setError(err.message || 'Error sending offer');
    }
  }

  async function deleteOffer(offerId) {
    if (!window.confirm('Delete this offer?')) return;

    try {
      setError('');
      const response = await authManager.apiRequest(`/api/messages/${offerId}`, {
        method: 'DELETE'
      });

      const data = await response.json();
      if (response.ok) {
        await loadOffers();
      } else {
        setError(data.message || 'Failed to delete offer');
      }
    } catch (err) {
      setError(err.message || 'Error deleting offer');
    }
  }

  // ============ MESSAGES FUNCTIONS ============
  async function loadChats() {
    try {
      const response = await authManager.apiRequest('/api/chat/all');
      const data = await response.json();
      if (response.ok) {
        setChats(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error('Error loading chats:', err);
    }
  }

  async function selectChat(chat) {
    if (!chat?._id) {
      setError('Invalid chat selected');
      return;
    }

    try {
      setError('');
      // Fetch full chat details with all messages
      const response = await authManager.apiRequest(`/api/chat/${chat._id}`);
      const fullChat = await response.json();
      if (response.ok) {
        setSelectedChat(fullChat);
        setChatMessages(fullChat.messages || []);
        setReplyText('');
      } else {
        setError(fullChat.message || 'Failed to load chat details');
      }
    } catch (err) {
      console.error('Error loading chat details:', err);
      setError('Failed to load chat details');
    }
  }

  async function sendChatReply() {
    if (!replyText.trim() || !selectedChat) return;

    try {
      setError('');
      const response = await authManager.apiRequest(`/api/chat/${selectedChat._id}/reply`, {
        method: 'POST',
        body: JSON.stringify({ message: replyText })
      });

      const data = await response.json();
      if (response.ok) {
        setReplyText('');
        await selectChat(selectedChat);
        await loadChats();
      } else {
        setError(data.message || 'Failed to send reply');
      }
    } catch (err) {
      setError(err.message || 'Error sending reply');
    }
  }

  async function updateChatStatus(chatId, newStatus) {
    try {
      setError('');
      const response = await authManager.apiRequest(`/api/chat/${chatId}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus })
      });

      const data = await response.json();
      if (response.ok) {
        await loadChats();
      } else {
        setError(data.message || 'Failed to update status');
      }
    } catch (err) {
      setError(err.message || 'Error updating status');
    }
  }

  // ============ REVIEWS FUNCTIONS ============
  async function loadReviews() {
    try {
      const response = await authManager.apiRequest('/api/reviews');
      const data = await response.json();
      if (response.ok) {
        setReviews(Array.isArray(data.reviews) ? data.reviews : []);
        setReviewStats(data.stats || { pending: 0, approved: 0, rejected: 0 });
      }
    } catch (err) {
      console.error('Error loading reviews:', err);
    }
  }

  async function updateReviewStatus(reviewId, newStatus, reply = '') {
    try {
      setError('');
      const response = await authManager.apiRequest(`/api/reviews/${reviewId}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus, staffReply: reply })
      });

      const data = await response.json();
      if (response.ok) {
        setSelectedReview(null);
        setStaffReply('');
        await loadReviews();
      } else {
        setError(data.message || 'Failed to update review');
      }
    } catch (err) {
      setError(err.message || 'Error updating review');
    }
  }

  async function deleteReview(reviewId) {
    if (!window.confirm('Delete this review?')) return;

    try {
      setError('');
      const response = await authManager.apiRequest(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
      });

      const data = await response.json();
      if (response.ok) {
        await loadReviews();
      } else {
        setError(data.message || 'Failed to delete review');
      }
    } catch (err) {
      setError(err.message || 'Error deleting review');
    }
  }

  if (!staffUser) return <p style={{ padding: '1rem' }}>Checking customer care access...</p>;

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
            <FiGift size={28} />
            Customer Care
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
              { id: 'offers', icon: FiGift, label: 'Offers' },
              { id: 'messages', icon: FiMessageCircle, label: 'Customer Messages' },
              { id: 'reviews', icon: FiStar, label: 'Product Reviews' }
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
              background: 'none',
              border: 'none',
              color: '#e0bf63',
              cursor: 'pointer',
              padding: '0.5rem',
              fontSize: '1.3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Logout"
          >
            <FiLogOut />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{
        marginLeft: '320px',
        flex: 1,
        overflow: 'auto',
        padding: '2rem'
      }}>
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

      {/* OFFERS TAB */}
      {activeTab === 'offers' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Active Offers</p>
              <h2 style={{ margin: '0.5rem 0 0', color: '#6f0022', fontSize: '1.8rem' }}>
                {offers.filter(o => o.status === 'active').length}
              </h2>
            </div>
            <div style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Total Sent</p>
              <h2 style={{ margin: '0.5rem 0 0', color: '#6f0022', fontSize: '1.8rem' }}>
                {offers.reduce((sum, o) => sum + (o.sentCount || 0), 0)}
              </h2>
            </div>
          </div>

          {/* Create Offer Form */}
          <section style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginTop: 0, color: '#6f0022', fontSize: '1.1rem' }}>
              {editingOfferId ? 'Edit Offer' : 'Create New Offer'}
            </h3>
            <form onSubmit={createOffer} style={{ display: 'grid', gap: '0.8rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <input
                  type="text"
                  placeholder="Offer Title"
                  value={offerForm.title}
                  onChange={(e) => setOfferForm({ ...offerForm, title: e.target.value })}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
                <select
                  value={offerForm.offerType}
                  onChange={(e) => setOfferForm({ ...offerForm, offerType: e.target.value })}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {SEASON_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Offer Description"
                value={offerForm.description}
                onChange={(e) => setOfferForm({ ...offerForm, description: e.target.value })}
                style={{
                  padding: '0.6rem',
                  border: '1px solid #ddd',
                  borderRadius: 8,
                  fontSize: '0.94rem',
                  fontFamily: 'Poppins, sans-serif',
                  minHeight: '80px',
                  resize: 'vertical'
                }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <input
                  type="number"
                  placeholder="Discount % (optional)"
                  value={offerForm.discountPercentage}
                  onChange={(e) => setOfferForm({ ...offerForm, discountPercentage: e.target.value })}
                  min="0"
                  max="100"
                  step="0.01"
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
                <input
                  type="date"
                  value={offerForm.validUntil}
                  onChange={(e) => setOfferForm({ ...offerForm, validUntil: e.target.value })}
                  min={todayDate}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.94rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={isCreatingOffer}
                style={{
                  padding: '0.7rem 1.2rem',
                  background: '#6f0022',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: isCreatingOffer ? 'not-allowed' : 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  opacity: isCreatingOffer ? 0.6 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                {isCreatingOffer ? (editingOfferId ? 'Updating...' : 'Creating...') : (editingOfferId ? 'Update Offer' : 'Create Offer')}
              </button>
              {editingOfferId && (
                <button
                  type="button"
                  onClick={cancelEditOffer}
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

          {/* Offers List */}
          <div style={{ display: 'grid', gap: '0.8rem' }}>
            {offers.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '2rem' }}>No offers created yet</p>
            ) : (
              offers.map(offer => (
                <div key={offer._id} style={{
                  background: '#fafbfc',
                  border: '1px solid #eee',
                  borderRadius: 12,
                  padding: '1rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'start',
                  gap: '1rem'
                }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.4rem', color: '#6f0022', fontSize: '1rem' }}>
                      {offer.title}
                    </h4>
                    <p style={{ margin: '0.3rem 0', color: '#666', fontSize: '0.9rem' }}>
                      {offer.message}
                    </p>
                    <p style={{ margin: '0.3rem 0 0', color: '#999', fontSize: '0.85rem' }}>
                      {offer.discountPercentage ? `${offer.discountPercentage}% off • ` : ''}
                      Sent: {offer.sentCount || 0}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                    <button
                      onClick={() => startEditOffer(offer)}
                      style={{
                        padding: '0.5rem 1rem',
                        background: '#fff',
                        color: '#6f0022',
                        border: '1px solid #e0bf63',
                        borderRadius: 6,
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => sendOfferEmails(offer._id)}
                      style={{
                        padding: '0.5rem 1rem',
                        background: '#e0bf63',
                        color: '#6f0022',
                        border: 'none',
                        borderRadius: 6,
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Send Email
                    </button>
                    <button
                      onClick={() => deleteOffer(offer._id)}
                      style={{
                        padding: '0.5rem 1rem',
                        background: '#fff',
                        color: '#c33',
                        border: '1px solid #ddd',
                        borderRadius: 6,
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* MESSAGES TAB */}
      {activeTab === 'messages' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', minHeight: '500px' }}>
          {/* Chat List */}
          <div>
            <h3 style={{ marginTop: 0, color: '#6f0022', fontSize: '1rem' }}>Customers</h3>
            <div style={{ display: 'grid', gap: '0.5rem', maxHeight: '600px', overflowY: 'auto' }}>
              {chats.length === 0 ? (
                <p style={{ color: '#999', fontSize: '0.9rem' }}>No messages</p>
              ) : (
                chats.map(chat => (
                  <div
                    key={chat._id}
                    onClick={() => selectChat(chat)}
                    style={{
                      padding: '0.8rem',
                      background: selectedChat?._id === chat._id ? '#e8f0f5' : '#fafbfc',
                      border: selectedChat?._id === chat._id ? '2px solid #6f0022' : '1px solid #eee',
                      borderRadius: 8,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <p style={{ margin: 0, fontWeight: '600', color: '#333', fontSize: '0.9rem' }}>
                      {chat.customerName}
                    </p>
                    <p style={{ margin: '0.3rem 0 0', color: '#666', fontSize: '0.85rem' }}>
                      {chat.customerEmail}
                    </p>
                    <p style={{
                      margin: '0.3rem 0 0',
                      fontSize: '0.75rem',
                      color: '#999',
                      fontWeight: chat.status === 'active' ? '600' : '400'
                    }}>
                      {chat.status === 'active' && '🟢'} {chat.status}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Chat Detail */}
          {selectedChat ? (
            <div style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                <h4 style={{ margin: 0, color: '#6f0022' }}>{selectedChat.customerName}</h4>
                <p style={{ margin: '0.3rem 0 0', color: '#666', fontSize: '0.9rem' }}>{selectedChat.customerEmail}</p>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.8rem' }}>
                  {['active', 'pending', 'resolved'].map(status => (
                    <button
                      key={status}
                      onClick={() => updateChatStatus(selectedChat._id, status)}
                      style={{
                        padding: '0.4rem 0.8rem',
                        background: status === selectedChat.status ? '#6f0022' : '#fff',
                        color: status === selectedChat.status ? '#fff' : '#6f0022',
                        border: `1px solid ${status === selectedChat.status ? '#6f0022' : '#ddd'}`,
                        borderRadius: 6,
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem', display: 'grid', gap: '0.8rem' }}>
                {chatMessages.length === 0 ? (
                  <p style={{ color: '#999', textAlign: 'center' }}>No messages yet</p>
                ) : (
                  chatMessages.map((msg, idx) => (
                    <div key={idx} style={{
                      background: msg.sender === 'care-manager' ? '#e8f0f5' : '#fff',
                      border: '1px solid #eee',
                      borderRadius: 8,
                      padding: '0.8rem',
                      marginLeft: msg.sender === 'care-manager' ? 0 : '2rem'
                    }}>
                      <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '600', color: '#333' }}>
                        {msg.senderName}
                      </p>
                      <p style={{ margin: '0.4rem 0 0', color: '#333', fontSize: '0.9rem' }}>
                        {msg.message}
                      </p>
                      <p style={{ margin: '0.4rem 0 0', color: '#999', fontSize: '0.75rem' }}>
                        {new Date(msg.timestamp).toLocaleDateString()}{' '}
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  ))
                )}
              </div>

              {/* Reply Box */}
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <textarea
                  placeholder="Type your reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  style={{
                    padding: '0.6rem',
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    fontSize: '0.9rem',
                    fontFamily: 'Poppins, sans-serif',
                    minHeight: '80px',
                    resize: 'vertical'
                  }}
                />
                <button
                  onClick={sendChatReply}
                  disabled={!replyText.trim()}
                  style={{
                    padding: '0.6rem 1.2rem',
                    background: replyText.trim() ? '#6f0022' : '#ccc',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: replyText.trim() ? 'pointer' : 'not-allowed',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Send Reply
                </button>
              </div>
            </div>
          ) : (
            <div style={{
              background: '#fafbfc',
              border: '1px solid #eee',
              borderRadius: 12,
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999'
            }}>
              Select a customer to view messages
            </div>
          )}
        </div>
      )}

      {/* REVIEWS TAB */}
      {activeTab === 'reviews' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Pending</p>
              <h2 style={{ margin: '0.5rem 0 0', color: '#f39c12', fontSize: '1.8rem' }}>
                {reviewStats.pending}
              </h2>
            </div>
            <div style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Approved</p>
              <h2 style={{ margin: '0.5rem 0 0', color: '#27ae60', fontSize: '1.8rem' }}>
                {reviewStats.approved}
              </h2>
            </div>
            <div style={{ background: '#fafbfc', border: '1px solid #eee', borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Rejected</p>
              <h2 style={{ margin: '0.5rem 0 0', color: '#e74c3c', fontSize: '1.8rem' }}>
                {reviewStats.rejected}
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '0.8rem' }}>
            {reviews.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '2rem' }}>No reviews yet</p>
            ) : (
              reviews.map(review => (
                <div key={review._id} style={{
                  background: '#fafbfc',
                  border: '1px solid #eee',
                  borderRadius: 12,
                  padding: '1rem'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <h4 style={{ margin: 0, color: '#6f0022', fontSize: '0.95rem' }}>
                          {review.customerName} • {review.productName}
                        </h4>
                        <span style={{
                          background: review.status === 'approved' ? '#d4edda' : review.status === 'rejected' ? '#f8d7da' : '#fff3cd',
                          color: review.status === 'approved' ? '#155724' : review.status === 'rejected' ? '#721c24' : '#856404',
                          padding: '0.2rem 0.6rem',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          borderRadius: 4,
                          textTransform: 'capitalize'
                        }}>
                          {review.status}
                        </span>
                      </div>
                      <p style={{ margin: '0.3rem 0', color: '#6f0022', fontSize: '0.9rem', fontWeight: '600' }}>
                        {'⭐'.repeat(review.rating)} ({review.rating}/5) - {review.title}
                      </p>
                      <p style={{ margin: '0.3rem 0 0', color: '#333', fontSize: '0.9rem' }}>
                        {review.comment}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {review.status === 'pending' && (
                        <>
                          <button
                            onClick={() => setSelectedReview(selectedReview?._id === review._id ? null : review)}
                            style={{
                              padding: '0.5rem 0.8rem',
                              background: '#27ae60',
                              color: '#fff',
                              border: 'none',
                              borderRadius: 6,
                              fontSize: '0.8rem',
                              cursor: 'pointer',
                              fontFamily: 'Poppins, sans-serif'
                            }}
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => updateReviewStatus(review._id, 'rejected')}
                            style={{
                              padding: '0.5rem 0.8rem',
                              background: '#e74c3c',
                              color: '#fff',
                              border: 'none',
                              borderRadius: 6,
                              fontSize: '0.8rem',
                              cursor: 'pointer',
                              fontFamily: 'Poppins, sans-serif'
                            }}
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {review.status === 'approved' && (
                        <button
                          onClick={() => setSelectedReview(selectedReview?._id === review._id ? null : review)}
                          style={{
                            padding: '0.5rem 0.8rem',
                            background: '#3498db',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 6,
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            fontFamily: 'Poppins, sans-serif'
                          }}
                        >
                          Add Reply
                        </button>
                      )}
                      <button
                        onClick={() => deleteReview(review._id)}
                        style={{
                          padding: '0.5rem 0.8rem',
                          background: '#fff',
                          color: '#666',
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
                  </div>

                  {/* Reply Section */}
                  {selectedReview?._id === review._id && (
                    <div style={{
                      background: '#fff',
                      border: '1px solid #ddd',
                      borderRadius: 8,
                      padding: '1rem',
                      marginTop: '1rem',
                      display: 'grid',
                      gap: '0.5rem'
                    }}>
                      {review.staffReply?.reply && (
                        <div style={{ background: '#f5f5f5', padding: '0.8rem', borderRadius: 6, marginBottom: '0.5rem' }}>
                          <p style={{ margin: 0, color: '#666', fontSize: '0.85rem', fontWeight: '600' }}>
                            Staff Reply:
                          </p>
                          <p style={{ margin: '0.3rem 0 0', color: '#333', fontSize: '0.9rem' }}>
                            {review.staffReply.reply}
                          </p>
                        </div>
                      )}
                      {review.status === 'pending' && (
                        <>
                          <textarea
                            placeholder="Add staff reply..."
                            value={staffReply}
                            onChange={(e) => setStaffReply(e.target.value)}
                            style={{
                              padding: '0.6rem',
                              border: '1px solid #ddd',
                              borderRadius: 6,
                              fontSize: '0.9rem',
                              fontFamily: 'Poppins, sans-serif',
                              minHeight: '60px'
                            }}
                          />
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                              onClick={() => updateReviewStatus(review._id, 'approved', staffReply)}
                              style={{
                                flex: 1,
                                padding: '0.5rem',
                                background: '#27ae60',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 6,
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontFamily: 'Poppins, sans-serif'
                              }}
                            >
                              Approve with Reply
                            </button>
                            <button
                              onClick={() => setSelectedReview(null)}
                              style={{
                                flex: 1,
                                padding: '0.5rem',
                                background: '#fff',
                                color: '#666',
                                border: '1px solid #ddd',
                                borderRadius: 6,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                fontFamily: 'Poppins, sans-serif'
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </>
                      )}
                      {review.status === 'approved' && (
                        <>
                          <textarea
                            placeholder="Update staff reply..."
                            value={staffReply}
                            onChange={(e) => setStaffReply(e.target.value)}
                            style={{
                              padding: '0.6rem',
                              border: '1px solid #ddd',
                              borderRadius: 6,
                              fontSize: '0.9rem',
                              fontFamily: 'Poppins, sans-serif',
                              minHeight: '60px'
                            }}
                          />
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                              onClick={() => updateReviewStatus(review._id, 'approved', staffReply)}
                              style={{
                                flex: 1,
                                padding: '0.5rem',
                                background: '#3498db',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 6,
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontFamily: 'Poppins, sans-serif'
                              }}
                            >
                              Update Reply
                            </button>
                            <button
                              onClick={() => setSelectedReview(null)}
                              style={{
                                flex: 1,
                                padding: '0.5rem',
                                background: '#fff',
                                color: '#666',
                                border: '1px solid #ddd',
                                borderRadius: 6,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                fontFamily: 'Poppins, sans-serif'
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      </div>
    </div>
  );
}
