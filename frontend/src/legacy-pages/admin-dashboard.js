const page = {
  title: `Admin Dashboard - Saranya Jewellery`,
  html: `<!-- Dashboard Container -->
    <div style="max-width: 1400px; margin: 0 auto; padding: 2rem;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #6f0022; color: white; padding: 1.5rem 2rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div>
                <h1 style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #ffffff;">Admin Dashboard</h1>
                <p style="margin: 0.5rem 0 0; opacity: 0.9; color: #ffffff;">Welcome, <span id="adminName" style="color: #ffffff;">Admin</span></p>
            </div>
            <button onclick="logout()" style="background: white; color: #6f0022; border: none; padding: 0.75rem 1.5rem; border-radius: 4px; cursor: pointer; font-weight: 600; transition: all 0.3s;">
                Logout
            </button>
        </div>

        <!-- Stats Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #6f0022; margin: 0 0 0.5rem; font-family: 'Cormorant Garamond', serif;" id="totalStaff">0</h3>
                <p style="margin: 0; color: #666; font-weight: 500;">Total Staff</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #ffc107; margin: 0 0 0.5rem; font-family: 'Cormorant Garamond', serif;" id="pendingStaff">0</h3>
                <p style="margin: 0; color: #666; font-weight: 500;">Pending Approval</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #28a745; margin: 0 0 0.5rem; font-family: 'Cormorant Garamond', serif;" id="approvedStaff">0</h3>
                <p style="margin: 0; color: #666; font-weight: 500;">Approved</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #dc3545; margin: 0 0 0.5rem; font-family: 'Cormorant Garamond', serif;" id="revokedStaff">0</h3>
                <p style="margin: 0; color: #666; font-weight: 500;">Revoked</p>
            </div>
        </div>

        <!-- Staff Management Table -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Staff Management</h2>
                <button onclick="openAddModal()" style="background: #6f0022; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
                    + Add Staff
                </button>
            </div>

            <!-- Alert Message -->
            <div id="alertMessage" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; display: none;"></div>

            <!-- Filter Buttons -->
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                <button class="filter-btn active" onclick="filterStaff('all')">All</button>
                <button class="filter-btn" onclick="filterStaff('Pending')">Pending</button>
                <button class="filter-btn" onclick="filterStaff('Approved')">Approved</button>
                <button class="filter-btn" onclick="filterStaff('Revoked')">Revoked</button>
            </div>

            <!-- Staff Table -->
            <div style="overflow-x: auto;">
                <table class="management-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Name</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Email</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Role</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Status</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Active</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="staffTableBody">
                        <tr>
                            <td colspan="6" style="padding: 2rem; text-align: center; color: #999;">Loading staff...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Order Analytics -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Order Analytics (Monthly)</h2>
                <button onclick="loadOrderAnalytics()" style="background: #6f0022; color: white; padding: 0.7rem 1.2rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Refresh</button>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: #f9f9f9; border-left: 4px solid #6f0022; padding: 1rem; border-radius: 4px;">
                    <p style="margin: 0; color: #666; font-size: 0.9rem;">Total Orders</p>
                    <h3 id="totalOrdersCount" style="margin: 0.4rem 0 0; color: #6f0022; font-size: 1.8rem;">0</h3>
                </div>
                <div style="background: #f9f9f9; border-left: 4px solid #28a745; padding: 1rem; border-radius: 4px;">
                    <p style="margin: 0; color: #666; font-size: 0.9rem;">Total Revenue</p>
                    <h3 id="totalRevenueAmount" style="margin: 0.4rem 0 0; color: #28a745; font-size: 1.8rem;">Rs. 0</h3>
                </div>
                <div style="background: #f9f9f9; border-left: 4px solid #17a2b8; padding: 1rem; border-radius: 4px;">
                    <p style="margin: 0; color: #666; font-size: 0.9rem;">Average Order Value</p>
                    <h3 id="avgOrderValue" style="margin: 0.4rem 0 0; color: #17a2b8; font-size: 1.8rem;">Rs. 0</h3>
                </div>
                <div style="background: #f9f9f9; border-left: 4px solid #ffc107; padding: 1rem; border-radius: 4px;">
                    <p style="margin: 0; color: #666; font-size: 0.9rem;">This Month Revenue</p>
                    <h3 id="thisMonthRevenue" style="margin: 0.4rem 0 0; color: #b07d00; font-size: 1.8rem;">Rs. 0</h3>
                </div>
            </div>

            <div style="overflow-x: auto;">
                <table class="management-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Month</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Orders</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Revenue</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Avg Order Value</th>
                        </tr>
                    </thead>
                    <tbody id="monthlyAnalyticsTableBody">
                        <tr>
                            <td colspan="4" style="padding: 1.5rem; text-align: center; color: #999;">Loading monthly analytics...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Customer Management -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Customer Management</h2>
                <button onclick="loadCustomers()" style="background: #6f0022; color: white; padding: 0.7rem 1.2rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Refresh</button>
            </div>

            <div style="overflow-x: auto;">
                <table class="management-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Name</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Email</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Phone</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Loyalty</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="customersTableBody">
                        <tr>
                            <td colspan="5" style="padding: 1.5rem; text-align: center; color: #999;">Loading customers...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Add/Edit Staff Modal -->
    <div id="staffModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 id="modalTitle" style="margin: 0; font-family: 'Cormorant Garamond', serif;">Add Staff</h3>
                <button onclick="closeModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #999;">&times;</button>
            </div>

            <form id="staffForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Full Name *</label>
                    <input type="text" id="fullName" required style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>

                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email *</label>
                    <input type="email" id="email" required style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>

                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Role *</label>
                    <select id="role" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Product Management">Product Management</option>
                        <option value="Order Management">Order Management</option>
                        <option value="Inventory">Inventory</option>
                        <option value="Customer Care">Customer Care</option>
                        <option value="Loyalty Management">Loyalty Management</option>
                    </select>
                </div>

                <div style="margin-bottom: 1rem;" id="passwordGroup">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Password *</label>
                    <input type="password" id="password" minlength="6" style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>

                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Status *</label>
                    <select id="status" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Revoked">Revoked</option>
                    </select>
                </div>

                <button type="submit" style="width: 100%; background: #6f0022; color: white; padding: 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; font-size: 1rem;">
                    Save Staff
                </button>
            </form>
        </div>
    </div>

    <style>
        .management-table thead th {
            color: #333;
        }

        .filter-btn {
            padding: 0.6rem 1.2rem;
            border: 1px solid #6f0022;
            background: white;
            color: #6f0022;
            cursor: pointer;
            border-radius: 4px;
            font-weight: 500;
            transition: all 0.3s;
        }
        .filter-btn:hover {
            background: #f5f5f5;
        }
        .filter-btn.active {
            background: #6f0022;
            color: white;
        }
        button:hover {
            opacity: 0.9;
        }
    </style>`,
  scripts: [
    {
      type: `module`,
      content: `
        import authManager from '/src/auth.js';

        let staffList = [];
        let customersList = [];
        let monthlyAnalytics = [];
        let currentFilter = 'all';
        let editingStaffId = null;

        // Check authentication and role
        async function checkAuth() {
            const user = await authManager.checkStaffAuth('Admin');
            if (!user || user.needsApproval) return false;
            document.getElementById('adminName').textContent = user.fullName || user.email;
            return true;
        }

        // Load all staff
        async function loadStaff() {
            try {
                const response = await fetch('/api/staff', {
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to load staff');
                staffList = await response.json();
                updateStats();
                displayStaff();
            } catch (error) {
                console.error('Error loading staff:', error);
                showAlert('Error loading staff members', 'error');
            }
        }

        // Load monthly order analytics
        async function loadOrderAnalytics() {
            try {
                const response = await fetch('/api/orders/admin/analytics/monthly?months=6', {
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to load monthly analytics');

                const data = await response.json();
                monthlyAnalytics = data.monthlyData || [];

                document.getElementById('totalOrdersCount').textContent = data.summary?.totalOrders || 0;
                document.getElementById('totalRevenueAmount').textContent = \`Rs. \${(data.summary?.totalRevenue || 0).toLocaleString()}\`;
                document.getElementById('avgOrderValue').textContent = \`Rs. \${(data.summary?.avgOrderValue || 0).toLocaleString()}\`;
                document.getElementById('thisMonthRevenue').textContent = \`Rs. \${(data.summary?.thisMonthRevenue || 0).toLocaleString()}\`;

                displayMonthlyAnalytics();
            } catch (error) {
                console.error('Error loading monthly analytics:', error);
                showAlert('Error loading monthly order analytics', 'error');
            }
        }

        function displayMonthlyAnalytics() {
            const tbody = document.getElementById('monthlyAnalyticsTableBody');

            if (!monthlyAnalytics.length) {
                tbody.innerHTML = '<tr><td colspan="4" style="padding: 1.5rem; text-align: center; color: #999;">No analytics data available</td></tr>';
                return;
            }

            tbody.innerHTML = monthlyAnalytics.map(item => \`
                <tr>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee;">\${item.label}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee;">\${item.ordersCount}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee; color: #28a745; font-weight: 600;">Rs. \${(item.revenue || 0).toLocaleString()}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee;">Rs. \${(item.avgOrderValue || 0).toLocaleString()}</td>
                </tr>
            \`).join('');
        }

        // Load customers for admin management
        async function loadCustomers() {
            try {
                const response = await fetch('/api/customer/admin/list', {
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to load customers');

                customersList = await response.json();
                displayCustomers();
            } catch (error) {
                console.error('Error loading customers:', error);
                showAlert('Error loading customers', 'error');
            }
        }

        function displayCustomers() {
            const tbody = document.getElementById('customersTableBody');

            if (!customersList.length) {
                tbody.innerHTML = '<tr><td colspan="5" style="padding: 1.5rem; text-align: center; color: #999;">No customers found</td></tr>';
                return;
            }

            tbody.innerHTML = customersList.map(customer => \`
                <tr style="background: #ffffff; color: #333;">
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee; color: #333;">\${customer.fullName || 'N/A'}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee; color: #333;">\${customer.email || 'N/A'}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee; color: #333;">\${customer.phone || '-'}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee;">
                        \${customer.isLoyalty ? \`<span style="background: #d4edda; color: #155724; padding: 0.3rem 0.7rem; border-radius: 12px; font-size: 0.8rem;">\${customer.loyaltyTier || 'Loyalty'}</span>\` : '<span style="color: #777;">Regular</span>'}
                    </td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee;">
                        <button onclick="deleteCustomer('\${customer._id}', '\${(customer.fullName || '').replace(/'/g, "\\\\'")}')" style="padding: 0.4rem 0.8rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Delete Customer">Delete</button>
                    </td>
                </tr>
            \`).join('');
        }

        async function deleteCustomer(customerId, customerName) {
            if (!confirm(\`Are you sure you want to delete customer \${customerName}?\`)) return;

            try {
                const response = await fetch(\`/api/customer/admin/\${customerId}\`, {
                    method: 'DELETE',
                    credentials: 'same-origin'
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.message || 'Failed to delete customer');

                showAlert('Customer deleted successfully', 'success');
                loadCustomers();
            } catch (error) {
                showAlert(error.message, 'error');
            }
        }

        // Update stats cards
        function updateStats() {
            document.getElementById('totalStaff').textContent = staffList.length;
            document.getElementById('pendingStaff').textContent = staffList.filter(s => s.status === 'Pending').length;
            document.getElementById('approvedStaff').textContent = staffList.filter(s => s.status === 'Approved').length;
            document.getElementById('revokedStaff').textContent = staffList.filter(s => s.status === 'Revoked').length;
        }

        // Display staff in table
        function displayStaff() {
            const tbody = document.getElementById('staffTableBody');
            let filteredStaff = currentFilter === 'all' ? staffList : staffList.filter(s => s.status === currentFilter);

            if (filteredStaff.length === 0) {
                tbody.innerHTML = '<tr><td colspan="6" style="padding: 2rem; text-align: center; color: #999;">No staff members found</td></tr>';
                return;
            }

            tbody.innerHTML = filteredStaff.map(staff => {
                const safeStaffName = (staff.fullName || '').replace(/'/g, "\\\\'");

                return \`
                    <tr style="background: #ffffff; color: #333;">
                        <td style="padding: 1rem; border-bottom: 1px solid #eee; color: #333;">\${staff.fullName || '-'}</td>
                        <td style="padding: 1rem; border-bottom: 1px solid #eee; color: #333;">\${staff.email || '-'}</td>
                        <td style="padding: 1rem; border-bottom: 1px solid #eee; color: #333;">\${staff.role || '-'}</td>
                        <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                            <span style="padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; font-weight: 500; background: \${
                                staff.status === 'Approved' ? '#d4edda' :
                                staff.status === 'Pending' ? '#fff3cd' : '#f8d7da'
                            }; color: \${
                                staff.status === 'Approved' ? '#155724' :
                                staff.status === 'Pending' ? '#856404' : '#721c24'
                            };">
                                \${staff.status}
                            </span>
                        </td>
                        <td style="padding: 1rem; border-bottom: 1px solid #eee; color: #333;">
                            \${staff.isActive ? 'Yes' : 'No'}
                        </td>
                        <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                \${staff.status === 'Pending' ? \`
                                    <button onclick="approveStaff('\${staff._id}')" style="padding: 0.4rem 0.8rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Approve">Approve</button>
                                    <button onclick="rejectStaff('\${staff._id}')" style="padding: 0.4rem 0.8rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Reject">Reject</button>
                                \` : ''}
                                \${staff.status === 'Approved' ? \`
                                    <button onclick="toggleActive('\${staff._id}', \${staff.isActive})" style="padding: 0.4rem 0.8rem; background: #ffc107; color: #212529; border: none; border-radius: 4px; cursor: pointer;" title="\${staff.isActive ? 'Deactivate' : 'Activate'}">
                                        \${staff.isActive ? 'Deactivate' : 'Activate'}
                                    </button>
                                \` : ''}
                                <button onclick="editStaff('\${staff._id}')" style="padding: 0.4rem 0.8rem; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Edit">Edit</button>
                                \${staff.role !== 'Admin' ? \`
                                    <button onclick="deleteStaff('\${staff._id}', '\${safeStaffName}')" style="padding: 0.4rem 0.8rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Delete">Delete</button>
                                \` : ''}
                            </div>
                        </td>
                    </tr>
                \`;
            }).join('');
        }

        // Filter staff
        function filterStaff(status) {
            currentFilter = status;
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            displayStaff();
        }

        // Approve staff
        async function approveStaff(id) {
            try {
                const response = await fetch(\`/api/staff/\${id}/approve\`, { 
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to approve');
                showAlert('Staff approved successfully', 'success');
                loadStaff();
            } catch (error) {
                showAlert('Error approving staff', 'error');
            }
        }

        // Reject staff
        async function rejectStaff(id) {
            if (!confirm('Are you sure you want to reject this staff request?')) return;
            try {
                const response = await fetch(\`/api/staff/\${id}/reject\`, { 
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to reject');
                showAlert('Staff rejected', 'success');
                loadStaff();
            } catch (error) {
                showAlert('Error rejecting staff', 'error');
            }
        }

        // Toggle active status
        async function toggleActive(id, currentStatus) {
            try {
                const response = await fetch(\`/api/staff/\${id}/toggle-active\`, { 
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to toggle');
                showAlert(\`Staff \${currentStatus ? 'deactivated' : 'activated'} successfully\`, 'success');
                loadStaff();
            } catch (error) {
                showAlert('Error toggling status', 'error');
            }
        }

        // Delete staff
        async function deleteStaff(id, name) {
            if (!confirm(\`Are you sure you want to delete \${name}?\`)) return;
            try {
                const response = await fetch(\`/api/staff/\${id}\`, { 
                    method: 'DELETE',
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to delete');
                showAlert('Staff deleted successfully', 'success');
                loadStaff();
            } catch (error) {
                showAlert('Error deleting staff', 'error');
            }
        }

        // Open add modal
        function openAddModal() {
            editingStaffId = null;
            document.getElementById('modalTitle').textContent = 'Add Staff';
            document.getElementById('staffForm').reset();
            document.getElementById('passwordGroup').style.display = 'block';
            document.getElementById('password').required = true;
            document.getElementById('staffModal').style.display = 'flex';
        }

        // Edit staff
        function editStaff(id) {
            const staff = staffList.find(s => s._id === id);
            if (!staff) return;

            editingStaffId = id;
            document.getElementById('modalTitle').textContent = 'Edit Staff';
            document.getElementById('fullName').value = staff.fullName;
            document.getElementById('email').value = staff.email;
            document.getElementById('role').value = staff.role;
            document.getElementById('status').value = staff.status;
            document.getElementById('passwordGroup').style.display = 'none';
            document.getElementById('password').required = false;
            document.getElementById('staffModal').style.display = 'flex';
        }

        // Close modal
        function closeModal() {
            document.getElementById('staffModal').style.display = 'none';
            document.getElementById('staffForm').reset();
            editingStaffId = null;
        }

        // Handle form submission
        document.getElementById('staffForm').addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                role: document.getElementById('role').value,
                status: document.getElementById('status').value
            };

            if (!editingStaffId) {
                formData.password = document.getElementById('password').value;
            }

            try {
                let response;
                if (editingStaffId) {
                    response = await fetch(\`/api/staff/\${editingStaffId}\`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'same-origin',
                        body: JSON.stringify(formData)
                    });
                } else {
                    response = await fetch('/api/staff', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'same-origin',
                        body: JSON.stringify(formData)
                    });
                }

                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || 'Failed to save staff');
                }

                showAlert(editingStaffId ? 'Staff updated successfully' : 'Staff created successfully', 'success');
                closeModal();
                loadStaff();
            } catch (error) {
                showAlert(error.message, 'error');
            }
        });

        // Show alert
        function showAlert(message, type) {
            const alert = document.getElementById('alertMessage');
            alert.textContent = message;
            alert.style.display = 'block';
            alert.style.background = type === 'success' ? '#d4edda' : '#f8d7da';
            alert.style.color = type === 'success' ? '#155724' : '#721c24';
            alert.style.border = \`1px solid \${type === 'success' ? '#c3e6cb' : '#f5c6cb'}\`;
            setTimeout(() => alert.style.display = 'none', 5000);
        }

        // Logout
        function logout() {
            authManager.logout();
        }

        // Make functions available globally for onclick handlers
        window.logout = logout;
        window.openAddModal = openAddModal;
        window.closeModal = closeModal;
        window.filterStaff = filterStaff;
        window.approveStaff = approveStaff;
        window.rejectStaff = rejectStaff;
        window.toggleActive = toggleActive;
        window.editStaff = editStaff;
        window.deleteStaff = deleteStaff;
        window.loadOrderAnalytics = loadOrderAnalytics;
        window.loadCustomers = loadCustomers;
        window.deleteCustomer = deleteCustomer;

        // Initialize
        (async function() {
            const isAuth = await checkAuth();
            if (isAuth) {
                loadStaff();
                loadOrderAnalytics();
                loadCustomers();
            }
        })();
    `
    },
  ]
};

export default page;
