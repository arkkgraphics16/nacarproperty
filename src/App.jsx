import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CTASticky from './components/CTASticky';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ListingDetail from './pages/ListingDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import propertiesData from './data/properties.json';
import { messengerLink } from './lib/messenger';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  let preferred = 'dark';

  try {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      preferred = stored;
    } else if (typeof window.matchMedia === 'function') {
      preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
  } catch (error) {
    if (typeof window.matchMedia === 'function') {
      preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
  }

  if (typeof document !== 'undefined') {
    document.body.dataset.theme = preferred;
  }

  return preferred;
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.dataset.theme = theme;
    try {
      window.localStorage.setItem('theme', theme);
    } catch (error) {
      // ignore write errors
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app">
      <ScrollToTop />
      <Header messengerUrl={messengerLink} theme={theme} onToggleTheme={handleToggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home properties={propertiesData.slice(0, 3)} messengerUrl={messengerLink} />} />
          <Route path="/listings" element={<Listings properties={propertiesData} />} />
          <Route
            path="/listings/:slug"
            element={<ListingDetail properties={propertiesData} messengerUrl={messengerLink} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact messengerUrl={messengerLink} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/admin" element={<Admin initialProperties={propertiesData} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer messengerUrl={messengerLink} />
      <CTASticky messengerUrl={messengerLink} />
      <CookieBanner />
    </div>
  );
};

export default App;
