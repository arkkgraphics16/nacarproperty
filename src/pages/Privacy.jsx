import { useEffect } from 'react';
import { setSEO } from '../lib/seo';

const Privacy = () => {
  useEffect(() => {
    setSEO({
      title: 'Privacy Policy | Nacar Family Realty',
      description: 'Understand how Nacar Family Realty collects, uses, and protects your personal information.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
      url: 'https://nacarproperty.vercel.app/privacy',
    });
  }, []);

  return (
    <section className="container rich-text" style={{ paddingBlock: '4rem' }}>
      <h1 className="section-title">Privacy Policy</h1>
      <p>Last updated: January 1, 2025</p>
      <p>
        We collect limited personal information that you voluntarily share with us, such as your name, contact number,
        and property preferences. This information is used solely to arrange consultations, property viewings, and follow-up
        communication related to our vacant lot services.
      </p>
      <p>
        We do not sell or rent your information. Third-party services such as Facebook Messenger may process data according
        to their own policies. You may request access, correction, or deletion of your data at any time by emailing
        hello@nacarrealty.com.
      </p>
      <p>
        For inquiries about this Privacy Policy, contact our Data Protection Officer at privacy@nacarrealty.com.
      </p>
    </section>
  );
};

export default Privacy;
