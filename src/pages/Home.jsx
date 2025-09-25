import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { setSEO } from '../lib/seo';
import { useEffect } from 'react';

const Home = ({ properties, messengerUrl }) => {
  useEffect(() => {
    setSEO({
      title: 'Nacar Family Realty | Vacant Lots in Aklan',
      description: 'Discover curated vacant lots in Aklan with concierge guidance from the Nacar family realty.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
      url: 'https://nacarproperty.vercel.app/',
    });
  }, []);

  return (
    <>
      <Hero messengerUrl={messengerUrl} />
      <section className="container">
        <h2 className="section-title">Featured Lots</h2>
        <div className="card-grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
      <section className="container">
        <div className="cta-banner">
          <h2>Book a private site viewing with our family agent.</h2>
          <p>
            Share your vision and we will shortlist prime vacant lots aligned to your investment horizon, development
            requirements, and lifestyle goals.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a className="btn" href={messengerUrl} target="_blank" rel="noreferrer">
              Start Messenger Chat
            </a>
            <a className="btn-outline" href="mailto:hello@nacarrealty.com">
              Email Our Agent
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
