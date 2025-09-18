import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Phone, Mail } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do you handle all permits and paperwork?',
      answer: 'Absolutely! We take care of all entry permits, heritage fees, and necessary documentation. As a government-licensed tour operator, we ensure all paperwork is properly handled before your arrival. This includes Lakshadweep entry permits, accommodation permits, and any special activity permissions.',
      category: 'Planning'
    },
    {
      question: 'What\'s included in your tour packages?',
      answer: 'Our packages include accommodation in handpicked beachfront properties, all meals featuring local delicacies, private speedboat transfers between islands, professional guides, water sports equipment, and all permits. We also provide 24/7 local support throughout your stay.',
      category: 'Packages'
    },
    {
      question: 'Are flights to Lakshadweep included?',
      answer: 'Flights are not included in our packages as they need to be booked separately. You\'ll need to fly to Agatti Airport from Kochi (Kochi-Agatti flights are available daily). We handle all transfers from the airport to your accommodation and between islands.',
      category: 'Travel'
    },
    {
      question: 'What water activities can I enjoy?',
      answer: 'Lakshadweep offers incredible water activities including snorkeling in pristine coral reefs, glass-bottom boat tours, kayaking through lagoons, and optional scuba diving. We provide professional equipment and certified instructors for all activities. The crystal-clear waters offer visibility up to 30 meters!',
      category: 'Activities'
    },
    {
      question: 'When is the best time to visit Lakshadweep?',
      answer: 'The best time to visit is from October to March when the weather is perfect with calm seas, clear skies, and comfortable temperatures (25-32°C). The monsoon season (June-September) is not recommended due to rough seas and limited activities.',
      category: 'Planning'
    },
    {
      question: 'How do I reach Agatti Island?',
      answer: 'Agatti is accessible by daily flights from Kochi (Kochi International Airport). The flight takes about 1.5 hours and offers stunning aerial views of the islands. We provide seamless airport transfers and can help you coordinate your flight bookings.',
      category: 'Travel'
    },
    {
      question: 'What should I pack for my Lakshadweep trip?',
      answer: 'Pack light, breathable clothing, swimwear, sunscreen (reef-safe), sunglasses, a hat, and comfortable sandals. Don\'t forget your camera for underwater photography! We provide most water sports equipment, but you can bring your own snorkeling gear if preferred.',
      category: 'Planning'
    },
    {
      question: 'Is Lakshadweep safe for families with children?',
      answer: 'Absolutely! Lakshadweep is very family-friendly with calm lagoons perfect for children. We offer family packages with shallow water activities, beach games, and child-safe accommodations. Our experienced guides ensure safety for all age groups.',
      category: 'Safety'
    },
    {
      question: 'Can I customize my itinerary?',
      answer: 'Yes! We specialize in creating custom experiences. Whether you want a romantic honeymoon, family adventure, or group tour, we\'ll design the perfect itinerary. Just let us know your preferences, budget, and interests, and we\'ll craft your dream vacation.',
      category: 'Customization'
    },
    {
      question: 'What\'s your cancellation policy?',
      answer: 'We offer flexible cancellation policies. Full refund for cancellations 30+ days before travel, 75% refund for 15-30 days, and 50% refund for 7-15 days. We also provide travel insurance options to protect your investment.',
      category: 'Booking'
    }
  ];

  const categories = ['All', 'Planning', 'Packages', 'Travel', 'Activities', 'Safety', 'Customization', 'Booking'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white via-sand/5 to-turquoise/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise/10 to-coral/10 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4 fill-current" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-ocean mb-6">
            Frequently Asked
            <span className="block text-turquoise">Questions</span>
          </h2>
          <p className="text-xl text-deep-ocean/70 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about planning your perfect Lakshadweep adventure. 
            Can't find what you're looking for? We're here to help!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-turquoise to-coral text-white shadow-soft'
                  : 'bg-white text-deep-ocean hover:bg-turquoise/10 hover:text-turquoise shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gradient-to-r hover:from-turquoise/5 hover:to-coral/5 transition-all duration-300"
              >
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gradient-to-r from-turquoise/10 to-coral/10 text-turquoise px-3 py-1 rounded-full text-xs font-medium">
                      {faq.category}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-deep-ocean">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  {openFaq === index ? (
                    <div className="solid-turquoise text-white p-2 rounded-full">
                      <Minus className="h-5 w-5" />
                    </div>
                  ) : (
                    <div className="bg-gray-100 text-deep-ocean p-2 rounded-full hover:bg-turquoise/10 transition-colors">
                      <Plus className="h-5 w-5" />
                    </div>
                  )}
                </div>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-deep-ocean/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-turquoise/10 via-coral/10 to-sand/10 rounded-3xl p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-deep-ocean/70 mb-8 max-w-2xl mx-auto">
              Our local experts are here to help you plan the perfect Lakshadweep adventure. 
              Get personalized advice and answers to all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918086003344?text=Hi! I have questions about your Lakshadweep tours. Can you help me with more information?"
                target="_blank"
                rel="noopener noreferrer"
                className="solid-turquoise text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                WhatsApp Us
              </a>
              <a 
                href="https://wa.me/918086003344?text=Hi! I'd like to get a quote for my Lakshadweep trip. Can you provide pricing details?"
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-deep-ocean px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};