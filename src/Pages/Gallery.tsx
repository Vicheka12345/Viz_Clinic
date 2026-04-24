import React, { useState } from 'react';
import PageTemplate from '../Components/PageTemplate';
import { X, ZoomIn } from 'lucide-react';

import galleryOpRoom from '../images/gallery_op_room.png';
import excellenceImg from '../images/Excellence-in-Medical.png';
import medicineImg from '../images/Medicine.png';
import careImg from '../images/care.webp';
import imageImg from '../images/image.png';
import cardiologyImg from '../images/cardiology_doctor.png';

const galleryImages = [
  { src: galleryOpRoom, caption: 'Modern Operating Room', category: 'Facilities' },
  { src: excellenceImg, caption: 'Advanced Medical Care', category: 'Equipment' },
  { src: imageImg, caption: 'Patient Recovery Ward', category: 'Facilities' },
  { src: careImg, caption: 'Pediatric Care Unit', category: 'Departments' },
  { src: cardiologyImg, caption: 'Cardiology Department', category: 'Departments' },
  { src: medicineImg, caption: 'Diagnostic Laboratory', category: 'Equipment' },
];

const categories = ['All', 'Facilities', 'Equipment', 'Departments', 'Services'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen font-roboto">
      <PageTemplate title="Gallery" description="A visual tour of our world-class facilities and care." isHome={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            Our <span className="text-blue-600">Gallery</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Take a virtual tour through our state-of-the-art facilities and see the environment where we deliver excellence in healthcare.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-[4/3]"
              onClick={() => setLightbox(galleryImages.indexOf(img))}
              data-aos="fade-up"
              data-aos-delay={idx * 60}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-2.5 py-1 bg-blue-600 text-white text-xs rounded-full font-semibold mb-2">{img.category}</span>
                <p className="text-white font-bold">{img.caption}</p>
              </div>
              <div className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={16} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[500] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors" onClick={() => setLightbox(null)}>
            <X size={20} />
          </button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].caption} className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <p className="text-white text-center mt-4 font-medium">{galleryImages[lightbox].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
