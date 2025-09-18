import React from 'react';
import { Calendar, Users, MapPin, Star, CheckCircle, ArrowRight, Heart, Clock, Phone } from 'lucide-react';

export const Itineraries: React.FC = () => {
  const packages = [
    {
      title: '🏝️ Ultimate Lakshadweep Paradise',
      subtitle: '✨ 5 Days of Pure Island Magic ✨',
      duration: '5 Days / 4 Nights',
      islands: '🏖️ Agatti • Kavaratti • Bangaram',
      description: '🌟 Experience the complete Lakshadweep adventure with our most popular package. From luxury beachfront stays to thrilling water adventures, this is your gateway to paradise. 🌊',
      highlights: [
        '🏨 Luxury beachfront resort accommodation',
        '🚤 Private speedboat island hopping',
        '🍽️ All meals with local delicacies',
        '🤿 Professional snorkeling & diving',
        '🎭 Cultural island experiences',
        '📄 All permits & transfers included',
        'Dedicated local guide support',
        '📸 Photography & memories package'
      ],
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 'From ₹45,000',
      originalPrice: '₹55,000',
      discount: '18% OFF',
      popular: true,
      bestseller: true
    },
    {
      title: '🏖️ Bangaram Island Escape',
      subtitle: '⚡ Perfect Day Trip Adventure ⚡',
      duration: '1 Day',
      islands: '🏝️ Bangaram • Thinnakara',
      description: '🌅 Discover the pristine beauty of Bangaram Island in a single day. Perfect for those seeking a quick escape to paradise with maximum adventure. 🚀',
      highlights: [
        '🚤 Private speedboat transfers',
        '🏖️ Hidden sandbank exploration',
        '🍽️ Gourmet beach picnic lunch',
        '🤿 Professional snorkeling gear',
        '📸 Underwater photography session',
        '👨‍🏫 Local guide & safety equipment',
        '🌅 Sunset viewing experience',
        '🥤 Complimentary refreshments'
      ],
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 'From ₹8,500',
      originalPrice: '₹10,000',
      discount: '15% OFF',
      popular: false,
      bestseller: false
    },
    {
      title: '💕 Honeymoon Paradise Special',
      subtitle: '💖 Romantic Island Getaway 💖',
      duration: '4 Days / 3 Nights',
      islands: '🏖️ Agatti • Bangaram',
      description: '💕 Create unforgettable memories with your loved one in our specially curated honeymoon package. Intimate experiences, private beaches, and romantic surprises await. 🌹',
      highlights: [
        '🏨 Private beachfront villa',
        '🕯️ Romantic candlelight dinners',
        '🧘 Couple spa & wellness sessions',
        '🏖️ Private island picnics',
        '🌅 Sunset cruise experience',
        '📸 Professional photography',
        '🎁 Honeymoon surprise gifts',
        '✨ All-inclusive luxury service'
      ],
      image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 'From ₹38,000',
      originalPrice: '₹45,000',
      discount: '16% OFF',
      popular: true,
      bestseller: false
    }
  ];

  return (
    <section id="itineraries" className="py-20 bg-gradient-to-br from-white via-sand/5 to-turquoise/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise/10 to-coral/10 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4 fill-current" />
            <span>Handcrafted Island Experiences</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-ocean mb-6">
            🎯 Choose Your
            <span className="block text-turquoise">✨ Perfect Adventure ✨</span>
          </h2>
          <p className="text-xl text-deep-ocean/70 max-w-3xl mx-auto leading-relaxed">
            🏝️ Each package is carefully designed to showcase the unique beauty of Lakshadweep. From quick escapes to immersive adventures, 
            find the perfect experience that matches your dreams. 🌟
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-2 ${
                pkg.bestseller ? 'ring-2 ring-turquoise/20' : ''
              }`}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {pkg.bestseller && (
                  <div className="solid-turquoise text-white px-3 py-1 rounded-full text-xs font-bold">
                    BESTSELLER
                  </div>
                )}
                {pkg.popular && (
                  <div className="solid-coral text-white px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}
                <div className="bg-white/90 backdrop-blur-sm text-coral px-3 py-1 rounded-full text-xs font-bold">
                  {pkg.discount}
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.title}
                  className="object-cover w-full h-64 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Price */}
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2">
                    <div className="text-2xl font-bold text-deep-ocean">{pkg.price}</div>
                    <div className="text-sm text-deep-ocean/60 line-through">{pkg.originalPrice}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-deep-ocean mb-2">{pkg.title}</h3>
                <p className="text-turquoise font-medium mb-4">{pkg.subtitle}</p>
                <p className="text-deep-ocean/70 mb-6 leading-relaxed">{pkg.description}</p>
                
                {/* Duration & Islands */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-deep-ocean/70">
                    <Calendar className="h-4 w-4 text-turquoise" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-deep-ocean/70">
                    <MapPin className="h-4 w-4 text-turquoise" />
                    <span>{pkg.islands}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-deep-ocean mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-turquoise" />
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-deep-ocean/80 flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-turquoise flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>


                {/* CTA Button */}
                <a 
                  href="https://wa.me/918086003344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full solid-turquoise text-white py-3 rounded-full font-semibold hover:shadow-soft transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Packages CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-turquoise/10 via-coral/10 to-sand/10 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-4">
                  🤔 Don't See Your Perfect Package? 🤔
                </h3>
                <p className="text-xl text-deep-ocean/70 mb-8 leading-relaxed">
                  🎨 We specialize in creating custom experiences tailored to your dreams. Whether it's a romantic honeymoon, 
                  family adventure, or corporate retreat, we'll craft the perfect Lakshadweep experience just for you. ✨
                </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/50 rounded-2xl p-6">
                  <Heart className="h-8 w-8 text-coral mx-auto mb-3" />
                  <h4 className="font-semibold text-deep-ocean mb-2">Honeymoon Specials</h4>
                  <p className="text-sm text-deep-ocean/70">Romantic getaways with private experiences</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-6">
                  <Users className="h-8 w-8 text-turquoise mx-auto mb-3" />
                  <h4 className="font-semibold text-deep-ocean mb-2">Group Tours</h4>
                  <p className="text-sm text-deep-ocean/70">Perfect for families and friend groups</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-6">
                  <Clock className="h-8 w-8 text-sand mx-auto mb-3" />
                  <h4 className="font-semibold text-deep-ocean mb-2">Corporate Retreats</h4>
                  <p className="text-sm text-deep-ocean/70">Team building in paradise</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/918086003344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="solid-turquoise text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
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
        </div>
      </div>
    </section>
  );
};