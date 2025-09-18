import React from 'react';
import { Mail, Phone, MapPin, Clock, Shield, Star, MessageCircle, Calendar, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us Directly',
      description: 'Speak with our local experts',
      action: 'Call Now',
      href: 'tel:8086003344',
      primary: true,
      available: '24/7 Support'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Quick responses & instant quotes',
      action: 'Start Chat',
      href: 'https://wa.me/918086003344',
      primary: true,
      available: 'Instant Response'
    },
    {
      icon: Mail,
      title: 'WhatsApp Quote',
      description: 'Detailed inquiries & custom packages',
      action: 'Get Quote',
      href: 'https://wa.me/918086003344',
      primary: false,
      available: 'Instant Response'
    },
    {
      icon: Calendar,
      title: 'Book Consultation',
      description: 'Free 30-min planning session',
      action: 'WhatsApp',
      href: 'https://wa.me/918086003344',
      primary: false,
      available: 'Free Consultation'
    }
  ];

  const trustIndicators = [
    { icon: Shield, text: 'Government Licensed', subtext: 'CIN: U79120LD2024PTC024410' },
    { icon: MapPin, text: 'Agatti Based', subtext: 'Local Island Experts' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-deep-ocean via-deep-ocean/95 to-turquoise/20 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-turquoise/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-coral/10 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sand/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4 fill-current" />
            <span>Ready to Start Your Adventure?</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Plan Your
            <span className="block text-turquoise">
              Dream Vacation
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our local experts are standing by to help you create the perfect Lakshadweep experience. 
            Get personalized recommendations, instant quotes, and expert advice.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-turquoise" />
                </div>
                <h3 className="font-semibold text-white mb-1">{indicator.text}</h3>
                <p className="text-white/60 text-sm">{indicator.subtext}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  method.primary 
                    ? 'solid-turquoise shadow-soft-lg hover:shadow-soft-lg' 
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-soft'
                }`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    method.primary ? 'bg-white/20' : 'bg-turquoise/20'
                  }`}>
                    <Icon className={`h-8 w-8 ${method.primary ? 'text-white' : 'text-turquoise'}`} />
                  </div>
                  <h3 className={`font-semibold mb-2 ${method.primary ? 'text-white' : 'text-white'}`}>
                    {method.title}
                  </h3>
                  <p className={`text-sm mb-4 ${method.primary ? 'text-white/80' : 'text-white/70'}`}>
                    {method.description}
                  </p>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    method.primary 
                      ? 'bg-white text-turquoise hover:bg-white/90' 
                      : 'bg-turquoise text-white hover:bg-turquoise/90'
                  }`}>
                    {method.action}
                    <Icon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className={`text-xs mt-2 ${method.primary ? 'text-white/60' : 'text-white/50'}`}>
                    {method.available}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-display text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-turquoise/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-turquoise" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Viator Travels</h4>
                  <p className="text-white/70">Agatti Island, Lakshadweep</p>
                  <p className="text-white/60 text-sm">Government Licensed Tour Operator</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-turquoise/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-turquoise" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Phone Numbers</h4>
                  <div className="space-y-1">
                    <a href="tel:8086003344" className="block text-white/70 hover:text-turquoise transition-colors">
                      +91 80860 03344 (Primary)
                    </a>
                    <a href="https://wa.me/918086003344" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-turquoise transition-colors">
                      WhatsApp: +91 80860 03344
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-turquoise/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-turquoise" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/918086003344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-turquoise transition-colors"
                  >
                    +91 80860 03344
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-soft-lg">
              <img 
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Agatti Island"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm text-deep-ocean p-6 rounded-2xl">
                  <h4 className="font-display text-xl font-bold mb-2">Agatti Island</h4>
                  <p className="text-deep-ocean/70 mb-3">Gateway to Lakshadweep Paradise</p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-turquoise" />
                    <span className="text-deep-ocean/80">Your adventure starts here</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book Your Paradise?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied travelers who've discovered the magic of Lakshadweep with us. 
              Your dream vacation is just one call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8086003344"
                className="solid-turquoise text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now: +91 80860 03344
              </a>
              <a 
                href="https://wa.me/918086003344"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-16 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-white mb-2">Viator Travels</h4>
              <p className="text-white/60 text-sm">Your trusted partner for Lakshadweep adventures</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Licensed & Insured</h4>
              <p className="text-white/60 text-sm">CIN: U79120LD2024PTC024410</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};