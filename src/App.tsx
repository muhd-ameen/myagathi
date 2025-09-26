import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Itineraries } from './components/Itineraries';
import { CompanyStory } from './components/CompanyStory';
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
      <CompanyStory />
      <TrustBadges />
      <FAQ />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-deep-ocean text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">
            2025 - A gift from ameen 🥑
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;