import React from 'react';
import { MapPin, Shield, Heart, CheckCircle } from 'lucide-react';

export const CompanyStory: React.FC = () => {

  const values = [
    {
      icon: Heart,
      title: '🏖️ Pristine Beaches & Lagoons',
      description: 'Agatti boasts three stunning beaches - Lagoon Beach, Andam Beach, and Moloka Beach. Each offers unique experiences from calm swimming to hidden gems perfect for photography.'
    },
    {
      icon: Shield,
      title: '🤿 World-Class Water Sports',
      description: 'From snorkeling and scuba diving to kayaking and glass-bottom boating, Agatti\'s crystal-clear waters offer unforgettable underwater adventures for all skill levels.'
    },
    {
      icon: MapPin,
      title: '🎭 Rich Cultural Heritage',
      description: 'Experience authentic Lakshadweep culture through local museums, traditional fishing, native cuisine, and cultural activities that connect you with the island\'s soul.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-sand/5 to-turquoise/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Story & Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise/10 to-coral/10 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 fill-current" />
              <span>Your Island Adventure Specialists</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-6">
              Born from a
              <span className="block text-turquoise">Love for Paradise</span>
            </h3>
            <p className="text-xl text-deep-ocean/70 max-w-4xl mx-auto leading-relaxed">
              Viator isn't just a tour company – it's a dream born from our founder's first glimpse of Lakshadweep's crystal-clear waters. 
              What started as a personal passion has become a mission to share this untouched paradise with fellow travelers seeking authentic island experiences.
            </p>
          </div>


          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-turquoise/10 to-coral/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-turquoise" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-deep-ocean mb-4">{value.title}</h3>
                  <p className="text-deep-ocean/70 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 solid-turquoise rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-deep-ocean">Viator Travels</h3>
          </div>
          <p className="text-deep-ocean/80 text-lg mb-4">
            <strong>Government Licensed Tour Operator</strong> - Your trusted partner for Lakshadweep adventures
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-deep-ocean/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-turquoise" />
              <span>CIN: U79120LD2024PTC024410</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-turquoise" />
              <span>Fully Insured & Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-turquoise" />
              <span>Agatti Based Operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
