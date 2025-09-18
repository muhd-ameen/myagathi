import React, { useState } from 'react';
import { X, Camera, Heart, MapPin, Star } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Lakshadweep lagoon aerial view',
      category: 'landscapes',
      title: 'Aerial Paradise',
      location: 'Agatti Lagoon',
      featured: true
    },
    {
      src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Traditional boat in Agatti',
      category: 'culture',
      title: 'Traditional Fishing',
      location: 'Agatti Island',
      featured: false
    },
    {
      src: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Crystal clear waters Bangaram',
      category: 'beaches',
      title: 'Crystal Clear Waters',
      location: 'Bangaram Island',
      featured: true
    },
    {
      src: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Kavaratti beach',
      category: 'beaches',
      title: 'Pristine Shoreline',
      location: 'Kavaratti Island',
      featured: false
    },
    {
      src: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Beach villa Lakshadweep',
      category: 'accommodation',
      title: 'Beachfront Luxury',
      location: 'Resort Villa',
      featured: true
    },
    {
      src: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Snorkeling in Lakshadweep',
      category: 'activities',
      title: 'Underwater Adventure',
      location: 'Coral Reefs',
      featured: false
    },
    {
      src: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Sunset over Lakshadweep',
      category: 'landscapes',
      title: 'Golden Hour',
      location: 'Thinnakara Island',
      featured: true
    },
    {
      src: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Speedboat transfer',
      category: 'activities',
      title: 'Island Hopping',
      location: 'Inter-island Transfer',
      featured: false
    },
    {
      src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Local cuisine',
      category: 'culture',
      title: 'Local Delicacies',
      location: 'Traditional Kitchen',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos', count: galleryImages.length },
    { id: 'landscapes', label: 'Landscapes', count: galleryImages.filter(img => img.category === 'landscapes').length },
    { id: 'beaches', label: 'Beaches', count: galleryImages.filter(img => img.category === 'beaches').length },
    { id: 'activities', label: 'Activities', count: galleryImages.filter(img => img.category === 'activities').length },
    { id: 'accommodation', label: 'Accommodation', count: galleryImages.filter(img => img.category === 'accommodation').length },
    { id: 'culture', label: 'Culture', count: galleryImages.filter(img => img.category === 'culture').length }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-white via-sand/5 to-turquoise/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise/10 to-coral/10 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Camera className="h-4 w-4 fill-current" />
            <span>📸 Photo Gallery</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-ocean mb-6">
            Discover Lakshadweep
            <span className="block text-turquoise">Through Our Lens</span>
          </h2>
          <p className="text-xl text-deep-ocean/70 max-w-3xl mx-auto leading-relaxed">
            Every image tells a story of untouched beauty, crystal-clear waters, and unforgettable moments. 
            Let these photos inspire your next adventure to paradise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-turquoise to-coral text-white shadow-soft'
                  : 'bg-white text-deep-ocean hover:bg-turquoise/10 hover:text-turquoise shadow-sm'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-500 transform hover:-translate-y-1 ${
                image.featured ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className={`relative ${image.featured ? 'aspect-[4/3]' : 'aspect-square'}`}>
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Featured Badge */}
                {image.featured && (
                  <div className="absolute top-3 left-3 solid-coral text-white px-2 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <MapPin className="h-3 w-3" />
                    <span>{image.location}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-turquoise/10 via-coral/10 to-sand/10 rounded-3xl p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-ocean mb-4">
              Ready to Create Your Own Memories?
            </h3>
            <p className="text-xl text-deep-ocean/70 mb-8 max-w-2xl mx-auto">
              These photos are just a glimpse of what awaits you. Book your Lakshadweep adventure today and capture your own paradise moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918086003344"
                target="_blank"
                rel="noopener noreferrer"
                className="solid-turquoise text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-soft-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Your Adventure
              </a>
              <a 
                href="https://wa.me/918086003344"
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-deep-ocean px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="flex flex-col items-center">
                <img 
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg mb-4"
                />
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
                  <div className="flex items-center justify-center gap-2 text-white/80">
                    <MapPin className="h-4 w-4" />
                    <span>{filteredImages[selectedImage].location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};