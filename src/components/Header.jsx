import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/listings', label: 'Listings' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header = ({ messengerUrl, theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header>
      <div className="header-inner">
        <NavLink to="/" className="brand">
          Nacar Family Realty
        </NavLink>
        <nav className="nav-links">
          {navLinks.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-pressed={theme === 'light'}
            aria-label="Toggle color theme"
          >
            <span aria-hidden="true" className="theme-toggle-icon">
              {theme === 'light' ? '☀️' : '🌙'}
            </span>
            <span>{theme === 'light' ? 'Light' : 'Dark'} Mode</span>
          </button>
          <a className="btn header-cta" href={messengerUrl} target="_blank" rel="noreferrer">
            Message Us
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav-links">
          {navLinks.map(({ to, label, end }) => (
            <NavLink key={`mobile-${to}`} to={to} end={end}>
              {label}
            </NavLink>
          ))}
          <a className="btn" href={messengerUrl} target="_blank" rel="noreferrer">
            Message Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
