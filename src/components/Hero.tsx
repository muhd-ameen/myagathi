import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Star, Shield, Users, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

      const trustBadges = [
        { icon: Shield, text: "Govt. Licensed" },
        { icon: MapPin, text: "Agatti Based" }
      ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'url(/images/main-banner.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-turquoise/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-coral/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-sand/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-deep-ocean shadow-lg">
                    <Icon className="h-4 w-4 text-turquoise" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in text-white drop-shadow-lg">
              Your Complete<br />
              <span className="text-white">
                Agatti Guide
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl mb-4 font-light animate-fade-in text-white drop-shadow-md">
              Agatti Island, Lakshadweep
            </p>

            <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto animate-fade-in text-white/95 drop-shadow-md">
              Everything you need to know about Agatti Island. From hidden beaches to local experiences, we guide you through the ultimate island adventure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
              <a 
                href="https://wa.me/918086003344?text=Hi! I'm planning to visit Agatti Island. Can you help me with a complete guide and travel arrangements?"
                target="_blank"
                rel="noopener noreferrer"
                className="solid-turquoise text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 transform hover:scale-105 shadow-soft"
              >
                Plan My Agatti Trip
              </a>
              <button 
                onClick={scrollToServices}
                className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Explore Activities
              </button>
            </div>

        {/* Social Proof */}
        <div className="animate-fade-in">
          <p className="text-sm text-white/80 mb-2 drop-shadow-md">Trusted by travelers worldwide</p>
              
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};