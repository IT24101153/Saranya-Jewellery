const page = {
  title: `Loyalty Rewards - Saranya Jewellery`,
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
            <h1 style="text-align: center; margin-bottom: 2rem; font-family: 'Cormorant Garamond', serif; color: var(--brand-burgundy);">Loyalty Rewards Program</h1>

            <!-- Current Balance -->
            <div class="section loyalty-card" style="text-align: center; padding: 3rem 2rem;">
                <div style="font-size: 5rem; margin-bottom: 1rem;"><i class="fas fa-gem"></i></div>
                <h2 style="color: var(--brand-gold); font-size: 3rem; margin: 1rem 0;">
                    <span id="loyaltyBalance">0</span> <span style="font-size: 1.5rem;">Points</span>
                </h2>
                <p style="font-size: 1.1rem; color: var(--text-medium); margin-top: 1rem;">
                    Your current loyalty points balance
                </p>
                <div style="margin-top: 1.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; padding: 1rem; text-align: left; max-width: 520px; margin-left: auto; margin-right: auto;">
                    <p style="margin: 0.35rem 0;"><strong>Current Tier:</strong> <span id="currentTierValue">-</span></p>
                    <p style="margin: 0.35rem 0;"><strong>Total Spent:</strong> Rs. <span id="totalSpentValue">0</span></p>
                    <p style="margin: 0.35rem 0;"><strong>Points Multiplier:</strong> <span id="pointMultiplierValue">1x</span></p>
                    <p style="margin: 0.35rem 0;"><strong>Next Tier Target:</strong> <span id="nextTierTarget">-</span></p>
                    <p style="margin: 0.35rem 0;"><strong>Amount to Next Tier:</strong> Rs. <span id="amountToNextTier">0</span></p>
                </div>
            </div>

            <!-- How It Works -->
            <div class="section">
                <div class="section-header">
                    <h2>How It Works</h2>
                </div>
                <div class="section-content">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 1.5rem;">
                        <div style="text-align: center; padding: 2rem; background: var(--bg-light); border-radius: 12px;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-wallet"></i></div>
                            <h3 style="color: var(--brand-burgundy); margin-bottom: 1rem;">Earn Points</h3>
                            <p style="color: var(--text-medium);">Earn 1 point for every Rs. 100 you spend on purchases</p>
                        </div>
                        <div style="text-align: center; padding: 2rem; background: var(--bg-light); border-radius: 12px;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-gift"></i></div>
                            <h3 style="color: var(--brand-burgundy); margin-bottom: 1rem;">Redeem Rewards</h3>
                            <p style="color: var(--text-medium);">100 points = Rs. 100 discount on your next purchase</p>
                        </div>
                        <div style="text-align: center; padding: 2rem; background: var(--bg-light); border-radius: 12px;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-clock"></i></div>
                            <h3 style="color: var(--brand-burgundy); margin-bottom: 1rem;">Never Expire</h3>
                            <p style="color: var(--text-medium);">Your points never expire and keep accumulating</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Rewards Tiers -->
            <div class="section">
                <div class="section-header">
                    <h2>Rewards Tiers</h2>
                </div>
                <div class="section-content">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
                        <div style="background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%); color: #333; padding: 2rem; border-radius: 12px; text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-award"></i></div>
                            <h3 style="color: #333; margin-bottom: 1rem;">Silver</h3>
                            <p style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Rs. 0 - Rs. 50,000</p>
                            <p style="font-size: 0.9rem; opacity: 0.8;">1x points multiplier + priority support</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #e0bf63 0%, #d4a747 100%); color: #3e2723; padding: 2rem; border-radius: 12px; text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-medal"></i></div>
                            <h3 style="color: #3e2723; margin-bottom: 1rem;">Gold</h3>
                            <p style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Rs. 50,001 - Rs. 200,000</p>
                            <p style="font-size: 0.9rem; opacity: 0.9;">1.5x points multiplier + exclusive previews</p>
                        </div>
                        <div style="background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%); color: white; padding: 2rem; border-radius: 12px; text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-crown"></i></div>
                            <h3 style="color: white; margin-bottom: 1rem;">Platinum</h3>
                            <p style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">Rs. 200,001+</p>
                            <p style="font-size: 0.9rem; opacity: 0.9;">2x points multiplier + VIP benefits</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Points History -->
            <div class="section">
                <div class="section-header">
                    <h2>Points History</h2>
                </div>
                <div id="pointsHistory" class="section-content">
                    <div class="empty-state">
                        <i class="fas fa-history" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"></i>
                        <p style="margin: 0;">Your points history will appear here</p>
                    </div>
                </div>
            </div>

            <!-- FAQs -->
            <div class="section">
                <div class="section-header">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div class="section-content">
                    <div style="margin-top: 1rem;">
                        <div style="padding: 1.5rem; background: var(--bg-light); border-radius: 8px; margin-bottom: 1rem;">
                            <h4 style="color: var(--brand-burgundy); margin-bottom: 0.5rem;">How do I redeem my points?</h4>
                            <p style="margin: 0; color: var(--text-medium);">During checkout, you can choose to redeem your points for a discount. 100 points = Rs. 100 discount.</p>
                        </div>
                        <div style="padding: 1.5rem; background: var(--bg-light); border-radius: 8px; margin-bottom: 1rem;">
                            <h4 style="color: var(--brand-burgundy); margin-bottom: 0.5rem;">Do my points expire?</h4>
                            <p style="margin: 0; color: var(--text-medium);">No! Your loyalty points never expire and will keep accumulating with every purchase.</p>
                        </div>
                        <div style="padding: 1.5rem; background: var(--bg-light); border-radius: 8px; margin-bottom: 1rem;">
                            <h4 style="color: var(--brand-burgundy); margin-bottom: 0.5rem;">Can I combine points with other offers?</h4>
                            <p style="margin: 0; color: var(--text-medium);">Yes! You can use your loyalty points with most promotional offers and discounts.</p>
                        </div>
                        <div style="padding: 1.5rem; background: var(--bg-light); border-radius: 8px;">
                            <h4 style="color: var(--brand-burgundy); margin-bottom: 0.5rem;">What happens if I cancel an order?</h4>
                            <p style="margin: 0; color: var(--text-medium);">If you cancel an order, any points earned from that purchase will be deducted from your balance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>ABOUT SARANYA</h3>
                <ul>
                    <li><a href="/#story">Our Story</a></li>
                    <li><a href="/#education">Education</a></li>
                    <li><a href="/#faq">FAQ</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>WHY SARANYA?</h3>
                <ul>
                    <li><a href="/#quality">Quality Guarantee</a></li>
                    <li><a href="/#warranty">Lifetime Warranty</a></li>
                    <li><a href="/#certification">Certified Jewellery</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>CONNECT WITH US</h3>
                <div class="social-links">
                    <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-pinterest"></i></a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2026 Saranya Jewellery. All Rights Reserved.</p>
        </div>
    </footer>`,
  scripts: [
    {
      type: `module`,
      content: `
        import authManager from '/src/auth.js';

        let cart = JSON.parse(localStorage.getItem('saranyaCart') || '[]');

        const tierConfig = {
            Silver: { minSpent: 0, maxSpent: 50000, multiplier: 1, nextTier: 'Gold' },
            Gold: { minSpent: 50001, maxSpent: 200000, multiplier: 1.5, nextTier: 'Platinum' },
            Platinum: { minSpent: 200001, maxSpent: null, multiplier: 2, nextTier: null }
        };

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

        async function checkAuth() {
            const customer = await authManager.checkCustomerAuth();
            if (!customer) return;

            document.getElementById('customerName').textContent = customer.fullName || customer.email;
            const points = customer.loyaltyPoints || 0;
            const totalSpent = customer.totalSpent || 0;
            const currentTier = customer.loyaltyTier || 'Silver';
            const cfg = tierConfig[currentTier] || tierConfig.Silver;

            document.getElementById('loyaltyPoints').textContent = \`Loyalty: \${points} Points\`;
            document.getElementById('loyaltyBalance').textContent = points;

            document.getElementById('currentTierValue').textContent = customer.isLoyalty ? currentTier : 'Not Enrolled';
            document.getElementById('totalSpentValue').textContent = totalSpent.toLocaleString();
            document.getElementById('pointMultiplierValue').textContent = \`\${cfg.multiplier}x\`;

            if (!cfg.nextTier) {
                document.getElementById('nextTierTarget').textContent = 'Top Tier Reached';
                document.getElementById('amountToNextTier').textContent = '0';
            } else {
                const nextTierCfg = tierConfig[cfg.nextTier];
                const remaining = Math.max(0, (nextTierCfg.minSpent || 0) - totalSpent);
                document.getElementById('nextTierTarget').textContent = \`\${cfg.nextTier} (Rs. \${nextTierCfg.minSpent.toLocaleString()})\`;
                document.getElementById('amountToNextTier').textContent = remaining.toLocaleString();
            }
            
            updateCartBadge();
        }

        function updateCartBadge() {
            const badge = document.getElementById('cartBadge');
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            if (count > 0) {
                badge.textContent = count;
                badge.style.display = 'block';
            } else {
                badge.style.display = 'none';
            }
        }

        function logout() {
            authManager.logout();
        }

        function viewProfile() {
            window.location.href = '/customer-dashboard?openProfile=true';
        }

        setActiveNavLink();
        checkAuth();

        window.logout = logout;
        window.viewProfile = viewProfile;
    `
    },
  ]
};

export default page;
