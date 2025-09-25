import { useEffect } from 'react';
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

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Header messengerUrl={messengerLink} />
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
