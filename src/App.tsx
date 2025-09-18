import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Itineraries } from './components/Itineraries';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { TrustBadges } from './components/TrustBadges';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <Services />
      <Itineraries />
      <Gallery />
      <FAQ />
      <TrustBadges />
      <Contact />
    </div>
  );
}

export default App;