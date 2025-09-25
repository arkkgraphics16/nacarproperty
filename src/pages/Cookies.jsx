import { useEffect } from 'react';
import { setSEO } from '../lib/seo';

const Cookies = () => {
  useEffect(() => {
    setSEO({
      title: 'Cookie Policy | Nacar Family Realty',
      description: 'Learn how cookies are used on the Nacar Family Realty website for analytics and experience.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
      url: 'https://nacarproperty.vercel.app/cookies',
    });
  }, []);

  return (
    <section className="container rich-text" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Cookie Policy</h1>
      <p>Last updated: January 1, 2025</p>
      <p>
        This website uses essential cookies to maintain session preferences and optional analytics cookies to understand
        visitor engagement. Analytics cookies may be served by privacy-focused tools that collect anonymized usage data such
        as visited pages and dwell time.
      </p>
      <p>
        You may disable cookies at any time by adjusting your browser settings. Doing so may affect certain features such as
        remembering your inquiry details within forms. For questions, reach out to privacy@nacarrealty.com.
      </p>
    </section>
  );
};

export default Cookies;
