import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { setSEO } from '../lib/seo';

const NotFound = () => {
  useEffect(() => {
    setSEO({
      title: 'Page Not Found | Nacar Family Realty',
      description: 'The page you are looking for does not exist on Nacar Family Realty.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
      url: 'https://nacarproperty.vercel.app/404',
    });
  }, []);

  return (
    <section className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
      <h1 className="section-title">404 – Lost the trail</h1>
      <p className="meta">We can&apos;t locate that page. Explore our listings instead.</p>
      <div className="hero-actions" style={{ justifyContent: 'center' }}>
        <Link className="btn" to="/">
          Return Home
        </Link>
        <Link className="btn-outline" to="/listings">
          View Listings
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
