import { NavLink } from 'react-router-dom';

const Header = ({ messengerUrl }) => {
  return (
    <header>
      <div className="header-inner">
        <NavLink to="/" className="brand">
          Nacar Family Realty
        </NavLink>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/listings">Listings</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <a className="btn" href={messengerUrl} target="_blank" rel="noreferrer">
          Message Us
        </a>
      </div>
    </header>
  );
};

export default Header;
