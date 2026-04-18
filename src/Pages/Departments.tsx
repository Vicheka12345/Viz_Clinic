import React from 'react';
import care from "../images/care.webp"
import PageTemplate from '../Components/PageTemplate';
import { Brain, Activity, Stethoscope, FileText } from 'lucide-react';

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
            <h2 className='text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 font-poppins'>
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
    </div>
  );
};

export default Departments;
