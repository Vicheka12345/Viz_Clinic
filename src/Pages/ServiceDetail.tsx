import React from 'react';
import PageTemplate from '../Components/PageTemplate';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Phone, Calendar, Star, Clock, Users, Shield, Heart, Activity, Brain } from 'lucide-react';

const relatedServices = [
  { name: 'Cardiology', icon: Heart, path: '/Services' },
  { name: 'Neurology', icon: Brain, path: '/Services' },
  { name: 'Orthopedics', icon: Activity, path: '/Services' },
  { name: 'Pediatrics', icon: Users, path: '/Services' },
];

const serviceFeatures = [
  { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock care from our dedicated specialist team.' },
  { icon: Shield, title: 'Certified Specialists', desc: 'Board-certified doctors with decades of experience.' },
  { icon: Star, title: 'Top-Rated Care', desc: 'Consistently rated 4.9/5 by our patients nationwide.' },
  { icon: Users, title: 'Patient-Centered', desc: 'Personalized treatment plans tailored to your unique needs.' },
];

const ServiceDetail = () => (
  <div className="bg-slate-50 min-h-screen font-roboto">
    <PageTemplate title="Service Detail" description="In-depth overview of our specialized healthcare services." isHome={false} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2" data-aos="fade-right">
          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-10 h-80">
            <img
              src="https://i.pinimg.com/1200x/54/88/2d/54882d7246e69020a5794e082ada22ee.jpg"
              alt="Cardiology Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">Specialized Care</span>
              <h1 className="text-white text-3xl font-bold mt-2">Advanced Cardiology</h1>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Service</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Our Advanced Cardiology department offers comprehensive heart care with the latest diagnostic technologies and evidence-based treatments. We provide a full spectrum of cardiac services—from preventive cardiology to complex interventional procedures.
            </p>
            <p className="text-slate-500 leading-relaxed mb-6">
              Our multidisciplinary team of cardiologists, cardiac surgeons, and support staff work collaboratively to ensure that every patient receives personalized, compassionate care tailored to their specific condition and lifestyle.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['Electrocardiography (ECG)', 'Echocardiography', 'Cardiac Catheterization', 'Coronary Angioplasty', 'Heart Failure Management', 'Pacemaker Implantation', 'Cardiac Rehabilitation', 'Preventive Cardiology'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-blue-600" strokeWidth={3} />
                  </div>
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">How It Works</h3>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Initial Consultation', desc: 'Schedule an appointment with one of our cardiologists for a comprehensive evaluation.' },
                { step: '02', title: 'Diagnostic Testing', desc: 'We perform state-of-the-art tests to accurately diagnose your condition.' },
                { step: '03', title: 'Treatment Plan', desc: 'Our team develops a personalized treatment plan based on your specific needs.' },
                { step: '04', title: 'Ongoing Care', desc: 'We provide continuous monitoring and follow-up to ensure the best outcomes.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{step.step}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {serviceFeatures.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <f.icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">{f.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6" data-aos="fade-left">
          {/* Book CTA */}
          <div className="bg-blue-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Book This Service</h3>
            <p className="text-blue-100 text-sm mb-6">Schedule your consultation with our specialists today.</p>
            <Link to="/Appointment" className="flex items-center justify-center gap-2 bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full">
              <Calendar size={16} /> Book Appointment
            </Link>
            <a href="tel:+15589554855" className="flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors text-sm w-full mt-3">
              <Phone size={16} /> Call Us Now
            </a>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-5">Department Stats</h4>
            {[
              { label: 'Patients Treated', val: '2,500+' },
              { label: 'Success Rate', val: '99.2%' },
              { label: 'Expert Doctors', val: '12' },
              { label: 'Years of Experience', val: '25+' },
            ].map((s, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                <span className="text-slate-500 text-sm">{s.label}</span>
                <span className="font-bold text-blue-600">{s.val}</span>
              </div>
            ))}
          </div>

          {/* Related Services */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-5">Related Services</h4>
            <div className="space-y-2">
              {relatedServices.map((s, i) => (
                <Link key={i} to={s.path} className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <s.icon size={15} className="text-blue-600" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{s.name}</span>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceDetail;
