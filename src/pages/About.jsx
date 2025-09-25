import { useEffect } from 'react';
import { setSEO } from '../lib/seo';

const About = () => {
  useEffect(() => {
    setSEO({
      title: 'About Nacar Family Realty',
      description: 'Learn about the Nacar family realty and our legacy in connecting clients with Aklan vacant lots.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
      url: 'https://nacarproperty.vercel.app/about',
    });
  }, []);

  return (
    <section className="container rich-text" style={{ paddingBlock: '4rem' }}>
      <h1 className="section-title">Our Family Legacy</h1>
      <p>
        Nacar Family Realty was born from decades of stewardship across Aklan&apos;s most promising parcels. What began as a
        family passion for land banking has evolved into a boutique advisory, serving fellow families seeking secure,
        high-value sites for future residences, farm villas, and investment estates.
      </p>
      <p>
        We operate with an intimate understanding of barangay developments, infrastructure timelines, and local community
        relations. This insight enables us to match clients with lots that are truly future-proof—backed by clean titles,
        accessible utilities, and growth corridors shaped by upcoming tourism and logistics projects.
      </p>
      <h2>How We Work</h2>
      <ul>
        <li>Concierge site shortlisting tailored to your lifestyle objectives.</li>
        <li>Coordination of due diligence, from zoning checks to title verification.</li>
        <li>Introductions to architects, surveyors, and financing partners we trust.</li>
      </ul>
      <p>
        Our promise is personal attention from the Nacar family agent on every engagement. We believe in conversations over
        transactions, guiding you with discretion and clarity from discovery to deed transfer.
      </p>
    </section>
  );
};

export default About;
