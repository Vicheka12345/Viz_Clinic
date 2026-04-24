import React from 'react';
import care from "../images/care.webp"
import PageTemplate from '../Components/PageTemplate';
import { Brain, Activity, Stethoscope, FileText, Heart, ChevronRight } from 'lucide-react';

const Departments = () => {
  const [activeDept, setActiveDept] = React.useState('Neurology');
  const departments = ['Neurology', 'Surgery', 'Dental Care', 'Ophthalmology', 'Cardiology'];

  return (
    <div className=''>
      <PageTemplate 
        title='Departments' 
        description='Explore our various medical departments and specialized care.' 
        isHome={false} 
      />
      
      <div className='max-w-7xl mx-auto px-4 mt-8'>
        <article className='flex flex-col sm:flex-row w-full border border-[#f5f5f6]  overflow-hidden shadow-sm gap-2'>
          {departments.map((dept) => (
            <div
              key={dept}
              onMouseEnter={() => setActiveDept(dept)}
              className={` flex-1 py-4 sm:py-8 px-2 text-center cursor-pointer transition-all duration-300 font-bold text-sm sm:text-base relative flex items-center justify-center
                ${activeDept === dept 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-blue-600'
                }`}
            >
              {dept}
              {activeDept === dept && (
                <div className='hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-blue-600 rotate-45 z-10' />
              )}
            </div>
          ))}
        </article>
      </div>
      {/* Neurological Sciences Department Detail Section */}
      <section className='max-w-7xl mx-auto px-4 py-20'>
        <div className='flex flex-col lg:flex-row gap-16 items-start'>
          
          {/* Left Content Area - set to order-2 on mobile, order-1 on desktop */}
          <div className='lg:w-2/3 order-2 lg:order-1'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 font-roboto'>
              {activeDept} Sciences Department
            </h2>
            <p className='text-gray-500 text-lg leading-relaxed mb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-7'>
              {/* Service 1 */}
              <div className='flex gap-5 items-start p-6 rounded-2xl border border-transparent hover:bg-blue-50/50 hover:border-blue-100 transition-all duration-300 cursor-default'>
                <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200'>
                  <Brain size={28} />
                </div>
                <div>
                  <h4 className='text-indent-2 font-bold text-blue-950 uppercase tracking-wide mb-2'>Brain Monitoring</h4>
                  <p className='text-gray-500 text-sm leading-relaxed'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                </div>
              </div>

              {/* Service 2 */}
              <div className='flex gap-5 items-start p-6 rounded-2xl border border-transparent hover:bg-blue-50/50 hover:border-blue-100 transition-all duration-300 cursor-default'>
                <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200'>
                  <Activity size={28} />
                </div>
                <div>
                  <h4 className='font-bold text-blue-950 uppercase tracking-wide mb-2'>EEG Testing</h4>
                  <p className='text-gray-500 text-sm leading-relaxed'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                </div>
              </div>

              {/* Service 3 */}
              <div className='flex gap-5 items-start p-6 rounded-2xl border border-transparent hover:bg-blue-50/50 hover:border-blue-100 transition-all duration-300 cursor-default'>
                <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200'>
                  <Stethoscope size={28} />
                </div>
                <div>
                  <h4 className='font-bold text-blue-950 uppercase tracking-wide mb-2'>Neurological Exam</h4>
                  <p className='text-gray-500 text-sm leading-relaxed'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                </div>
              </div>

              {/* Service 4 */}
              <div className='flex gap-5 items-start p-6 rounded-2xl border border-transparent hover:bg-blue-50/50 hover:border-blue-100 transition-all duration-300 cursor-default'>
                <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200'>
                  <FileText size={28} />
                </div>
                <div>
                  <h4 className='font-bold text-blue-950 uppercase tracking-wide mb-2'>Treatment Plans</h4>
                  <p className='text-gray-500 text-sm leading-relaxed'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Area - set to order-1 on mobile, order-2 on desktop */}
          <div className='lg:w-1/3 w-full order-1 lg:order-2 flex justify-center'>
            <div className='relative w-full max-w-sm lg:max-w-none'>
              <img 
                className='rounded-3xl shadow-2xl w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover' 
                src={care} 
                alt="Neurological examination" 
              />
            </div>
          </div>

        </div>
      </section>
      {/* box-content */}
      <section className='bg-gray-50 py-20 font-roboto'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Cardiology Card */}
            <div className='group bg-white rounded-[1rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full'>
              <div className='relative h-64 overflow-hidden'>
                <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' src={care} alt="Cardiology" />
                <div className='absolute top-6 right-6 w-16 h-16 border border-white group-hover:bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-xl transform group-hover:rotate-6 transition-all duration-500'>
                  <Heart size={32} fill="currentColor" fillOpacity={0.2} />
                </div>
              </div>
              <div className='p-8 flex flex-col flex-grow'>
                <h3 className='text-2xl font-bold text-blue-950 mb-4 '>Cardiology</h3>
                <p className='text-gray-500 leading-relaxed mb-6 text-sm flex-grow'>
                  Comprehensive heart care with advanced diagnostic tools and expert cardiologists dedicated to your cardiovascular health.
                </p>
                <a className='inline-flex items-center text-blue-600 font-bold group/link hover:text-blue-700 transition-colors' href="#">
                  Learn More 
                  <ChevronRight className='ml-1 group-hover/link:translate-x-1 transition-transform' size={18} />
                </a>
              </div>
            </div>

            {/* Neurology Card */}
            <div className='group bg-white rounded-[1rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full'>
              <div className='relative h-64 overflow-hidden'>
                <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' src={care} alt="Neurology" />
                <div className='absolute top-6 right-6 w-16 h-16 border border-white group-hover:bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-xl transform group-hover:rotate-6 transition-all duration-500'>
                  <Brain size={32} />
                </div>
              </div>
              <div className='p-8 flex flex-col flex-grow'>
                <h3 className='text-2xl font-bold text-blue-950 mb-4 font-roboto'>Neurology</h3>
                <p className='text-gray-500 leading-relaxed mb-6 text-sm flex-grow'>
                  Expert care for complex neurological conditions, utilizing cutting-edge technology for brain and nervous system health.
                </p>
                <a className='inline-flex items-center text-blue-600 font-bold group/link hover:text-blue-700 transition-colors' href="#">
                  Learn More 
                  <ChevronRight className='ml-1 group-hover/link:translate-x-1 transition-transform' size={18} />
                </a>
              </div>
            </div>

            {/* Surgery Card */}
            <div className='group bg-white rounded-[1rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full'>
              <div className='relative h-64 overflow-hidden'>
                <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' src={care} alt="Surgery" />
                <div className='absolute top-6 right-6 w-16 h-16 border border-white group-hover:bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-xl transform group-hover:rotate-6 transition-all duration-500'>
                  <Stethoscope size={32} />
                </div>
              </div>
              <div className='p-8 flex flex-col flex-grow'>
                <h3 className='text-2xl font-bold text-blue-950 mb-4 font-roboto'>Surgery</h3>
                <p className='text-gray-500 leading-relaxed mb-6 text-sm flex-grow'>
                  Advanced surgical procedures performed by world-class specialists in our state-of-the-art operating facilities.
                </p>
                <a className='inline-flex items-center text-blue-600 font-bold group/link hover:text-blue-700 transition-colors' href="#">
                  Learn More 
                  <ChevronRight className='ml-1 group-hover/link:translate-x-1 transition-transform' size={18} />
                </a>
              </div>
            </div>

           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
