import React from 'react';
import { MapPin } from 'lucide-react';

export const About: React.FC = () => {

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-sand/5 to-turquoise/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise/10 to-coral/10 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 fill-current" />
            <span>Discover Agatti Island</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-ocean mb-6">
            What is
            <span className="block text-turquoise">Agatti Island?</span>
          </h2>
          <p className="text-xl text-deep-ocean/70 max-w-4xl mx-auto leading-relaxed">
            Agatti Island is the gateway to Lakshadweep's paradise. This stunning coral island offers pristine beaches, 
            crystal-clear lagoons, and authentic island experiences. From water sports to cultural immersion, 
            Agatti is your perfect introduction to the untouched beauty of Lakshadweep.
          </p>
        </div>


        {/* Agatti Activities & Specialties */}
        <div className="bg-gradient-to-r from-turquoise/10 via-coral/10 to-sand/10 rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-6">
              🏝️ Why Choose Agatti Island? 🏝️
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-deep-ocean mb-4 text-lg">🌟 Unique Activities:</h4>
                <ul className="space-y-2 text-deep-ocean/80">
                  <li>• 🏖️ Three pristine beaches with different vibes</li>
                  <li>• 🏛️ Rich cultural museum and heritage sites</li>
                  <li>• 🚣 Kayaking and glass-bottom boat tours</li>
                  <li>• 🤿 Snorkeling and scuba diving adventures</li>
                  <li>• 🏝️ Island hopping to nearby paradises</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-deep-ocean mb-4 text-lg">🎯 Specialties:</h4>
                <ul className="space-y-2 text-deep-ocean/80">
                  <li>• 🎣 Traditional fishing experiences</li>
                  <li>• 🍽️ Authentic local cuisine</li>
                  <li>• 🌅 360° island sightseeing tours</li>
                  <li>• 🎭 Native Dweep cultural immersion</li>
                  <li>• 👨‍🏫 Local expert guides</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-lg text-deep-ocean/80 leading-relaxed">
                Agatti Island offers the perfect blend of adventure, relaxation, and cultural discovery. 
                Whether you're seeking thrilling water sports, peaceful beach time, or authentic island experiences, 
                Agatti has something special for every traveler.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};