const page = {
  title: `Customer Support - Saranya Jewellery`,
  html: `<!-- Top Bar -->
    <div class="top-bar">
        <div><i class="fas fa-phone"></i> <a href="tel:+1234567890">Contact Us</a></div>
        <div>
            <span id="customerName" style="margin-right: 1rem; color: var(--brand-gold-strong);">Loading...</span>
            <span id="loyaltyPoints" style="margin-right: 1rem;">Loyalty: 0 Points</span>
            <button class="logout-btn" onclick="logout()" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;">Logout</button>
        </div>
    </div>

    <!-- Header -->
    <header class="header">
        <div class="nav">
            <a href="/">Home</a>
            <a href="/customer-shop">Shop</a>
            <a href="/customer-orders">My Orders</a>
            <a href="/customer-loyalty">Loyalty</a>
            <a href="/customer-support">Support</a>
        </div>
        
        <div class="logo">SARANYA JEWELLERY</div>
        
        <div class="header-icons">
            <i class="fas fa-search header-icon"></i>
            <i class="fas fa-user header-icon" onclick="viewProfile()" style="cursor: pointer;"></i>
            <a href="/customer-cart" style="position: relative;">
                <i class="fas fa-shopping-cart header-icon"></i>
                <span id="cartBadge" style="display: none; position: absolute; top: -8px; right: -8px; background: var(--brand-gold-strong); color: white; border-radius: 50%; padding: 2px 6px; font-size: 0.7rem;">0</span>
            </a>
        </div>
    </header>

    <main>
        <div class="dashboard-container">
            <div class="chat-container">
                <div class="chat-header">
                    <h2>Customer Support Chat</h2>
                    <p style="margin: 0.5rem 0 0; opacity: 0.9; font-size: 0.9rem;">Our customer care team is here to help you</p>
                </div>

                <div class="chat-messages" id="chatMessages">
                    <div class="empty-chat">
                        <i class="fas fa-comments"></i>
                        <p>Start a conversation with our customer care team</p>
                    </div>
                </div>

                <div class="chat-input-area">
                    <form class="chat-input-form" id="chatForm">
                        <input 
                            type="text" 
                            class="chat-input" 
                            id="messageInput" 
                            placeholder="Type your message..." 
                            required
                            autocomplete="off"
                        >
                        <button type="submit" class="chat-send-btn" id="sendBtn">
                            <i class="fas fa-paper-plane"></i> Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2026 Saranya Jewellery. All rights reserved.</p>
        </div>
    </footer>`,
  scripts: [
    {
      type: `module`,
      content: `
        import authManager from '/src/auth.js';

        let messages = [];
        let autoRefreshInterval;

        function setActiveNavLink() {
            const currentPath = window.location.pathname;
            document.querySelectorAll('.nav a').forEach((link) => {
                const href = link.getAttribute('href');
                if (!href || href.startsWith('#')) return;
                if (href === currentPath) {
                    link.classList.add('active');
                }
            });
        }

        // Check authentication
        async function checkAuth() {
            const customer = await authManager.checkCustomerAuth();
            if (!customer) return false;

            // Update UI with customer data
            document.getElementById('customerName').textContent = customer.fullName || customer.email;
            
            // Load loyalty points if available
            const points = customer.loyaltyPoints || 0;
            document.getElementById('loyaltyPoints').textContent = \`Loyalty: \${points} Points\`;
            
            return true;
        }

        function logout() {
            authManager.logout();
        }

        function viewProfile() {
            window.location.href = '/customer-dashboard?openProfile=true';
        }

        // Load chat messages
        async function loadMessages() {
            try {
                const res = await authManager.apiRequest('/api/chat/my-messages');
                if (res.ok) {
                    const data = await res.json();
                    messages = data.messages || [];
                    displayMessages();
                }
            } catch (e) {
                console.error('Error loading messages:', e);
            }
        }

        // Display messages
        function displayMessages() {
            const container = document.getElementById('chatMessages');
            
            if (messages.length === 0) {
                container.innerHTML = \`
                    <div class="empty-chat">
                        <i class="fas fa-comments"></i>
                        <p>Start a conversation with our customer care team</p>
                    </div>
                \`;
                return;
            }

            container.innerHTML = messages.map(msg => {
                const time = new Date(msg.timestamp).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                    month: 'short',
                    day: 'numeric'
                });

                return \`
                    <div class="message \${msg.sender}">
                        <div class="message-bubble">
                            <div class="message-sender">\${msg.senderName}</div>
                            <div class="message-text">\${escapeHtml(msg.message)}</div>
                            <div class="message-time">\${time}</div>
                        </div>
                    </div>
                \`;
            }).join('');

            // Scroll to bottom
            container.scrollTop = container.scrollHeight;
        }

        // Send message
        document.getElementById('chatForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const input = document.getElementById('messageInput');
            const message = input.value.trim();
            
            if (!message) return;

            const sendBtn = document.getElementById('sendBtn');
            sendBtn.disabled = true;
            sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            try {
                console.log('Sending message:', message);
                const res = await authManager.apiRequest('/api/chat/send', {
                    method: 'POST',
                    body: JSON.stringify({ message })
                });

                console.log('Response status:', res.status);
                
                if (res.ok) {
                    input.value = '';
                    await loadMessages();
                } else {
                    const error = await res.json();
                    console.error('Server error:', error);
                    alert(error.message || 'Failed to send message');
                }
            } catch (e) {
                console.error('Error sending message:', e);
                alert('Failed to send message. Please try again. Error: ' + e.message);
            } finally {
                sendBtn.disabled = false;
                sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send';
            }
        });

        // Utility to escape HTML
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // Auto-refresh messages every 5 seconds
        function startAutoRefresh() {
            autoRefreshInterval = setInterval(loadMessages, 5000);
        }

        function stopAutoRefresh() {
            if (autoRefreshInterval) {
                clearInterval(autoRefreshInterval);
            }
        }

        // Initialize
        async function init() {
            setActiveNavLink();
            const authenticated = await checkAuth();
            if (authenticated) {
                await loadMessages();
                startAutoRefresh();
            }
        }

        // Cleanup on page unload
        window.addEventListener('beforeunload', stopAutoRefresh);

        init();
    `
    },
  ]
};

export default page;
