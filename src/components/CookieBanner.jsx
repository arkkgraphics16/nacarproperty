import { useEffect, useState } from 'react';

const STORAGE_KEY = 'nacarproperty-cookie-consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'accepted');
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <span>
        We use cookies to analyze site traffic and improve your browsing experience. By continuing, you agree to our{' '}
        <a href="/cookies">cookie policy</a>.
      </span>
      <button type="button" onClick={accept}>
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
