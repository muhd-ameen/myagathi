import React, { useState } from 'react';
import { Anchor, Phone, Menu, X, Star } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Packages', id: 'itineraries' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Anchor className="h-8 w-8 text-turquoise" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-coral rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-deep-ocean font-display">Myagathi</h1>
              <div className="flex items-center gap-1">
                <span className="text-xs solid-turquoise text-white px-2 py-0.5 rounded-full font-medium">
                  Govt Licensed
                </span>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-deep-ocean/70 font-medium">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="text-deep-ocean hover:text-turquoise transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-turquoise transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a 
                href="https://wa.me/918086003344"
                target="_blank"
                rel="noopener noreferrer"
                className="solid-turquoise text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-soft transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-deep-ocean" />
              ) : (
                <Menu className="h-6 w-6 text-deep-ocean" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 px-4 text-deep-ocean hover:bg-turquoise/10 hover:text-turquoise transition-colors rounded-lg font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="https://wa.me/918086003344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 solid-turquoise text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-soft transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp: +91 8086003344
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};