import { useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import { formatCurrency, formatSquareMeters } from '../lib/format';
import { setSEO } from '../lib/seo';

const ListingDetail = ({ properties, messengerUrl }) => {
  const { slug } = useParams();
  const property = useMemo(() => properties.find((item) => item.slug === slug), [properties, slug]);

  useEffect(() => {
    if (!property) return;
    setSEO({
      title: property.seo?.title || property.title,
      description: property.seo?.description || property.description,
      image: property.images?.[0] || 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
      url: `https://nacarproperty.vercel.app/listings/${property.slug}`,
    });
  }, [property]);

  if (!property) {
    return (
      <section className="container">
        <div className="list-empty">
          <p>We could not find that listing.</p>
          <Link className="btn" to="/listings">
            Back to Listings
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="listing-header">
        <Link to="/listings" className="btn-outline" style={{ width: 'fit-content' }}>
          ← Back to catalogue
        </Link>
        <h1>{property.title}</h1>
        <div className="meta">
          <span>{property.address.city}, {property.address.province}, {property.address.country}</span>
          <span>Status: {property.status.replace('-', ' ')}</span>
        </div>
      </div>
      <Gallery images={property.images} title={property.title} />
      <div className="table-like">
        <div>
          <span>Price</span>
          <span>{formatCurrency(property.price, property.currency)}</span>
        </div>
        <div>
          <span>Lot Area</span>
          <span>{formatSquareMeters(property.lotSqm)}</span>
        </div>
        <div>
          <span>Zoning</span>
          <span>{property.zoning}</span>
        </div>
        <div>
          <span>Frontage</span>
          <span>{property.frontage}</span>
        </div>
        <div>
          <span>Road Access</span>
          <span>{property.roadAccess}</span>
        </div>
      </div>
      <div className="badges" style={{ marginBottom: '2rem' }}>
        {property.badges?.map((badge) => (
          <span key={badge} className="badge">
            {badge}
          </span>
        ))}
      </div>
      <div className="rich-text">
        <p>{property.description}</p>
        <h2>Utilities</h2>
        <ul>
          {property.utilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Nearby</h2>
        <ul>
          {property.nearby.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="cta-banner">
        <h2>Schedule a guided viewing.</h2>
        <p>
          Message us to secure a private tour of {property.title}. We respond quickly via Messenger and can arrange site
          visits within 48 hours.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <a className="btn" href={messengerUrl} target="_blank" rel="noreferrer">
            Message Agent
          </a>
          <a className="btn-outline" href="tel:+639171234567">
            Call +63 917 123 4567
          </a>
        </div>
      </div>
    </section>
  );
};

export default ListingDetail;
