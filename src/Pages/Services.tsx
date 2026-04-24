import React from 'react';
import PageTemplate from '../Components/PageTemplate';
import { ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../Data/Service';
const Services = () => (
  <div className="min-h-screen font-roboto">
    <PageTemplate 
      title='Services' 
      description='Comprehensive healthcare services tailored to your needs.' 
      isHome={false} 
    />
    
    <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
      <div className='text-center mb-16' data-aos="fade-down">
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>
            Our <span className="text-blue-600">Specialized</span> Services
          </h1>
          <p className='text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed'>
            We offer a comprehensive range of medical services provided by highly qualified specialists. 
            Our focus is on delivering patient-centered care with the latest medical advancements.
          </p>
      </div>

      <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {servicesData.map((service, index) => (
          <section 
            key={service.id} 
            className='group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col'
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image Container */}
            <div className='relative h-64 overflow-hidden'>
              <img 
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                src={service.image} 
                alt={service.title} 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
            
            {/* Content Container */}
            <div className='p-8 flex flex-col flex-grow'>
              <h3 className='text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300'>
                {service.title}
              </h3>
              <p className='text-slate-500 text-[17px] leading-relaxed mb-8'>
                {service.description}
              </p>
              
              {/* Features List */}
              <div className='grid grid-cols-1 gap-4 mb-10'>
                {service.features.map((feature, idx) => (
                  <div key={idx} className='flex items-center gap-3'>
                    <div className='flex-shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center'>
                      <Check className='w-4 h-4 text-blue-600' />
                    </div>
                    <span className='text-slate-700 font-medium'>{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Action Button */}
              <div className='mt-auto'>
                <a href="#" className='block'>
                  <div className='flex items-center justify-between bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all duration-300 rounded-xl px-8 py-4 text-white font-bold shadow-md shadow-blue-200'>
                    <span>Learn More</span>
                    <ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
                  </div>
                </a>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  </div>
);

export default Services;