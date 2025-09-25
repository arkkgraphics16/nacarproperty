import { Link } from 'react-router-dom';

const Hero = ({ messengerUrl }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Luxury vacant lots curated for legacy estates.</h1>
        <p>
          Nacar Family Realty unlocks discreet opportunities across Aklan—from riverside sanctuaries to hilltop vistas—
          tailored for discerning families planning their next generational home.
        </p>
        <div className="hero-actions">
          <a className="btn" href={messengerUrl} target="_blank" rel="noreferrer">
            Message on Facebook
          </a>
          <Link className="btn-outline" to="/listings">
            Browse Listings
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
