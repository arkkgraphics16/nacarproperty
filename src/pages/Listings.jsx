import { useMemo, useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { setSEO } from '../lib/seo';

const defaultFilters = {
  city: 'all',
  province: 'all',
  status: 'all',
  minLot: '',
  maxLot: '',
  minPrice: '',
  maxPrice: '',
};

const Listings = ({ properties }) => {
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    setSEO({
      title: 'Vacant Lot Listings | Nacar Family Realty',
      description: 'Browse riverside, highland, and bayside vacant lots across Aklan curated by the Nacar family.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
      url: 'https://nacarproperty.vercel.app/listings',
    });
  }, []);

  const cities = useMemo(() => ['all', ...new Set(properties.map((item) => item.address.city))], [properties]);
  const provinces = useMemo(() => ['all', ...new Set(properties.map((item) => item.address.province))], [properties]);
  const statuses = useMemo(() => ['all', ...new Set(properties.map((item) => item.status))], [properties]);

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      if (filters.city !== 'all' && property.address.city !== filters.city) return false;
      if (filters.province !== 'all' && property.address.province !== filters.province) return false;
      if (filters.status !== 'all' && property.status !== filters.status) return false;
      if (filters.minLot && property.lotSqm < Number(filters.minLot)) return false;
      if (filters.maxLot && property.lotSqm > Number(filters.maxLot)) return false;
      if (filters.minPrice && property.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && property.price > Number(filters.maxPrice)) return false;
      return true;
    });
  }, [properties, filters]);

  const updateFilter = (key) => (event) => {
    setFilters((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <section className="container">
      <h1 className="section-title">Vacant Lots Catalogue</h1>
      <div className="filter-bar">
        <label>
          City / Town
          <select value={filters.city} onChange={updateFilter('city')}>
            {cities.map((option) => (
              <option key={option} value={option}>
                {option === 'all' ? 'All' : option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Province
          <select value={filters.province} onChange={updateFilter('province')}>
            {provinces.map((option) => (
              <option key={option} value={option}>
                {option === 'all' ? 'All' : option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Status
          <select value={filters.status} onChange={updateFilter('status')}>
            {statuses.map((option) => (
              <option key={option} value={option}>
                {option === 'all' ? 'All' : option.replace('-', ' ')}
              </option>
            ))}
          </select>
        </label>
        <label>
          Min Lot (sqm)
          <input type="number" placeholder="0" value={filters.minLot} onChange={updateFilter('minLot')} min="0" />
        </label>
        <label>
          Max Lot (sqm)
          <input type="number" placeholder="1000" value={filters.maxLot} onChange={updateFilter('maxLot')} min="0" />
        </label>
        <label>
          Min Price (PHP)
          <input type="number" placeholder="0" value={filters.minPrice} onChange={updateFilter('minPrice')} min="0" />
        </label>
        <label>
          Max Price (PHP)
          <input type="number" placeholder="5000000" value={filters.maxPrice} onChange={updateFilter('maxPrice')} min="0" />
        </label>
      </div>
      {filtered.length ? (
        <div className="card-grid">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="list-empty">No properties match the selected filters right now.</div>
      )}
    </section>
  );
};

export default Listings;
