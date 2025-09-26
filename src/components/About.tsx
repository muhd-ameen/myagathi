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



      </div>
    </section>
  );
};