import React from 'react';

const baseLinkStyle = {
  textDecoration: 'none',
  color: '#6f0022',
  border: '1px solid #e6d6dc',
  borderRadius: '999px',
  padding: '0.4rem 0.8rem',
  fontWeight: 600,
  fontSize: '0.85rem'
};

const activeLinkStyle = {
  ...baseLinkStyle,
  background: '#f8eef2',
  borderColor: '#6f0022'
};

export default function StaffDashboardLayout({ title, staff, onLogout, links = [], children }) {
  const pathname = window.location.pathname;

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem' }}>
      <header style={{
        border: '1px solid #eee',
        borderRadius: 14,
        padding: '1rem',
        marginBottom: '1rem',
        background: '#fff'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ margin: 0, color: '#6f0022', fontSize: '1.4rem' }}>{title}</h1>
            <p style={{ margin: '0.3rem 0 0', color: '#555' }}>
              {staff ? `${staff.fullName} (${staff.role})` : 'Loading user...'}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a href="/home" style={baseLinkStyle}>Customer Home</a>
            <button
              type="button"
              onClick={onLogout}
              style={{
                border: 'none',
                background: '#6f0022',
                color: '#fff',
                borderRadius: 999,
                padding: '0.5rem 0.9rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>
        </div>

        {links.length > 0 && (
          <nav style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.9rem' }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={pathname === link.href ? activeLinkStyle : baseLinkStyle}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>{children}</main>
    </div>
  );
}
