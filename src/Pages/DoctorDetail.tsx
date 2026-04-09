import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doctors } from '../Data/Service';
import { Link } from "react-router-dom";
import { 
  ArrowLeft, Star, MapPin, 
  Calendar, CheckCircle, Clock, Shield, Award 
} from 'lucide-react';

const DoctorDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Provide a fallback doctor locally or via the data list so the page never crashes
  const doctor = location.state?.doctor || doctors[0];

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  if (!doctor) return null;

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans pb-20">
      {/* BREADCRUMB HEADER */}
      <div className="bg-[#f8f9fa] py-8 px-6 lg:px-12 border-b border-gray-100 flex justify-center items-center mt-12 md:mt-20">
        <div className="flex items-center gap-3 text-sm font-medium">
          <Link to="/Doctor" className="text-blue-600 hover:text-blue-800 transition-colors">Doctor</Link>
          <span className="text-gray-300">/</span>
          <span className="text-slate-600">Doctors</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT SIDEBAR - CARD PROFILE */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-blue-900/5 border border-white/50 relative">
               <div className="absolute top-6 right-6 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 z-10">
                 <div className={`w-1.5 h-1.5 rounded-full ${doctor.status === 'online' ? 'bg-green-600 animate-pulse' : 'bg-orange-500'}`} />
                 {doctor.status === 'online' ? 'Available' : 'Away'}
               </div>
               
               <div className="w-40 h-40 mx-auto rounded-[2rem] overflow-hidden -mt-20 border-4 border-white shadow-lg bg-gray-100 mb-5 relative">
                 <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
               </div>

               <div className="text-center mb-6">
                 <h1 className="text-2xl font-bold text-slate-800 mb-1 leading-tight">{doctor.name}</h1>
                 <p className="text-blue-600 font-medium text-[15px]">{doctor.specialty}</p>
                 
                 <div className="flex items-center justify-center gap-1 mt-3 text-sm text-gray-500">
                   <Star className="text-amber-400 fill-amber-400" size={16} />
                   <span className="font-bold text-gray-800 ml-1">{doctor.rating}</span>
                   <span>({doctor.reviews} reviews)</span>
                 </div>
               </div>

               <hr className="border-gray-100 mb-6" />

               <div className="space-y-5 mb-8">
                 <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 shadow-sm">
                     <Award size={18} />
                   </div>
                   <div>
                     <p className="text-[11px] text-gray-400 font-[800] uppercase tracking-widest mb-0.5">Experience</p>
                     <p className="text-[15px] font-semibold text-gray-800">{doctor.experience} Years Active</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 shadow-sm">
                     <MapPin size={18} />
                   </div>
                   <div>
                     <p className="text-[11px] text-gray-400 font-[800] uppercase tracking-widest mb-0.5">Location</p>
                     <p className="text-[15px] font-semibold text-gray-800">New York Medical Center</p>
                   </div>
                 </div>
               </div>

               <button className="w-full bg-[#2563eb] hover:bg-blue-700 text-white py-4 rounded-[1.25rem] font-bold transition-all hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-0.5 flex justify-center items-center gap-2">
                 <Calendar size={18} />
                 Book Appointment
               </button>
            </div>
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
               <h2 className="text-2xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                 <Shield className="text-blue-600" size={24} />
                 About {doctor.name.split(' ').pop()}
               </h2>
               <p className="text-slate-500 leading-relaxed max-w-3xl mb-6 text-[15px]">
                 {doctor.name} is a highly respected specialist in {doctor.specialty} with over {doctor.experience} years of clinical experience. They are highly dedicated to providing comprehensive and compassionate care, leveraging the most advanced medical technologies available to ensure the best patient outcomes.
               </p>
               <p className="text-slate-500 leading-relaxed max-w-3xl text-[15px]">
                 Recognized for excellent diagnostic skills and patient communication, {doctor.name.split(' ').pop()} has successfully treated thousands of patients, receiving consistently outstanding feedback for their professional and empathetic approach to healthcare.
               </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
               <h2 className="text-xl font-bold text-slate-800 mb-6">Specialties & Expertise</h2>
               <div className="flex flex-wrap gap-3">
                 {['Advanced Diagnostics', 'Preventative Care', 'Patient Education', 'Surgical Operations', 'Emergency Response'].map((skill, index) => (
                   <span key={index} className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl text-[14.5px] font-medium text-slate-600">
                     <CheckCircle size={16} className="text-green-500" />
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
               <h2 className="text-xl font-bold text-slate-800 mb-6 focus-within flex items-center gap-2">
                 <Clock className="text-blue-600" size={22} />
                 Working Hours
               </h2>
               <div className="space-y-4 max-w-lg">
                 <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-slate-500 font-medium">Monday - Friday</span>
                    <span className="font-bold text-slate-700 bg-blue-50/50 px-3 py-1 rounded-lg border border-blue-100/50">08:00 AM - 05:00 PM</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-slate-500 font-medium">Saturday</span>
                    <span className="font-bold text-slate-700 bg-blue-50/50 px-3 py-1 rounded-lg border border-blue-100/50">09:00 AM - 02:00 PM</span>
                 </div>
                 <div className="flex justify-between items-center py-3">
                    <span className="text-slate-500 font-medium">Sunday</span>
                    <span className="font-bold text-red-500 bg-red-50 px-3 py-1 rounded-lg">Closed</span>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
