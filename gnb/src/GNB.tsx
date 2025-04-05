import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} style={{ color: 'white', marginRight: '1rem' }}>
    {children}
  </a>
);

const GNB: React.FC = () => {
  return (
    <nav
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div className="logo">Micro Frontend Demo</div>
      <div className="nav-links">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default GNB; 