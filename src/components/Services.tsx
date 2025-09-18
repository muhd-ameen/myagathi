import React from 'react';
import { MapPin, Home, Waves, Ship, Star, CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: MapPin,
      title: '🏝️ Island Hopping Adventures',
      description: 'Discover pristine islands with expert local guides. Experience the untouched beauty of Agatti, Kavaratti, Bangaram, and Thinnakara.',
      features: ['🚤 Private speedboat transfers', '👨‍🏫 Local island guides', '🏖️ Hidden beach access', '🎭 Cultural experiences'],
      image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Home,
      title: '🏨 Luxury Beach Resorts',
      description: 'Stay in handpicked beachfront properties with stunning ocean views. Wake up to the sound of waves and breathtaking sunrises.',
      features: ['🌊 Beachfront locations', '🍽️ All-inclusive packages', '🏖️ Private beach access', '🧘 Spa & wellness'],
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Waves,
      title: '🤿 Water Sports Paradise',
      description: 'Dive into crystal-clear waters with world-class snorkeling, kayaking, and glass-bottom boat tours. Perfect for all skill levels.',
      features: ['🎯 Professional equipment', '🏆 Certified instructors', '🛡️ Safety first approach', '📸 Underwater photography'],
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Ship,
      title: '📋 Seamless Logistics',
      description: 'We handle all permits, transfers, and paperwork so you can focus on creating memories. Government-licensed and fully insured.',
      features: ['📄 All permits included', '✈️ Airport transfers', '🕐 24/7 support', '🛡️ Travel insurance'],
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-sand/5 via-white to-turquoise/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-turquoise/10 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span>Trusted by 500+ Travelers</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-ocean mb-6">
            🌟 Your Dream Island
            <span className="block text-turquoise">✨ Experience Awaits ✨</span>
          </h2>
          <p className="text-xl text-deep-ocean/70 max-w-3xl mx-auto leading-relaxed">
            🏝️ From luxury accommodations to thrilling adventures, we craft unforgettable experiences that connect you with the pristine beauty of Lakshadweep. 🌊
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Icon className="h-6 w-6 text-turquoise" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-deep-ocean mb-3 group-hover:text-turquoise transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-deep-ocean/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-turquoise flex-shrink-0" />
                        <span className="text-sm text-deep-ocean/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-turquoise/10 via-coral/10 to-sand/10 rounded-3xl p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-4">
              🎉 Ready to Create Unforgettable Memories? 🎉
            </h3>
            <p className="text-xl text-deep-ocean/70 mb-8 max-w-2xl mx-auto">
              🌟 Join hundreds of satisfied travelers who've discovered the magic of Lakshadweep with us. ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918086003344"
                target="_blank"
                rel="noopener noreferrer"
                className="solid-turquoise text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 transform hover:scale-105"
              >
                View Packages
              </a>
              <a 
                href="https://wa.me/918086003344"
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-deep-ocean px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};