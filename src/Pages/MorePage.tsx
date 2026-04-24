import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutGrid, Calendar, MessageSquare, HelpCircle, Image, User,
  FileText, Lock, AlertTriangle, ChevronRight, Home
} from 'lucide-react';

const pages = [
  { label: 'Department Detail', path: '/DepartmentDetail', icon: LayoutGrid, desc: 'Detailed view of each medical department', color: 'bg-blue-50 text-blue-600' },
  { label: 'Service Detail', path: '/ServiceDetail', icon: FileText, desc: 'In-depth overview of specialized services', color: 'bg-purple-50 text-purple-600' },
  { label: 'Appointment', path: '/Appointment', icon: Calendar, desc: 'Book an appointment with our specialists', color: 'bg-green-50 text-green-600' },
  { label: 'Testimonials', path: '/Testimonials', icon: MessageSquare, desc: 'Read what our patients say about us', color: 'bg-yellow-50 text-yellow-600' },
  { label: 'FAQ', path: '/FAQ', icon: HelpCircle, desc: 'Answers to frequently asked questions', color: 'bg-orange-50 text-orange-600' },
  { label: 'Gallery', path: '/Gallery', icon: Image, desc: 'Visual tour of our facilities and care', color: 'bg-pink-50 text-pink-600' },
  { label: 'Doctor Detail', path: '/DoctorDetail', icon: User, desc: 'Complete doctor profile and specialties', color: 'bg-indigo-50 text-indigo-600' },
  { label: 'Terms & Conditions', path: '/Term', icon: FileText, desc: 'Terms of service for using our platform', color: 'bg-teal-50 text-teal-600' },
  { label: 'Privacy Policy', path: '/Privacy', icon: Lock, desc: 'How we protect your personal information', color: 'bg-cyan-50 text-cyan-600' },
  { label: '404 Page', path: '/404', icon: AlertTriangle, desc: 'Custom error page for not-found routes', color: 'bg-red-50 text-red-500' },
];

const MorePage = () => (
  <div className="bg-slate-50 min-h-screen font-roboto py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
          More <span className="text-blue-600">Pages</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Explore all the additional pages and features available in VIZ Clinic.
        </p>
      </div>

      {/* Page Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {pages.map((page, idx) => (
          <Link
            key={page.label}
            to={page.path}
            className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex items-start gap-4"
            data-aos="fade-up"
            data-aos-delay={idx * 50}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${page.color}`}>
              <page.icon size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">{page.label}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{page.desc}</p>
            </div>
            <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
          </Link>
        ))}
      </div>

      {/* Back Home */}
      <div className="text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-200"
        >
          <Home size={18} /> Back to Home
        </Link>
      </div>
    </div>
  </div>
);

export default MorePage;
