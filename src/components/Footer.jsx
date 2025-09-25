import { Link } from 'react-router-dom';

const Footer = ({ messengerUrl }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">Nacar Family Realty</div>
            <p className="meta">
              Boutique family-operated agency specializing in curated vacant lots across Aklan.
            </p>
            <a className="btn-outline" href={messengerUrl} target="_blank" rel="noreferrer">
              Chat via Messenger
            </a>
          </div>
          <div className="meta">
            <strong>Visit</strong>
            <span>Kalibo, Aklan, Philippines</span>
            <strong>Call</strong>
            <a href="tel:+639171234567">+63 917 123 4567</a>
            <strong>Email</strong>
            <a href="mailto:hello@nacarrealty.com">hello@nacarrealty.com</a>
          </div>
          <div className="meta">
            <strong>Company</strong>
            <Link to="/about">About</Link>
            <Link to="/listings">Listings</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admin">Agent Login</Link>
          </div>
          <div className="meta">
            <strong>Legal</strong>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nacar Family Realty. All rights reserved.</span>
          <span>PRC Lic. # 0021345 | DSHUD # 1234</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
