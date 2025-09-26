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

        {/* Agatti Island Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
            <div className="text-3xl font-bold text-turquoise mb-2">36</div>
            <div className="text-deep-ocean font-medium">Total Islands in Lakshadweep</div>
            <div className="text-sm text-deep-ocean/60 mt-1">Only 10 inhabited</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
            <div className="text-3xl font-bold text-coral mb-2">8,000</div>
            <div className="text-deep-ocean font-medium">Population of Agatti</div>
            <div className="text-sm text-deep-ocean/60 mt-1">Friendly local community</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
            <div className="text-3xl font-bold text-sand mb-2">459 km²</div>
            <div className="text-deep-ocean font-medium">Total Area of Lakshadweep</div>
            <div className="text-sm text-deep-ocean/60 mt-1">Scattered across Arabian Sea</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
            <div className="text-3xl font-bold text-turquoise mb-2">1.5 hrs</div>
            <div className="text-deep-ocean font-medium">Flight from Kochi</div>
            <div className="text-sm text-deep-ocean/60 mt-1">Daily flights available</div>
          </div>
        </div>

        {/* Location & Geography */}
        <div className="bg-gradient-to-r from-turquoise/10 via-coral/10 to-sand/10 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-6">
              📍 Where is Agatti Island?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-deep-ocean mb-4 text-lg">🗺️ Location:</h4>
                <ul className="space-y-2 text-deep-ocean/80">
                  <li>• Located in the Arabian Sea, off the coast of Kerala</li>
                  <li>• Part of the Lakshadweep Union Territory</li>
                  <li>• Approximately 459 km west of Kochi</li>
                  <li>• Gateway island to Lakshadweep archipelago</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-deep-ocean mb-4 text-lg">🏝️ Geography:</h4>
                <ul className="space-y-2 text-deep-ocean/80">
                  <li>• Coral atoll with pristine lagoons</li>
                  <li>• Home to Agatti Airport - only airport in Lakshadweep</li>
                  <li>• Surrounded by crystal-clear turquoise waters</li>
                  <li>• Rich marine biodiversity and coral reefs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};