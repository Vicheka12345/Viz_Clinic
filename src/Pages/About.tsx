import React from 'react';
import { logos, values,stats } from '../Data/Data_about';
import PageTemplate from '../Components/PageTemplate';
import galleryOpRoom from '../images/gallery_op_room.png';
import doctorImage from '../images/doctor_female1.png';
const About = () =><div>
  <div className='text-center py-6 px-3 max-w-4xl mx-auto'>
    <h1 className='text-4xl md:text-5xl font-bold text-[#003366] mb-6'>About</h1>
    <p className='text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto'>
      Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas 
      consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. 
      Quasi ratione sint. Sit quaerat ipsum dolorem.
    </p>
  </div>
  <PageTemplate 
    title='About' 
    description='Book your table and enjoy the best culinary experience.' 
  />
  <div className="py-6 px-3 font-sans">
      {/* Top Section: Content & Statistics */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start mb-24">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl text-[#003366] font-light leading-tight">
            Compassionate Care for <br /> Every Family
          </h2>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              For over two decades, we have been dedicated to providing exceptional 
              healthcare services to our community. Our commitment goes beyond 
              medical treatment—we believe in building lasting relationships with 
              our patients and their families.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-blue-50/50 p-6 rounded-xl flex-1 min-w-[120px] text-center">
                <div className="text-3xl text-blue-600 font-light mb-1">{stat.value}</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>


        {/* Overlapping Images Container */}
        <div className="lg:w-1/2 relative">
          <img 
            src={galleryOpRoom}
            alt="Laboratory" 
            className="rounded-3xl shadow-xl w-full"
          />
          <div className="absolute -bottom-10 -right-6 w-48 h-48 border-8 border-white rounded-full overflow-hidden shadow-2xl hidden md:block">
            <img 
              src={doctorImage}
              alt="Doctor" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto text-center mb-20 py-5">
        <h2 className="text-3xl text-[#003366] font-semibold mb-4">Our Core Values</h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-16">
          These principles guide everything we do in our commitment to exceptional healthcare
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {values.map((v, i) => (
            <div key={i} className="group flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-gray-50">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-blue-600">
                <v.icon className="text-blue-600 transition-colors duration-300 group-hover:text-white" size={24} />
              </div>
              <h4 className="text-[#003366] font-semibold mb-3">{v.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="max-w-6xl mx-auto bg-blue-50/30 rounded-3xl p-5 text-center">
        <h2 className="text-2xl text-[#003366] font-light mb-2">Accreditations & Certifications</h2>
        <p className="text-xs mb-12">
          Recognized by leading healthcare organizations for our commitment to quality care
        </p>
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 ">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="Partner" className="h-6 md:h-8 object-coverl" />
          ))}
        </div>
      </section>
    </div>
</div>

export default About;
