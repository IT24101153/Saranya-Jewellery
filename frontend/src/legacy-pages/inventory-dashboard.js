const page = {
  title: `Inventory Management – Saranya Jewellers`,
  html: `<!-- MAIN -->
<main class="main">
  <div class="topbar">
    <div class="page-title">✦ Inventory Management</div>
    <div class="topbar-right">
      <div class="gold-rate-badge">
        <span class="label">Gold Rate (22K):</span>
        <span class="value" id="topbarRate">LKR 6,820 /g</span>
      </div>
      <button class="btn btn-gold" onclick="openModal('addStockModal')">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Add Stock
      </button>
      <button class="btn btn-outline" onclick="logout()" style="color:#fff;border-color:rgba(255,255,255,0.45);background:transparent;">
        Logout
      </button>
    </div>
  </div>

  <div class="content">

    <div class="tab-bar">
      <button class="tab active" onclick="switchTab('stock',this)">Stock</button>
      <button class="tab" onclick="switchTab('goldrate',this)">Gold Rates</button>
      <button class="tab" onclick="switchTab('suppliers',this)">Suppliers</button>
      <button class="tab" onclick="switchTab('alerts',this)">
        Alerts &nbsp;<span id="alertCount" style="background:var(--maroon);color:var(--gold-light);font-size:10px;padding:1px 7px;border-radius:10px;vertical-align:middle;">3</span>
      </button>
    </div>

    <!-- STOCK TAB -->
    <div id="tab-stock" class="tab-content active">
      <div class="stats-grid">
        <div class="stat-card c-gold">
          <div class="stat-icon" style="background:rgba(201,168,76,0.1);">💍</div>
          <div class="stat-label">Total Items</div>
          <div class="stat-value">247</div>
          <div class="stat-sub up">↑ 12 added this week</div>
        </div>
        <div class="stat-card c-green">
          <div class="stat-icon" style="background:rgba(46,125,82,0.1);">✅</div>
          <div class="stat-label">In Stock</div>
          <div class="stat-value">198</div>
          <div class="stat-sub">80% of inventory</div>
        </div>
        <div class="stat-card c-warn">
          <div class="stat-icon" style="background:rgba(146,96,10,0.1);">⚠️</div>
          <div class="stat-label">Low Stock</div>
          <div class="stat-value">32</div>
          <div class="stat-sub warn">Needs reorder</div>
        </div>
        <div class="stat-card c-red">
          <div class="stat-icon" style="background:rgba(122,21,48,0.08);">🚫</div>
          <div class="stat-label">Out of Stock</div>
          <div class="stat-value">17</div>
          <div class="stat-sub down">Action required</div>
        </div>
      </div>

      <div class="table-card">
        <div class="table-header">
          <div class="table-title">Stock Inventory</div>
          <div class="table-actions">
            <div class="search-box">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Search items..." id="stockSearch" oninput="filterTable()"/>
            </div>
            <select class="btn btn-ghost" id="categoryFilter" onchange="filterTable()" style="padding:8px 12px;">
              <option value="">All Categories</option>
              <option>Ring</option><option>Necklace</option><option>Bangle</option>
              <option>Earring</option><option>Pendant</option><option>Chain</option>
            </select>
            <button class="btn btn-outline" onclick="exportCSV()">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export CSV
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Serial No.</th><th>Item Name</th><th>Category</th><th>Karat</th>
              <th>Weight (g)</th><th>Qty</th><th>Status</th><th>Supplier</th><th>Actions</th>
            </tr>
          </thead>
          <tbody id="stockBody"></tbody>
        </table>
      </div>
    </div>

    <!-- GOLD RATE TAB -->
    <div id="tab-goldrate" class="tab-content">
      <div class="two-col">
        <div>
          <div class="gold-rate-card">
            <div class="card-title">Current Gold Rate — Today</div>
            <div class="rate-display">
              <span class="currency">LKR</span>
              <span class="amount" id="currentRateDisplay">6,820</span>
              <span class="per">per gram (22K)</span>
            </div>
            <div class="rate-sub-row">
              <span>18K: <strong id="rate18k">LKR 5,578</strong></span>
              <span>24K: <strong id="rate24k">LKR 7,440</strong></span>
            </div>
            <div style="display:flex;gap:12px;">
              <div style="flex:1;"><label>Update Today's Rate (22K, LKR/g)</label><input type="number" id="newGoldRate" placeholder="e.g. 6820"/></div>
              <div style="display:flex;align-items:flex-end;"><button class="btn btn-gold" onclick="updateGoldRate()">Update Rate</button></div>
            </div>
          </div>
          <div class="table-card">
            <div class="table-header"><div class="table-title">Rate History</div></div>
            <table>
              <thead><tr><th>Date</th><th>22K (LKR/g)</th><th>18K (LKR/g)</th><th>24K (LKR/g)</th><th>Change</th></tr></thead>
              <tbody id="rateHistoryBody"></tbody>
            </table>
          </div>
        </div>
        <div>
          <div class="gold-rate-card">
            <div class="card-title">Price Calculator</div>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div><label>Weight (grams)</label><input type="number" id="calcWeight" placeholder="Enter weight" oninput="calculate()"/></div>
              <div><label>Karat</label><select id="calcKarat" onchange="calculate()"><option value="22">22K</option><option value="18">18K</option><option value="24">24K</option></select></div>
              <div><label>Making Charges (%)</label><input type="number" id="calcMaking" value="12" oninput="calculate()"/></div>
              <div style="background:linear-gradient(135deg,var(--maroon-dark),var(--maroon));border-radius:10px;padding:20px;">
                <div style="font-size:11px;color:rgba(255,255,255,0.55);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px;">Estimated Price</div>
                <div id="calcResult" style="font-family:'Cormorant Garamond',serif;font-size:36px;font-weight:700;color:var(--gold-light);">LKR 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SUPPLIERS TAB -->
    <div id="tab-suppliers" class="tab-content">
      <div style="display:flex;justify-content:flex-end;margin-bottom:18px;">
        <button class="btn btn-gold" onclick="openModal('addSupplierModal')">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Supplier
        </button>
      </div>
      <div class="table-card">
        <div class="table-header"><div class="table-title">Supplier Directory</div></div>
        <table>
          <thead><tr><th>ID</th><th>Name</th><th>Contact</th><th>Email</th><th>Location</th><th>Items Supplied</th><th>Actions</th></tr></thead>
          <tbody id="supplierBody"></tbody>
        </table>
      </div>
    </div>

    <!-- ALERTS TAB -->
    <div id="tab-alerts" class="tab-content">
      <p style="margin-bottom:18px;font-size:14px;color:var(--text-muted);">Real-time alerts for stock requiring attention.</p>
      <div id="alertsContainer"></div>
    </div>

  </div>
</main>

<!-- MODAL: Add Stock -->
<div class="modal-overlay" id="addStockModal">
  <div class="modal">
    <div class="modal-title">Add New Stock Entry</div>
    <div class="form-row">
      <div class="form-group"><label>Item Name *</label><input type="text" id="si_name" placeholder="e.g. Gold Ring Floral"/></div>
      <div class="form-group"><label>Category *</label><select id="si_cat"><option value="">Select...</option><option>Ring</option><option>Necklace</option><option>Bangle</option><option>Earring</option><option>Pendant</option><option>Chain</option></select></div>
      <div class="form-group"><label>Karat</label><select id="si_karat"><option>22K</option><option>18K</option><option>24K</option></select></div>
      <div class="form-group"><label>Weight (g) *</label><input type="number" id="si_weight" placeholder="e.g. 5.4"/></div>
      <div class="form-group"><label>Quantity *</label><input type="number" id="si_qty" placeholder="e.g. 10"/></div>
      <div class="form-group"><label>Supplier</label><select id="si_supplier"><option value="">Select...</option><option>Raja Jewellers</option><option>Swarnamahal Jewellers Ltd</option><option>Vogue Jewellers Ltd</option></select></div>
      <div class="form-group full"><label>Notes</label><textarea id="si_notes" placeholder="Any additional notes..."></textarea></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('addStockModal')">Cancel</button>
      <button class="btn btn-gold" onclick="addStock()">Add Stock Entry</button>
    </div>
  </div>
</div>

<!-- MODAL: Edit Stock -->
<div class="modal-overlay" id="editStockModal">
  <div class="modal">
    <div class="modal-title">Edit Stock Entry</div>
    <input type="hidden" id="edit_idx"/>
    <div class="form-row">
      <div class="form-group"><label>Item Name</label><input type="text" id="edit_name"/></div>
      <div class="form-group"><label>Category</label><select id="edit_cat"><option>Ring</option><option>Necklace</option><option>Bangle</option><option>Earring</option><option>Pendant</option><option>Chain</option></select></div>
      <div class="form-group"><label>Karat</label><select id="edit_karat"><option>22K</option><option>18K</option><option>24K</option></select></div>
      <div class="form-group"><label>Weight (g)</label><input type="number" id="edit_weight"/></div>
      <div class="form-group"><label>Quantity</label><input type="number" id="edit_qty"/></div>
      <div class="form-group"><label>Supplier</label><input type="text" id="edit_supplier"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('editStockModal')">Cancel</button>
      <button class="btn btn-gold" onclick="saveEdit()">Save Changes</button>
    </div>
  </div>
</div>

<!-- MODAL: Add Supplier -->
<div class="modal-overlay" id="addSupplierModal">
  <div class="modal">
    <div class="modal-title">Add New Supplier</div>
    <div class="form-row">
      <div class="form-group"><label>Supplier Name *</label><input type="text" id="sup_name" placeholder="Company name"/></div>
      <div class="form-group"><label>Contact No. *</label><input type="text" id="sup_contact" placeholder="+91 XXXXX XXXXX"/></div>
      <div class="form-group"><label>Email</label><input type="email" id="sup_email" placeholder="email@example.com"/></div>
      <div class="form-group"><label>Location</label><input type="text" id="sup_location" placeholder="City, State"/></div>
      <div class="form-group full"><label>Items Supplied</label><input type="text" id="sup_items" placeholder="e.g. Rings, Necklaces"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('addSupplierModal')">Cancel</button>
      <button class="btn btn-gold" onclick="addSupplier()">Add Supplier</button>
    </div>
  </div>
</div>

<div class="toast" id="toast"><span id="toastMsg"></span></div>`,
  scripts: [
    {
      type: null,
      content: `
let stockData = [];
let supplierData = [];
let goldRates = [
  {date:'14 Mar 2026',r22:6820,r18:5578,r24:7440,change:+80},
  {date:'13 Mar 2026',r22:6740,r18:5516,r24:7352,change:-20},
  {date:'12 Mar 2026',r22:6760,r18:5532,r24:7376,change:+50},
  {date:'11 Mar 2026',r22:6710,r18:5495,r24:7320,change:-30},
  {date:'10 Mar 2026',r22:6740,r18:5516,r24:7352,change:+10},
];
let serialCounter = 9;

function getStatus(qty){ if(qty===0)return{label:'Out of Stock',cls:'out'}; if(qty<=3)return{label:'Low Stock',cls:'low'}; return{label:'In Stock',cls:'in-stock'}; }

function renderStock(data){
  document.getElementById('stockBody').innerHTML = data.map((item,i)=>{
    const st=getStatus(item.qty);
    return \`<tr>
      <td><span class="serial-badge">\${item.serial}</span></td>
      <td><strong>\${item.name}</strong></td><td>\${item.cat}</td><td>\${item.karat}</td>
      <td>\${item.weight}g</td><td><strong style="color:var(--maroon)">\${item.qty}</strong></td>
      <td><span class="status-badge \${st.cls}"><span class="status-dot"></span>\${st.label}</span></td>
      <td>\${item.supplier}</td>
      <td><div class="row-actions">
        <button class="icon-btn" title="Edit" onclick="editStock(\${i})"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
        <button class="icon-btn danger" title="Delete" onclick="deleteStock(\${i})"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg></button>
      </div></td>
    </tr>\`;
  }).join('');
}

function filterTable(){
  const q=document.getElementById('stockSearch').value.toLowerCase();
  const cat=document.getElementById('categoryFilter').value;
  renderStock(stockData.filter(item=>(item.name.toLowerCase().includes(q)||item.serial.toLowerCase().includes(q))&&(cat===''||item.cat===cat)));
}

function renderGoldRates(){
  document.getElementById('rateHistoryBody').innerHTML=goldRates.map(r=>{
    const chg=r.change>=0?\`<span style="color:var(--green);font-weight:600">↑ +\${r.change}</span>\`:\`<span style="color:var(--red);font-weight:600">↓ \${r.change}</span>\`;
    return\`<tr><td>\${r.date}</td><td>LKR \${r.r22.toLocaleString()}</td><td>LKR \${r.r18.toLocaleString()}</td><td>LKR \${r.r24.toLocaleString()}</td><td>\${chg}</td></tr>\`;
  }).join('');
}

function calculate(){
  const w=parseFloat(document.getElementById('calcWeight').value)||0;
  const k=document.getElementById('calcKarat').value;
  const making=parseFloat(document.getElementById('calcMaking').value)||0;
  const base22=goldRates[0].r22;
  const rate=k==='22'?base22:k==='18'?Math.round(base22*0.818):Math.round(base22*1.091);
  const base=w*rate; const total=base+(base*making/100);
  document.getElementById('calcResult').textContent=\`LKR \${Math.round(total).toLocaleString()}\`;
}

function renderSuppliers(){
  document.getElementById('supplierBody').innerHTML=supplierData.map((s,i)=>\`<tr>
    <td><span class="serial-badge">\${s.id}</span></td><td><strong>\${s.name}</strong></td>
    <td>\${s.contact}</td><td>\${s.email}</td><td>\${s.location}</td><td>\${s.items}</td>
    <td><div class="row-actions">
      <button class="icon-btn" onclick="editSupplier(\${i})"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
      <button class="icon-btn danger" onclick="deleteSupplier(\${i})"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg></button>
    </div></td>
  </tr>\`).join('');
}

function addSupplier(){
  const name=document.getElementById('sup_name').value.trim();
  const contact=document.getElementById('sup_contact').value.trim();
  if(!name||!contact){showToast('Name and contact are required.','error');return;}
  const id=\`SUP-\${String(supplierData.length+1).padStart(3,'0')}\`;
  supplierData.push({id,name,contact,email:document.getElementById('sup_email').value||'-',location:document.getElementById('sup_location').value||'-',items:document.getElementById('sup_items').value||'-'});
  renderSuppliers(); closeModal('addSupplierModal');
  ['sup_name','sup_contact','sup_email','sup_location','sup_items'].forEach(id=>document.getElementById(id).value='');
  showToast('✓ Supplier added.','success');
}

function editSupplier(i){
  const s=supplierData[i];
  const name=prompt('Supplier Name:',s.name); if(!name)return;
  const contact=prompt('Contact:',s.contact); const email=prompt('Email:',s.email);
  const location=prompt('Location:',s.location); const items=prompt('Items Supplied:',s.items);
  supplierData[i]={...s,name,contact:contact||s.contact,email:email||s.email,location:location||s.location,items:items||s.items};
  renderSuppliers(); showToast('✓ Updated.','success');
}

function deleteSupplier(i){
  if(!confirm(\`Remove "\${supplierData[i].name}"?\`))return;
  supplierData.splice(i,1); renderSuppliers(); showToast('✓ Removed.','success');
}

function updateAlerts(){
  const low=stockData.filter(s=>s.qty>0&&s.qty<=3);
  const out=stockData.filter(s=>s.qty===0);
  let html='';
  out.forEach(item=>{html+=\`<div class="alert-item danger"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span class="alert-msg"><strong>\${item.name}</strong> (\${item.serial}) — OUT OF STOCK. Reorder immediately.</span><span class="alert-time">Today</span></div>\`;});
  low.forEach(item=>{html+=\`<div class="alert-item warning"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><span class="alert-msg"><strong>\${item.name}</strong> (\${item.serial}) — Only <strong>\${item.qty}</strong> unit(s) left.</span><span class="alert-time">Today</span></div>\`;});
  if(!html)html=\`<div style="padding:32px;text-align:center;color:var(--text-muted);font-size:14px;">✓ All stock levels are healthy.</div>\`;
  document.getElementById('alertsContainer').innerHTML=html;
  document.getElementById('alertCount').textContent=out.length+low.length;
}

function exportCSV(){
  const headers=['Serial','Name','Category','Karat','Weight(g)','Qty','Status','Supplier'];
  const rows=stockData.map(s=>[s.serial,s.name,s.cat,s.karat,s.weight,s.qty,getStatus(s.qty).label,s.supplier]);
  const csv=[headers,...rows].map(r=>r.join(',')).join('\\n');
  const a=document.createElement('a'); a.href='data:text/csv,'+encodeURIComponent(csv);
  a.download='inventory_'+new Date().toISOString().slice(0,10)+'.csv'; a.click();
  showToast('✓ CSV exported.','success');
}

function switchTab(name,el){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active'); el.classList.add('active');
}

function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}
document.querySelectorAll('.modal-overlay').forEach(o=>{o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('open');});});

function showToast(msg,type='success'){
  const t=document.getElementById('toast'); document.getElementById('toastMsg').textContent=msg;
  t.className=\`toast \${type} show\`; setTimeout(()=>t.classList.remove('show'),3200);
}

async function logout() {
  try {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' });
  } catch (err) {
    console.error('Logout failed:', err);
  } finally {
    window.location.href = '/staff-login';
  }
}

`
    },
  ]
};

export default page;
