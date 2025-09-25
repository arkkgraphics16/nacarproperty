import { useEffect } from 'react';
import { setSEO } from '../lib/seo';

const Contact = ({ messengerUrl }) => {
  useEffect(() => {
    setSEO({
      title: 'Contact Nacar Family Realty',
      description: 'Connect with our family agent via Messenger, phone, or email for bespoke vacant lot guidance.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
      url: 'https://nacarproperty.vercel.app/contact',
    });
  }, []);

  return (
    <section className="container" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Speak With Our Family Agent</h1>
      <div className="contact-card">
        <p>
          Share your target location, preferred lot size, and timeline. We&apos;ll prepare a shortlist of opportunities and
          schedule private tours on your preferred dates.
        </p>
        <div className="contact-actions">
          <a className="btn" href={messengerUrl} target="_blank" rel="noreferrer">
            Chat on Messenger
          </a>
          <a className="btn-outline" href="tel:+639171234567">
            Call +63 917 123 4567
          </a>
          <a className="btn-outline" href="mailto:hello@nacarrealty.com">
            Email hello@nacarrealty.com
          </a>
        </div>
        <p className="meta">
          Office hours: Monday to Saturday, 9:00 AM – 6:00 PM PHT. Viewings available by appointment only.
        </p>
      </div>
    </section>
  );
};

export default Contact;
