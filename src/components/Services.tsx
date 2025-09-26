import React from 'react';
import { MapPin, Home, Waves, Ship, Phone } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: MapPin,
      title: '🏖️ Lagoon Beach, Andam Beach, Moloka Beach',
      description: 'Discover Agatti\'s most beautiful beaches with crystal-clear lagoons and pristine white sand. Perfect for relaxation and photography.',
      features: ['🏖️ Lagoon Beach - calm waters', '🌊 Andam Beach - perfect for swimming', '🏝️ Moloka Beach - hidden gem', '📸 Instagram-worthy spots'],
      image: '/images/beach.JPG'
    },
    {
      icon: Home,
      title: '🏛️ Museum & Cultural Heritage',
      description: 'Explore Agatti\'s rich history and culture at the local museum. Learn about the island\'s traditions, artifacts, and way of life.',
      features: ['🏛️ Local history exhibits', '🎭 Cultural artifacts', '📚 Traditional knowledge', '👥 Guided museum tours'],
      image: '/images/Museum.jpg'
    },
    {
      icon: Waves,
      title: '🚣 Kayaking & Glass Bottom Boating',
      description: 'Paddle through calm lagoons or explore underwater life without getting wet. Perfect for all ages and skill levels.',
      features: ['🚣 Kayaking in calm waters', '🔍 Glass bottom boat tours', '🐠 Underwater marine life viewing', '🏊 Safe for non-swimmers'],
      image: '/images/kayaking.JPG'
    },
    {
      icon: Ship,
      title: '🤿 Snorkeling & Scuba Diving',
      description: 'Dive into Agatti\'s underwater paradise. Explore vibrant coral reefs and swim with tropical fish in crystal-clear waters.',
      features: ['🤿 Professional snorkeling gear', '🐠 Coral reef exploration', '🏊 Scuba diving for certified divers', '📸 Underwater photography'],
      image: '/images/scuba.JPG'
    },
    {
      icon: MapPin,
      title: '🏝️ Thinnakara, Bangaram, Kalpetti Islands',
      description: 'Island hopping adventure to nearby pristine islands. Each offers unique experiences and breathtaking natural beauty.',
      features: ['🏝️ Thinnakara - sandbank paradise', '🌊 Bangaram - luxury resort island', '🏖️ Kalpetti - untouched beauty', '🚤 Speedboat transfers included'],
      image: '/images/thinnakara.jpeg'
    },
    {
      icon: Waves,
      title: '🎣 Fish Hunting & Fishing',
      description: 'Experience traditional and modern fishing techniques. Learn from local fishermen and try your hand at catching dinner.',
      features: ['🎣 Traditional fishing methods', '🐟 Local fish species', '👨‍🏫 Expert fisherman guides', '🍽️ Fresh catch cooking'],
      image: '/images/fishing.jpg'
    },
    {
      icon: Home,
      title: '🍽️ Native Food & Local Cuisine',
      description: 'Savor authentic Agatti flavors. Experience traditional island cuisine with fresh seafood and local ingredients.',
      features: ['🦐 Fresh seafood specialties', '🥥 Coconut-based dishes', '🌶️ Traditional spices', '👨‍🍳 Local cooking demonstrations'],
      image: '/images/local food.JPG'
    },
    {
      icon: MapPin,
      title: '🌅 360° Sightseeing & Island Tours',
      description: 'Every corner of Agatti is a treasure waiting to be discovered. From hidden coves to breathtaking viewpoints, every place you visit will feel like paradise.',
      features: ['🌅 Sunrise & sunset viewpoints', '📸 Best photo spots', '🗺️ Complete island tour', '👨‍🏫 Local guide insights', '💎 Discover hidden treasures at every turn'],
      image: '/images/sight seeing.JPG'
    },
    {
      icon: Home,
      title: '🎭 Native Dweep Culture',
      description: 'Immerse yourself in authentic Lakshadweep culture. Experience traditional music, dance, crafts, and local customs.',
      features: ['🎵 Traditional music & dance', '🎨 Local handicrafts', '👥 Cultural interactions', '🏠 Village life experience', '🎨 See Parijja Mutt, Olakka Mutt, Kolkalli art items & more'],
      image: '/images/cultural-activiites.JPG'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-sand/5 via-white to-turquoise/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-ocean mb-6">
            🏝️ What You Can Do
            <span className="block text-turquoise">On Agatti Island</span>
          </h2>
          <p className="text-xl text-deep-ocean/70 max-w-3xl mx-auto leading-relaxed">
            🌊 From pristine beaches to cultural experiences, discover everything Agatti has to offer. Your complete guide to the ultimate island adventure. 🏖️
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                        className={`object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700 ${
                          service.title.includes('360° Sightseeing') || service.title.includes('Native Dweep Culture')
                            ? 'object-bottom'
                            : 'object-center'
                        }`}
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
                      <div key={idx} className="text-sm text-deep-ocean/80">
                        {feature}
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
                  🏝️ Ready to Explore Agatti Island? 🏝️
                </h3>
                <p className="text-xl text-deep-ocean/70 mb-8 max-w-2xl mx-auto">
                  🌟 Get your complete Agatti guide and personalized travel plan. We'll help you experience the best of this paradise island. ✨
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/918086003344?text=Hi! I'm planning to visit Agatti Island. Can you help me create a complete itinerary with all the activities and experiences?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="solid-turquoise text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Get My Agatti Plan
                  </a>
                  <a 
                    href="https://wa.me/918086003344?text=Hi! I have questions about Agatti Island activities and experiences. Can you help me plan my trip?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass text-deep-ocean px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    WhatsApp Guide
                  </a>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};