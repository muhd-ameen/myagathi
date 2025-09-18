import React from 'react';
import { MapPin, Shield, Users, Heart, Award, Clock, Star, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Happy Travelers', icon: Users },
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Paradise',
      description: 'We fell in love with Lakshadweep\'s untouched beauty and made it our mission to share this paradise with the world. Every tour is crafted with genuine passion and local expertise.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety First',
      description: 'Government-licensed and fully insured, we prioritize your safety above all. Our experienced team ensures every adventure is both thrilling and secure.'
    },
    {
      icon: MapPin,
      title: 'Local Island Experts',
      description: 'Born and raised in Agatti, our team knows every hidden cove, secret beach, and local story. We\'re not just tour operators – we\'re your island family.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-sand/5 to-turquoise/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise/10 to-coral/10 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4 fill-current" />
            <span>Your Island Adventure Specialists</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-ocean mb-6">
            Born from a
            <span className="block text-turquoise">Love for Paradise</span>
          </h2>
          <p className="text-xl text-deep-ocean/70 max-w-4xl mx-auto leading-relaxed">
            Myagathi isn't just a tour company – it's a dream born from our founder's first glimpse of Lakshadweep's crystal-clear waters. 
            What started as a personal passion has become a mission to share this untouched paradise with fellow travelers seeking authentic island experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-turquoise/10 to-coral/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-10 w-10 text-turquoise" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-2">{stat.number}</div>
                <p className="text-deep-ocean/70 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        {/* Story Section */}
        <div className="bg-gradient-to-r from-turquoise/10 via-coral/10 to-sand/10 rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-6">
              Our Story: From Dream to Reality
            </h3>
            <p className="text-lg text-deep-ocean/80 leading-relaxed mb-8">
              It all began with a single photograph – a glimpse of Bangaram Island's pristine beaches that captured our founder's heart. 
              That moment sparked a journey that led to establishing Myagathi, a company built on the belief that everyone deserves to experience 
              the magic of untouched paradise.
            </p>
            <p className="text-lg text-deep-ocean/80 leading-relaxed">
              Today, we're proud to be Lakshadweep's most trusted tour operator, having helped over 500 travelers create memories that last a lifetime. 
              But we're still that same passionate team, driven by the same dream – to share the beauty of our islands with the world.
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 solid-turquoise rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-deep-ocean">Myagathi Travels</h3>
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