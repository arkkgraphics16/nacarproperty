import { Link } from 'react-router-dom';
import { formatCurrency, formatSquareMeters } from '../lib/format';

const PropertyCard = ({ property }) => {
  const cover = property.images?.[0];
  return (
    <article className="card">
      <div className="card-header">
        {cover ? (
          <img src={cover} alt={property.title} loading="lazy" />
        ) : (
          <div aria-hidden className="gradient" />
        )}
      </div>
      <div>
        <div className="badges">
          {property.badges?.map((badge) => (
            <span key={badge} className="badge">
              {badge}
            </span>
          ))}
        </div>
        <h3 className="section-title" style={{ fontSize: '1.4rem', margin: '1rem 0 0.5rem' }}>
          {property.title}
        </h3>
        <p className="meta">
          <span>{formatCurrency(property.price, property.currency)}</span>
          <span>{formatSquareMeters(property.lotSqm)} · {property.zoning}</span>
          <span>
            {property.address.city}, {property.address.province}
          </span>
        </p>
      </div>
      <Link className="btn-outline" to={`/listings/${property.slug}`}>
        View Details
      </Link>
    </article>
  );
};

export default PropertyCard;
