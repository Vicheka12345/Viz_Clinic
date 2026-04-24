import React, { useState } from 'react';
import PageTemplate from '../Components/PageTemplate';
import { Link } from 'react-router-dom';
import { Brain, Heart, Activity, Stethoscope, Eye, Smile, ArrowRight, Check, Phone, Calendar } from 'lucide-react';
import doctorMale1 from '../images/doctor_male1.png';
import doctorFemale1 from '../images/doctor_female1.png';
import doctorMale2 from '../images/doctor_male2.png';
import doctorFemale2 from '../images/doctor_female2.png';
import doctorMale3 from '../images/doctor_male3.png';
import doctorFemale3 from '../images/doctor_female3.png';

const departments = [
  {
    id: 'neurology',
    label: 'Neurology',
    icon: Brain,
    color: 'bg-purple-600',
    image: 'https://i.pinimg.com/1200x/24/83/de/2483dec64055ddcf8baa5e2760543d48.jpg',
    head: 'បណ្ឌិត ចាន់ សុភា',
    headImg: doctorFemale1,
    desc: 'Our Neurology department specializes in the diagnosis and treatment of disorders affecting the brain, spinal cord, and nervous system. We use the most advanced neuroimaging and electrophysiology techniques.',
    services: ['Brain MRI & CT Scan', 'EEG Testing', 'Nerve Conduction Studies', 'Memory & Cognitive Assessment', 'Epilepsy Management', 'Stroke Rehabilitation'],
  },
  {
    id: 'cardiology',
    label: 'Cardiology',
    icon: Heart,
    color: 'bg-red-500',
    image: 'https://i.pinimg.com/1200x/77/ce/6f/77ce6ff077e2ef6e8e23837256141ba0.jpg',
    head: 'បណ្ឌិត សុខ វិចិត្រ',
    headImg: doctorMale1,
    desc: 'Our Cardiology department provides comprehensive heart care from preventive measures to complex interventional procedures, supported by state-of-the-art diagnostic equipment.',
    services: ['ECG & Echocardiography', 'Cardiac Catheterization', 'Coronary Angioplasty', 'Heart Failure Management', 'Pacemaker Implantation', 'Preventive Cardiology'],
  },
  {
    id: 'surgery',
    label: 'Surgery',
    icon: Activity,
    color: 'bg-blue-600',
    image: 'https://i.pinimg.com/1200x/36/b9/b6/36b9b6b9f82b4a9dc290f40c25dccebe.jpg',
    head: 'បណ្ឌិត គង់ វុទ្ធី',
    headImg: doctorMale2,
    desc: 'Our Surgery department performs a wide range of procedures using minimally invasive techniques and robotic-assisted surgery, ensuring faster recovery and better outcomes.',
    services: ['Minimally Invasive Surgery', 'Laparoscopic Procedures', 'Robotic Surgery', 'General Surgery', 'Bariatric Surgery', 'Emergency Surgery'],
  },
  {
    id: 'dental',
    label: 'Dental Care',
    icon: Smile,
    color: 'bg-teal-500',
    image: 'https://i.pinimg.com/736x/f7/41/66/f741662ca097c2fef48487d1c554e6bb.jpg',
    head: 'បណ្ឌិត សុខ ស្រីពេជ្រ',
    headImg: doctorFemale1,
    desc: 'Our Dental Care department provides comprehensive oral healthcare services, from routine cleanings to advanced cosmetic and restorative dentistry, using the latest dental technology.',
    services: ['Dental Cleaning & Exam', 'Teeth Whitening', 'Dental Implants', 'Orthodontics & Braces', 'Root Canal Therapy', 'Cosmetic Dentistry'],
  },
  {
    id: 'ophthalmology',
    label: 'Ophthalmology',
    icon: Eye,
    color: 'bg-cyan-600',
    image: 'https://i.pinimg.com/1200x/b4/f0/18/b4f018a97aa901277ec67478749837e2.jpg',
    head: 'បណ្ឌិត សៀង សុវណ្ណារី',
    headImg: doctorFemale2,
    desc: 'Our Ophthalmology department specializes in diagnosing and treating all eye conditions, from common refractive errors to complex retinal diseases and glaucoma.',
    services: ['Comprehensive Eye Exam', 'LASIK Surgery', 'Cataract Surgery', 'Glaucoma Treatment', 'Retinal Disorders', 'Pediatric Eye Care'],
  },
];

const DepartmentDetail = () => {
  const [active, setActive] = useState(departments[0]);

  return (
    <div className="bg-slate-50 min-h-screen font-roboto">
      <PageTemplate title="Departments" description="Detailed information about our specialized medical departments." isHome={false} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 text-center" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Our <span className="text-blue-600">Departments</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Explore our specialized medical departments, each staffed by world-class experts committed to exceptional care.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-wrap border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          {departments.map((dept) => {
            const Icon = dept.icon;
            const isActive = active.id === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setActive(dept)}
                className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-4 px-3 text-sm font-semibold transition-all duration-200 relative ${isActive ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-blue-50 hover:text-blue-600'}`}
              >
                <Icon size={16} />
                <span>{dept.label}</span>
                {isActive && <div className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-600 rotate-45 z-10" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Department Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: Info */}
          <div data-aos="fade-right">
            <div className={`inline-flex items-center gap-2 ${active.color} text-white text-xs font-bold px-4 py-2 rounded-full mb-6`}>
              <active.icon size={14} />
              {active.label} Department
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{active.label} Sciences Department</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">{active.desc}</p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {active.services.map((svc, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-blue-600" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{svc}</span>
                </div>
              ))}
            </div>

            {/* Head of Department */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex gap-5 items-center">
              <img src={active.headImg} alt={active.head} className="w-16 h-16 rounded-2xl object-cover" />
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1">Head of Department</p>
                <h4 className="text-slate-900 font-bold text-lg">{active.head}</h4>
                <p className="text-slate-400 text-sm">{active.label} Specialist</p>
              </div>
              <Link to="/DoctorDetail" className="ml-auto flex items-center gap-1 text-blue-600 text-sm font-semibold hover:text-blue-700">
                View Profile <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex gap-4 mt-8">
              <Link to="/Appointment" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                <Calendar size={16} /> Book Appointment
              </Link>
              <a href="tel:+15589554855" className="flex items-center gap-2 border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                <Phone size={16} /> Call Department
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div data-aos="fade-left">
            <div className="relative">
              <img
                src={active.image}
                alt={active.label}
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-3xl" />
              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[['500+', 'Procedures/Year'], ['99%', 'Success Rate'], ['15+', 'Specialists']].map(([val, label], i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-blue-600">{val}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Departments Cards */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">All Departments</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Each department is led by specialists with decades of experience delivering world-class care.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              return (
                <button
                  key={dept.id}
                  onClick={() => { setActive(dept); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="group text-left bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  <div className="h-44 overflow-hidden">
                    <img src={dept.image} alt={dept.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6 flex items-center gap-4">
                    <div className={`w-12 h-12 ${dept.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{dept.label}</h3>
                      <p className="text-slate-400 text-xs mt-0.5">{dept.services.length} services available</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentDetail;
