import React from 'react';
import { Shield, MapPin, Users, Star, Award, Clock, CheckCircle, Phone } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Government Licensed',
      description: 'Fully registered and insured tour operator',
      highlight: 'CIN: U79120LD2024PTC024410',
      color: 'from-turquoise to-coral'
    },
    {
      icon: MapPin,
      title: 'Agatti Based',
      description: 'Local experts with island knowledge',
      highlight: 'Born and raised in paradise',
      color: 'from-sand to-turquoise'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Always here when you need us',
      highlight: 'Round-the-clock assistance',
      color: 'from-sand to-turquoise'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-sand/5 to-turquoise/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise/10 to-coral/10 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 fill-current" />
            <span>Why Travelers Trust Us</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-ocean mb-6">
            Your Trust is Our
            <span className="block text-turquoise">Greatest Achievement</span>
          </h2>
          <p className="text-xl text-deep-ocean/70 max-w-3xl mx-auto leading-relaxed">
            We're proud to be Lakshadweep's most trusted tour operator. 
            These credentials and achievements reflect our commitment to excellence and your satisfaction.
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className={`w-20 h-20 rounded-2xl ${badge.color === 'from-turquoise to-coral' ? 'solid-turquoise' : badge.color === 'from-coral to-sand' ? 'solid-coral' : 'solid-sand'} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-deep-ocean mb-3">{badge.title}</h3>
                <p className="text-deep-ocean/70 mb-4 leading-relaxed">{badge.description}</p>
                <div className={`inline-flex items-center gap-2 ${badge.color === 'from-turquoise to-coral' ? 'solid-turquoise' : badge.color === 'from-coral to-sand' ? 'solid-coral' : 'solid-sand'} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                  <CheckCircle className="h-4 w-4" />
                  <span>{badge.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Proof Section */}
        <div className="bg-gradient-to-r from-turquoise/10 via-coral/10 to-sand/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-6">
            Join 500+ Travelers Who've Discovered Paradise
          </h3>
          <p className="text-xl text-deep-ocean/70 mb-8 max-w-3xl mx-auto">
            Don't just take our word for it. Read what our guests have to say about their 
            unforgettable Lakshadweep experiences with us.
          </p>
          
          

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918086003344"
              target="_blank"
              rel="noopener noreferrer"
              className="solid-turquoise text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Your Adventure
            </a>
            <a 
              href="https://wa.me/918086003344"
              target="_blank"
              rel="noopener noreferrer"
              className="glass text-deep-ocean px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};