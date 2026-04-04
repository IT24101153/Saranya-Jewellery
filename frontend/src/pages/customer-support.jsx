import { useEffect, useMemo, useState } from 'react';
import authManager from '../auth.js';

const ZAPIER_CHATBOT_SCRIPT_SRC =
  'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';

export default function CustomerSupportPage() {
  const [customer, setCustomer] = useState(null);
  const [messages, setMessages] = useState([]);
  const [chatStatus, setChatStatus] = useState('active');
  const [lastMessageAt, setLastMessageAt] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [sending, setSending] = useState(false);
  const [cart] = useState(() => JSON.parse(localStorage.getItem('saranyaCart') || '[]'));

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0),
    [cart]
  );

  useEffect(() => {
    document.title = 'Customer Support - Saranya Jewellery';
  }, []);

  useEffect(() => {
    if (document.querySelector(`script[src="${ZAPIER_CHATBOT_SCRIPT_SRC}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = ZAPIER_CHATBOT_SCRIPT_SRC;
    script.type = 'module';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    let intervalId;

    async function init() {
      const loggedInCustomer = await authManager.checkCustomerAuth();
      if (!loggedInCustomer) return;

      setCustomer(loggedInCustomer);
      await loadMessages();
      intervalId = window.setInterval(loadMessages, 5000);
    }

    init();
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  async function loadMessages() {
    try {
      const response = await authManager.apiRequest('/api/chat/my-messages');
      if (!response.ok) return;
      const data = await response.json();
      setMessages(data.messages || []);
      setChatStatus(data.status || 'active');
      setLastMessageAt(data.lastMessageAt || null);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  }

  async function handleSendMessage(event) {
    event.preventDefault();
    const trimmed = messageInput.trim();
    if (!trimmed) return;

    setSending(true);
    try {
      const response = await authManager.apiRequest('/api/chat/send', {
        method: 'POST',
        body: JSON.stringify({ message: trimmed })
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.message || 'Failed to send message');
        return;
      }

      setMessageInput('');
      await loadMessages();
    } catch (error) {
      console.error('Error sending message:', error);
      alert(`Failed to send message. Please try again. Error: ${error.message}`);
    } finally {
      setSending(false);
    }
  }

  function logout() {
    authManager.logout();
  }

  function formatMessageTime(timestamp) {
    return new Date(timestamp).toLocaleString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      month: 'short',
      day: 'numeric'
    });
  }

  function formatStatusLabel(status) {
    if (status === 'resolved') return 'Resolved';
    if (status === 'pending') return 'Pending';
    return 'Active';
  }

  function getStatusClass(status) {
    if (status === 'resolved') return 'support-status-resolved';
    if (status === 'pending') return 'support-status-pending';
    return 'support-status-active';
  }

  return (
    <>
      <div className="top-bar">
        <div>
          <i className="fas fa-phone" /> <a href="tel:+1234567890">Contact Us</a>
        </div>
        <div>
          <span style={{ marginRight: '1rem', color: 'var(--brand-gold-strong)' }}>{customer?.fullName || customer?.email || 'Loading...'}</span>
          <span style={{ marginRight: '1rem' }}>Loyalty: {customer?.loyaltyPoints || 0} Points</span>
          <button type="button" className="logout-btn" onClick={logout} style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem' }}>
            Logout
          </button>
        </div>
      </div>

      <header className="header">
        <div className="nav">
          <a href="/">Home</a>
          <a href="/customer-shop">Shop</a>
          <a href="/customer-orders">My Orders</a>
          <a href="/customer-loyalty">Loyalty</a>
          <a href="/customer-support" className="active">Support</a>
        </div>

        <div className="logo">SARANYA JEWELLERY</div>

        <div className="header-icons">
          <i className="fas fa-search header-icon" />
          <i
            className="fas fa-user header-icon"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.location.href = '/customer-dashboard';
            }}
          />
          <a href="/customer-cart" style={{ position: 'relative' }}>
            <i className="fas fa-shopping-cart header-icon" />
            {cartCount > 0 ? (
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: 'var(--brand-gold-strong)',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 6px',
                  fontSize: '0.7rem'
                }}
              >
                {cartCount}
              </span>
            ) : null}
          </a>
        </div>
      </header>

      <main>
        <div className="dashboard-container support-shell">
          <section className="support-hero">
            <div>
              <p className="support-eyebrow">Need Assistance?</p>
              <h2>Customer Care Messaging</h2>
              <p>Connect directly with our customer care manager for order updates, product help, or any issue.</p>
            </div>
            <div className={`support-status-chip ${getStatusClass(chatStatus)}`}>
              <i className="fas fa-circle" />
              <span>{formatStatusLabel(chatStatus)}</span>
            </div>
          </section>

          <section className="support-layout">
            <aside className="support-info-card">
              <h3>Conversation Details</h3>
              <p>
                You are messaging with <strong>Customer Care Manager</strong>.
              </p>
              <ul>
                <li>Average response time: within business hours</li>
                <li>Share order number for faster support</li>
                <li>Be specific so we can resolve quickly</li>
              </ul>
              <div className="support-last-updated">
                Last update: {lastMessageAt ? formatMessageTime(lastMessageAt) : 'No messages yet'}
              </div>
            </aside>

            <div className="support-chat-panel">
              <div className="support-chat-header">
                <h3>Secure Chat</h3>
                <p>Customer and customer care manager can exchange messages here.</p>
              </div>

              <div className="support-chat-messages">
                {messages.length === 0 ? (
                  <div className="support-empty-chat">
                    <i className="fas fa-comments" />
                    <p>Start a conversation with customer care manager.</p>
                  </div>
                ) : (
                  messages.map((msg) => {
                    const isCustomer = msg.sender === 'customer';
                    return (
                      <div
                        key={msg._id || `${msg.timestamp}-${msg.message}`}
                        className={`support-message-row ${isCustomer ? 'support-message-customer' : 'support-message-manager'}`}
                      >
                        <div className="support-message-bubble">
                          <div className="support-message-sender">
                            {isCustomer ? 'You' : msg.senderName || 'Customer Care Manager'}
                          </div>
                          <div className="support-message-text">{msg.message}</div>
                          <div className="support-message-time">{formatMessageTime(msg.timestamp)}</div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="support-chat-input-wrap">
                <form className="support-chat-input-form" onSubmit={handleSendMessage}>
                  <input
                    type="text"
                    className="support-chat-input"
                    placeholder="Type your message to customer care manager..."
                    required
                    autoComplete="off"
                    value={messageInput}
                    onChange={(event) => setMessageInput(event.target.value)}
                  />
                  <button type="submit" className="support-chat-send-btn" disabled={sending}>
                    <i className={`fas ${sending ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`} /> {sending ? 'Sending...' : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Saranya Jewellery. All rights reserved.</p>
        </div>
      </footer>

      <zapier-interfaces-chatbot-embed
        is-popup="true"
        chatbot-id="cmnd1hjex005bm8ij9enun3qb"
      />
    </>
  );
}
