import { useEffect } from 'react';
import { setSEO } from '../lib/seo';

const Terms = () => {
  useEffect(() => {
    setSEO({
      title: 'Terms of Service | Nacar Family Realty',
      description: 'Review the terms and conditions for using Nacar Family Realty services and website.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
      url: 'https://nacarproperty.vercel.app/terms',
    });
  }, []);

  return (
    <section className="container rich-text" style={{ padding: '4rem 0' }}>
      <h1 className="section-title">Terms of Service</h1>
      <p>Last updated: January 1, 2025</p>
      <p>
        By accessing this website, you agree to use the information provided for personal evaluation of properties offered by
        Nacar Family Realty. All property details are subject to verification and may change without prior notice. We reserve
        the right to update listings, pricing, and availability at any time.
      </p>
      <p>
        Consultation services are rendered on a best-effort basis. Formal brokerage engagements require a signed Authority to
        Sell or Buyer Representation Agreement, outlining scope, fees, and confidentiality terms.
      </p>
      <p>
        These terms are governed by the laws of the Republic of the Philippines. Disputes shall be resolved through amicable
        negotiation prior to any legal proceedings.
      </p>
    </section>
  );
};

export default Terms;
