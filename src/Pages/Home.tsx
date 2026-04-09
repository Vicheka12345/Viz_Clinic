import { useEffect, useState } from "react";
import herodoctor from "../images/image.png";
import medicine from "../images/Medicine.png";
import exerlance_medical from "../images/Excellence-in-Medical.png"
import care from "../images/care.webp";
import cardiologyDoctor from "../images/cardiology_doctor.png";
import { Link } from "react-router-dom";
import { data_services, services, doctors,feature } from '../Data/Service';
import {
  Star,
  BookCheck,
  PhoneForwarded,
  Play,
  Check,
  ArrowRight,
  HeartPulse,
  ShieldPlus,
  Users,
  Activity,
  Phone,
  SquarePlus,
  Bandage,
  CheckCircle,
  Heart,
  User,
  Search,
  Award
} from "lucide-react";

export const DoctorCard = ({ doctor }: { doctor: any }) => (
  <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
    <div className="flex gap-4 mb-4">
      {/* Profile Image with Status Indicator */}
      <div className="relative">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-20 h-20 rounded-2xl object-cover bg-gray-100"
        />
        <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
          doctor.status === 'online' ? 'bg-green-500' : 
          doctor.status === 'away' ? 'bg-orange-400' : 'bg-gray-400'
        }`} />
      </div>

      {/* Doctor Info */}
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-slate-800">{doctor.name}</h3>
        <span className="inline-block mt-1 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-lg w-fit">
          {doctor.specialty}
        </span>
        <div className="flex items-center gap-1 mt-2 text-gray-400 text-sm">
          <Award size={14} className="text-blue-500" />
          <span>{doctor.experience} years experience</span>
        </div>
      </div>
    </div>

    {/* Ratings */}
    <div className="flex items-center gap-2 mb-6">
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill={i < Math.floor(doctor.rating) ? "currentColor" : "none"} />
        ))}
      </div>
      <span className="font-bold text-slate-800 ml-1">{doctor.rating}</span>
      <span className="text-gray-400 text-sm">({doctor.reviews} reviews)</span>
    </div>

    {/* Actions */}
    <div className="flex gap-3 mt-auto">
      <Link to="/DoctorDetail" state={{ doctor }} className="flex-1 py-3 px-4 flex items-center justify-center border border-gray-200 rounded-xl text-slate-600 font-medium hover:bg-gray-50 transition-colors text-sm">
        View Details
      </Link>
      <button className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm">
        {doctor.actionType === 'book' ? 'Book Now' : 'Schedule'}
      </button>
    </div>
  </div>
);

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const fade = (delay = "delay-0") =>
    `transition-all duration-700 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
  

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100/40 to-slate-50 overflow-hidden relative">
      {/* BG blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* HERO GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-8 md:px-16 pb-16 pt-24 lg:pt-12">
        {/* LEFT */}
        <div>
          {/* Badges */}
          <div className={`flex flex-wrap gap-3 mb-7 ${fade()}`}>
            {[
              ["🛡️", "Accredited"],
              ["🕐", "24/7 Emergency"],
              ["⭐", "4.9/5 Rating"],
            ].map(([icon, label]) => (
              <span
                key={label}
                className="flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-100 text-slate-600 text-xs font-medium px-4 py-2 rounded-full shadow-sm"
              >
                <span>{icon}</span>
                {label}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1
            className={`text-3xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight mb-5 ${fade("delay-100")}`}
          >
            Excellence in{" "}
            <span className="text-blue-600 underline decoration-blue-300 underline-offset-4">
              Healthcare
            </span>{" "}
            With Compassionate Care
          </h1>

          {/* Description */}
          <p
            className={`text-slate-500 text-base leading-relaxed max-w-lg mb-8 ${fade("delay-150")}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>

          {/* Stats */}
          <div className={`flex gap-10 mb-9 ${fade("delay-200")}`}>
            {[
              ["15+", "Years Experience"],
              ["5000+", "Patients Treated"],
              ["50+", "Medical Experts"],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="text-3xl font-extrabold text-blue-600 leading-none mb-1">
                  {val}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 items-center mb-9 ${fade("delay-300")}`}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-300">
              Book Appointment
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://youtu.be/dVOomQ0Q-A0?si=XvlmgRHhw1R82I1V",
                  "_blank",
                )
              }
              className="flex items-center gap-3 border-2 border-blue-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-semibold px-6 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5"
            >
              <span className="w-7 h-7 bg-blue-100 rounded-md flex items-center justify-center flex-shrink-0">
                <Play />
              </span>
              Watch Our Story
            </button>
          </div>

          {/* Emergency Hotline */}
          <div
            className={`flex items-center gap-4 bg-[#f8fafd] backdrop-blur border border-blue-100/80 rounded-2xl px-5 py-4 w-full max-w-sm md:max-w-full lg:max-w-sm shadow-sm ${fade("delay-500")}`}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-200">
              <PhoneForwarded size={18} className="text-white" />
            </div>
            <div>
              <div className="text-[11px] text-slate-500 font-medium mb-0.5">
                Emergency Hotline
              </div>
              <div className="text-[15px] font-bold text-[#1e293b] tracking-tight">
                +1 (555) 911-2468
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Hero Image */}
        <div
          className={`relative w-full max-w-sm md:max-w-full lg:max-w-none mx-auto mt-10 md:mt-14 lg:mt-0 ${fade("delay-200")}`}
        >
          {/* Deco circles */}
          <div className="absolute -top-4 -left-4 md:-left-6 md:-top-6 w-14 h-14 md:w-20 md:h-20 bg-blue-200/50 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 -right-2 md:-right-4 w-9 h-9 md:w-12 md:h-12 bg-blue-200/40 rounded-full pointer-events-none" />

          {/* Doctor Photo with overlay cards */}
          <div className="relative rounded-3xl md:rounded-[1.5rem] overflow-visible shadow-2xl shadow-blue-200 w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] max-h-[640px] md:max-h-none lg:max-h-[640px]">
            <div className="w-full h-full rounded-3xl md:rounded-[1.5rem] overflow-hidden bg-blue-50/50">
              <img
                src={herodoctor}
                alt="Healthcare Professional"
                className="w-full h-full object-cover object-top md:object-[center_20%] lg:object-top"
              />
            </div>

            {/* Floating: Appointment — top right */}
            <div
              className="absolute top-4 right-2 md:top-6 md:right-6 lg:-right-10 bg-white/95 backdrop-blur rounded-xl p-3 shadow-xl w-40 md:w-[12rem] z-10 scale-90 md:scale-100 transform origin-top-right text-left"
              style={{ animation: "floatY 3s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 bg-blue-100/60 rounded-md flex items-center justify-center flex-shrink-0">
                  <BookCheck size={15} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-700/80 font-bold whitespace-nowrap leading-none pb-1 pt-0.5">
                    Next Available
                  </div>
                  <div className="text-[13px] font-[800] text-slate-800 whitespace-nowrap leading-none">
                    Today 2:30 PM
                  </div>
                </div>
              </div>
              <div className="text-[9px] text-[#94a3b8] font-medium text-right mt-1 pr-1">
                Dr. Sarah Johnson
              </div>
            </div>

            {/* Floating: Rating — bottom left */}
            <div
              className="absolute bottom-6 left-2 md:bottom-8 md:left-8 lg:-left-8 bg-white/95 backdrop-blur rounded-[1.25rem] px-5 py-4 shadow-xl z-10 scale-90 md:scale-100 transform origin-bottom-left text-center"
              style={{ animation: "floatY 3s ease-in-out 1.5s infinite" }}
            >
              <div className="flex gap-1 justify-center mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <div className="text-[15px] font-[800] text-slate-800 mb-0.5">
                4.9/5
              </div>
              <div className="text-[9px] text-[#94a3b8] font-medium whitespace-nowrap">
                1,234 Reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Side */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 leading-tight">
              Compassionate Care,{" "}
              <span className="block font-semibold">Advanced Medicine</span>
            </h1>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              <p>
                For over two decades, we've been dedicated to providing
                exceptional healthcare that combines cutting-edge medical
                technology with the personal touch our patients deserve.
              </p>
              <p>
                Our multidisciplinary team of specialists works collaboratively
                to ensure every patient receives comprehensive care tailored to
                their unique needs.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6 pt-4">
              <div>
                <p className="text-3xl font-lg text-blue-600">15000+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">
                  Patients Served
                </p>
              </div>
              <div>
                <p className="text-3xl font-lg  text-blue-600">25+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">
                  Years of Excellence
                </p>
              </div>
              <div>
                <p className="text-3xl font-lg text-blue-600">50+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">
                  Medical Specialists
                </p>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300">
              Learn More About Us
            </button>
          </div>

          {/* Right Image Side */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={medicine}
                alt="Medical Team"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Blue Badge (Top Right) */}
            <div className="absolute -top-6 -right-4 bg-blue-600 text-white p-6 rounded-xl shadow-lg text-center hidden sm:block">
              <p className="text-2xl font-bold">25+</p>
              <p className="text-xs font-light leading-tight">
                Years of <br /> Trusted Care
              </p>
            </div>

            {/* Emergency Card (Bottom Left - Overlapping) */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl flex items-center space-x-4 border border-slate-100 max-w-xs hidden md:flex">
              <div className="bg-blue-50 p-3 rounded-full">
                <Heart className="w-8 h-8 text-blue-600" strokeWidth={2} />
              </div>
              <div>
                <p className="font-bold text-slate-800">24/7 Emergency Care</p>
                <p className="text-xs text-slate-500">
                  Always here when you need us most
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="px-7 py-2 max-w-7xl mx-auto w-full" data-aos="fade-up">
        <h3 className="text-center font-semibold text-2xl capitalize mb-3">
          Featured <br className="block md:hidden" /> Departments
        </h3>
        <p className="text-center text-md text-slate-500 mb-12">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2  flex justify-center pb-12 gap-3">
          {/* The Cardiology Card */}
          <div className="bg-white rounded-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 w-[520px] max-w-full overflow-hidden text-left border border-slate-50/50">
            {/* Top Section */}
            <div className="p-8 pt-9 pb-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-[#eef4ff] text-blue-600 text-[10px] font-bold tracking-[0.08em] px-3.5 py-1.5 rounded-full mb-5 uppercase">
                Specialized Care
              </div>

              {/* Title */}
              <h4 className="text-[26px] font-[300] text-slate-600 leading-tight mb-4 tracking-wide">
                Cardiovascular Medicine
              </h4>

              {/* Description */}
              <p className="text-[14.5px] text-slate-500/90 leading-[1.7] mb-7">
                Advanced diagnostic imaging and interventional procedures for
                comprehensive heart health management with personalized
                treatment protocols.
              </p>

              {/* List Items */}
              <ul className="space-y-[18px] mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-200">
                    <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                  </div>
                  <span className="text-[14px] text-slate-500 font-medium tracking-tight">
                    24/7 Emergency Cardiac Care
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-200">
                    <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                  </div>
                  <span className="text-[14px] text-slate-500 font-medium tracking-tight">
                    Minimally Invasive Procedures
                  </span>
                </li>
              </ul>

              {/* Link */}
              <button className="flex items-center gap-2 text-blue-600 font-medium text-[14px] hover:text-blue-700 transition-colors group">
                Explore Cardiology
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bottom Section - Image */}
            <div className="relative h-[280px] w-full mt-2">
              <img
                src={cardiologyDoctor}
                alt="Cardiovascular checkup"
                className="w-full h-full object-cover object-center"
              />

              {/* Floating HeartPulse Badge */}
              <div className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-lg shadow-black/5">
                <HeartPulse
                  className="w-6 h-6 text-blue-600"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
          {/* The Cardiology Card */}
          <div className="bg-white rounded-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 w-[520px] max-w-full overflow-hidden text-left border border-slate-50/50">
            {/* Top Section */}
            <div className="p-8 pt-9 pb-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-[#eef4ff] text-blue-600 text-[10px] font-bold tracking-[0.08em] px-3.5 py-1.5 rounded-full mb-5 uppercase">
                Specialized Care
              </div>

              {/* Title */}
              <h4 className="text-[26px] font-[300] text-slate-600 leading-tight mb-4 tracking-wide">
                Cardiovascular Medicine
              </h4>

              {/* Description */}
              <p className="text-[14.5px] text-slate-500/90 leading-[1.7] mb-7">
                Advanced diagnostic imaging and interventional procedures for
                comprehensive heart health management with personalized
                treatment protocols.
              </p>

              {/* List Items */}
              <ul className="space-y-[18px] mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-200">
                    <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                  </div>
                  <span className="text-[14px] text-slate-500 font-medium tracking-tight">
                    24/7 Emergency Cardiac Care
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-200">
                    <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                  </div>
                  <span className="text-[14px] text-slate-500 font-medium tracking-tight">
                    Minimally Invasive Procedures
                  </span>
                </li>
              </ul>

              {/* Link */}
              <button className="flex items-center gap-2 text-blue-600 font-medium text-[14px] hover:text-blue-700 transition-colors group">
                Explore Cardiology
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Bottom Section - Image */}
            <div className="relative h-[280px] w-full mt-2">
              <img
                src={cardiologyDoctor}
                alt="Cardiovascular checkup"
                className="w-full h-full object-cover object-center"
              />

              {/* Floating HeartPulse Badge */}
              <div className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-lg shadow-black/5">
                <HeartPulse
                  className="w-6 h-6 text-blue-600"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* New Services Section */}
      <section className="max-w-7xl mx-auto w-full px-9 py-16 mb-2" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Orthopedic Surgery",
                desc: "Comprehensive musculoskeletal care utilizing advanced arthroscopic techniques and joint replacement procedures.",
                icon: <ShieldPlus size={28} strokeWidth={2} />,
                items: ["Sports Medicine", "Joint Replacement", "Spine Surgery"]
              },
              {
                title: "Pediatric Care",
                desc: "Child-centered healthcare services from newborn to adolescence with family-focused treatment approaches.",
                icon: <Users size={28} strokeWidth={2} />,
                items: ["Neonatal Intensive Care", "Developmental Pediatrics", "Pediatric Surgery"]
              },
              {
                title: "Cancer Treatment",
                desc: "Multidisciplinary oncology program offering personalized cancer care with latest therapeutic innovations.",
                icon: <Activity size={28} strokeWidth={2} />,
                items: ["Precision Medicine", "Immunotherapy", "Radiation Oncology"]
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 border border-slate-50/80 p-8 flex flex-col items-center flex-1">
                {/* Icon */}
                <div className="w-[60px] h-[60px] bg-[#2563eb] rounded-full flex items-center justify-center text-white mb-6 shadow-md shadow-blue-200/50">
                  {card.icon}
                </div>
                
                {/* Title */}
                <h4 className="text-[22px] font-[400] text-slate-700 mb-4 whitespace-nowrap">
                  {card.title}
                </h4>
                
                {/* Description */}
                <p className="text-[14px] text-slate-500 leading-relaxed mb-8 text-center min-h-[4.5rem]">
                  {card.desc}
                </p>

                {/* List Items */}
                <ul className="space-y-[14px] mb-10 mx-auto w-max text-left">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-slate-500">
                      <span className="text-blue-500 text-lg leading-none">&rarr;</span> {item}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <button className="mt-auto text-blue-600 font-bold text-[13px] tracking-wider uppercase hover:text-blue-800 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
        </div>
      </section>
      {/* Emergency */}
      <main>
        <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-blue-600 rounded-2xl px-9 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Text */}
        <div className="text-white flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-1">
            Emergency Services Available 24/7
          </h2>
          <p className="text-sm text-blue-100 max-w-lg leading-relaxed">
            Our emergency department is equipped with state-of-the-art technology
            and staffed by board-certified emergency physicians ready to provide
            immediate care.
          </p>
        </div>
 
        {/* Right: Button */}
        <a
          href="tel:5551234567"
          className="flex-shrink-0 flex items-center gap-2 bg-white text-blue-600 font-semibold text-sm px-5 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap"
        >
          <Phone className="w-4 h-4" />
          Call Emergency: (555) 123-4567
        </a>
      </div>
    </div>
      </main>
       <section className="bg-gray-50 py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-16 font-sans" data-aos="fade-up">
 
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-3">
          Featured Services
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px w-12 sm:w-16 bg-gray-300" />
          <div className="h-1 w-8 sm:w-10 bg-blue-600 rounded-full" />
          <div className="h-px w-12 sm:w-16 bg-gray-300" />
        </div>
        <p className="text-gray-500 text-xs sm:text-sm lg:text-base max-w-xs sm:max-w-md lg:max-w-xl mx-auto leading-relaxed">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>
 
      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">
 
        {/* Left: Image + Text */}
        <div>
          {/* Image Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Blue overlay */}
            <div className="absolute inset-0 bg-blue-900/35 z-10" />
 
            {/* Real imported image */}
            <img
              src={care}
              alt="Healthcare professionals"
              className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover block"
            />
 
            {/* Badge */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
              <CheckCircle className="w-4 h-4 text-blue-600" strokeWidth={2} />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Emergency Care</span>
            </div>
          </div>
 
          {/* Text block */}
          <div className="mt-5 sm:mt-6 lg:mt-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug">
              Comprehensive Healthcare Excellence
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-relaxed mb-4">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae donec velit neque.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-xs sm:text-sm hover:gap-3 transition-all duration-200 group"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
 
        {/* Right: Service Cards */}
        <div className="flex flex-col divide-y divide-gray-200">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex items-start gap-4 sm:gap-5 py-5 sm:py-6 lg:py-7 px-3 sm:px-4 rounded-xl transition-all duration-200 cursor-pointer ${
                hovered === index ? "bg-blue-50 shadow-sm" : "bg-transparent"
              }`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon bubble */}
              <div
                className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  hovered === index ? "bg-blue-100" : "bg-blue-50"
                }`}
              >
                <service.icon className="w-5 h-5 text-blue-600" strokeWidth={1.8} />
              </div>
 
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{service.title}</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold text-xs sm:text-sm hover:text-blue-800 transition-colors duration-150 inline-flex items-center gap-1 group"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section>
      <div className="bg-white min-h-screen font-sans">
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data_services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-gray-800 font-semibold text-lg">{service.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Find A Doctor Section */}
      <section className="bg-white py-16 px-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block">
            <h2 className="text-3xl font-bold text-[#003366] mb-2">Find A Doctor</h2>
            <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto italic">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>

          <h1 className="text-4xl md:text-5xl font-light text-[#003366] mt-12 mb-4">
            Find Your Perfect Healthcare Provider
          </h1>
          <p className="text-gray-400 text-lg mb-10">
            Search through our comprehensive directory of experienced medical professionals
          </p>

          {/* Search Bar Container */}
          <div className="relative max-w-3xl mx-auto bg-white rounded-[2rem] md:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-50 flex flex-col md:flex-row items-stretch md:items-center gap-6 md:gap-4 p-7 md:p-2 md:px-6 md:py-3 mt-8">
            <div className="flex items-center flex-1 w-full md:border-r border-gray-100 md:py-2 px-1 md:px-0">
              <User className="hidden md:block text-gray-400 mr-3" size={20} />
              <input 
                type="text" 
                placeholder="Enter doctor name" 
                className="outline-none text-gray-600 w-full placeholder-gray-300 text-[15px]"
              />
            </div>
            
            <div className="flex items-center flex-1 w-full md:py-2 px-1 md:px-0">
              <Activity className="hidden md:block text-gray-400 mr-3" size={20} />
              <select className="bg-transparent outline-none text-gray-700 w-full cursor-pointer appearance-none text-[15px] font-medium">
                <option>All Specialties</option>
                <option>Cardiology</option>
                <option>Pediatrics</option>
                <option>Neurology</option>
              </select>
            </div>

            <button className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-3.5 md:py-3 rounded-2xl md:rounded-full flex items-center justify-center gap-2 transition-all w-full md:w-auto mt-2 md:mt-0 font-semibold shadow-md shadow-blue-200/50">
              <Search size={18} strokeWidth={2.5} />
              <span className="text-[15px]">Find Doctors</span>
            </button>
          </div>
        </div>
      </section>
    </div>
    </section>

    <div className="bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, idx) => (
            <DoctorCard key={idx} doctor={doc} />
          ))}
        </div>

        {/* View All Doctors Button */}
        <div className="mt-12 flex justify-center">
          <Link 
            to="/Doctor" 
            className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-[#003366] rounded-full font-bold shadow-sm hover:shadow-md hover:border-blue-600 hover:text-blue-600 transition-all group"
          >
            View All Doctors
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
    {/* Excellence in Medical Care, Every Day */}
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-light text-[#003366] leading-tight">
            Excellence in Medical <br /> Care, Every Day
          </h1>
          <p className="text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation.
          </p>
          <div className="flex flex-col items-center md:items-start space-y-4 pt-4">
            <a href="#" className="text-blue-600 font-semibold flex items-center justify-center md:justify-start gap-2 hover:underline border-b border-blue-600 w-fit pb-1">
              Schedule Consultation <span className="text-lg">→</span>
            </a>
            <a href="#" className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-2 hover:text-gray-600 transition-colors">
              Explore Services <span className="text-lg">→</span>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={exerlance_medical}
              alt="Medical Reception" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {feature.map((item, idx) => (
            <div key={idx} className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-6"><item.icon size={32} className="text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-[#003366]">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Immediate Assistance Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-light text-[#003366]">
              Need Immediate Medical Assistance?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto md:mx-0">
              Our emergency response team is available around the clock to provide immediate medical support when you need it most.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <button className="bg-[#1d4ed8] hover:bg-blue-800 text-white px-8 py-4 rounded-lg flex items-center gap-3 transition-all font-semibold shadow-lg shadow-blue-200">
              <Phone size={20} fill="white" />
              (555) 123-4567
            </button>
            <a href="#" className="text-gray-400 text-sm hover:underline">Find Location</a>
          </div>
        </div>
      </section>

    </div>
    </div>
  );
};

export default Home;
