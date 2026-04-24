import React, { useState } from "react";
import PageTemplate from "../Components/PageTemplate";
import { Link } from "react-router-dom";
import { Star, Award, Search, ArrowRight, Phone } from "lucide-react";
import doctorMale1 from "../images/doctor_male1.png";
import doctorFemale1 from "../images/doctor_female1.png";
import doctorMale2 from "../images/doctor_male2.png";
import doctorFemale2 from "../images/doctor_female2.png";
import doctorMale3 from "../images/doctor_male3.png";
import doctorFemale3 from "../images/doctor_female3.png";

const allDoctors = [
  {
    name: "បណ្ឌិត សុខ វិចិត្រ",
    specialty: "Cardiology",
    experience: 18,
    rating: 4.9,
    reviews: 214,
    status: "online",
    image: doctorMale1,
    education: "MD, University of Health Sciences Cambodia",
    languages: ["Khmer", "English"],
  },
  {
    name: "បណ្ឌិត ចាន់ សុភា",
    specialty: "Neurology",
    experience: 14,
    rating: 4.8,
    reviews: 178,
    status: "online",
    image: doctorFemale1,
    education: "MD, Royal University of Phnom Penh",
    languages: ["Khmer", "English", "French"],
  },
  {
    name: "បណ្ឌិត នួន សុផាត",
    specialty: "Pediatrics",
    experience: 11,
    rating: 5.0,
    reviews: 309,
    status: "online",
    image: doctorFemale3,
    education: "MD, International University Cambodia",
    languages: ["Khmer", "English"],
  },
  {
    name: "បណ្ឌិត គង់ វុទ្ធី",
    specialty: "Orthopedics",
    experience: 20,
    rating: 4.9,
    reviews: 256,
    status: "away",
    image: doctorMale2,
    education: "MD, University of Health Sciences Cambodia",
    languages: ["Khmer", "English"],
  },
  {
    name: "បណ្ឌិត សៀង សុវណ្ណារី",
    specialty: "Dermatology",
    experience: 13,
    rating: 4.7,
    reviews: 134,
    status: "online",
    image: doctorFemale2,
    education: "MD, Royal University of Phnom Penh",
    languages: ["Khmer", "English"],
  },
  {
    name: "បណ្ឌិត ស៊ុន បូណា",
    specialty: "Oncology",
    experience: 17,
    rating: 4.9,
    reviews: 198,
    status: "online",
    image: doctorMale3,
    education: "MD, University of Health Sciences Cambodia",
    languages: ["Khmer", "English", "Chinese"],
  },
  {
    name: "បណ្ឌិត វ៉ុន​ វេជ្ជការ",
    specialty: "Emergency Medicine",
    experience: 9,
    rating: 4.8,
    reviews: 112,
    status: "away",
    image: doctorMale1,
    education: "MD, International University Cambodia",
    languages: ["Khmer", "English"],
  },
  {
    name: "បណ្ឌិត សុខ ស្រីពេជ្រ",
    specialty: "Radiology",
    experience: 15,
    rating: 4.8,
    reviews: 143,
    status: "online",
    image: doctorFemale1,
    education: "MD, Royal University of Phnom Penh",
    languages: ["Khmer", "English"],
  },
];

const specialties = [
  "All Specialties",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "Oncology",
  "Emergency Medicine",
  "Radiology",
];

const Doctor = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All Specialties");

  const filtered = allDoctors.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase());
    const matchesSpecialty =
      specialty === "All Specialties" || d.specialty === specialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="bg-slate-50 min-h-screen font-robto ">
      <PageTemplate
        title="Doctors"
        description="Meet our world-class team of dedicated healthcare professionals."
        isHome={false}
      />

      {/* Header */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
          Our <span className="text-blue-600">Medical</span> Experts
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Our team of highly qualified specialists is committed to delivering
          outstanding care with compassion and precision.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div
        className="max-w-4xl mx-auto px-4 mb-14 font-hanuman"
        data-aos="fade-up"
      >
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 flex flex-col md:flex-row gap-4">
          <div className="flex items-center flex-1 gap-3 bg-slate-50 rounded-xl px-4 py-3">
            <Search size={18} className="text-slate-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search by doctor name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-slate-700 w-full placeholder-slate-400 text-sm"
            />
          </div>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="flex-1 bg-slate-50 rounded-xl px-4 py-3 text-slate-700 text-sm outline-none border-none cursor-pointer"
          >
            {specialties.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Search size={16} /> Search
          </button>
        </div>
      </div>

      {/* Doctor Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400 text-lg">
            No doctors found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((doctor, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  {/* Status badge */}
                  <div
                    className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${doctor.status === "online" ? "bg-green-400/20 text-green-300 border border-green-400/30" : "bg-orange-400/20 text-orange-300 border border-orange-400/30"}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${doctor.status === "online" ? "bg-green-400" : "bg-orange-400"}`}
                    />
                    {doctor.status === "online" ? "Available" : "Away"}
                  </div>
                  {/* Name overlay */}
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-white font-bold text-base leading-tight">
                      {doctor.name}
                    </h3>
                    <span className="text-blue-300 text-xs font-medium">
                      {doctor.specialty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 mb-3">
                    <Award size={14} className="text-blue-500" />
                    <span className="text-slate-500 text-xs">
                      {doctor.experience} years experience
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          fill={
                            i < Math.floor(doctor.rating)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      ))}
                    </div>
                    <span className="font-bold text-slate-700 text-sm">
                      {doctor.rating}
                    </span>
                    <span className="text-slate-400 text-xs">
                      ({doctor.reviews})
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs mb-4">
                    {doctor.education}
                  </p>

                  {/* Actions */}
                  <div className="mt-auto flex gap-2">
                    <Link
                      to="/DoctorDetail"
                      state={{ doctor }}
                      className="flex-1 py-2.5 text-center border border-slate-200 rounded-xl text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-colors"
                    >
                      View Profile
                    </Link>
                    <Link
                      to="/Appointment"
                      className="flex-1 py-2.5 text-center bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Banner */}
      <section className="py-16 px-4 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-bl mb-4">
            Need Immediate Medical Assistance?
          </h2>
          <p className=" mb-8 text-lg">
            Our emergency department is available 24/7 with board-certified
            physicians ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+85512345678"
              className="flex items-center justify-center gap-2 bg-white hover:text-black text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-blue-200 transition-colors"
            >
              <Phone size={18} /> Call: +855 12 345 678
            </a>
            <Link
              to="/Appointment"
              className="flex items-center justify-center gap-2 border border-transparent hover:border-gray-700 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Book Appointment <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
