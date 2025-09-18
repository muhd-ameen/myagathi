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
          backgroundImage: 'url(https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-deep-ocean/60 via-deep-ocean/40 to-turquoise/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
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
              <div key={index} className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium">
                <Icon className="h-4 w-4 text-turquoise" />
                <span>{badge.text}</span>
              </div>
            );
          })}
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
          Discover Your<br />
          <span className="text-turquoise">
            Paradise
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 opacity-90 font-light animate-fade-in">
          Lakshadweep Islands
        </p>
        
        <p className="text-lg sm:text-xl mb-12 opacity-80 max-w-3xl mx-auto animate-fade-in">
          Where crystal-clear waters meet pristine beaches. Experience the untouched beauty of India's hidden tropical paradise.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <a 
            href="https://wa.me/918086003344"
            target="_blank"
            rel="noopener noreferrer"
            className="solid-turquoise text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 transform hover:scale-105 shadow-soft"
          >
            Start Your Journey
          </a>
          <a 
            href="https://wa.me/918086003344"
            target="_blank"
            rel="noopener noreferrer"
            className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
          >
            View Packages
          </a>
        </div>

        {/* Social Proof */}
        <div className="animate-fade-in">
          <p className="text-sm opacity-70 mb-2">Trusted by travelers worldwide</p>
              
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};