import React, { useState } from 'react';
import PageTemplate from '../Components/PageTemplate';
import { Calendar, Clock, User, Phone, Mail, ChevronDown, CheckCircle } from 'lucide-react';

const specialties = ['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology', 'Oncology', 'Emergency Medicine', 'Radiology'];
const doctors = [
  'បណ្ឌិត សុខ វិចិត្រ', 'បណ្ឌិត ចាន់ សុភា', 'បណ្ឌិត នួន សុផាត', 'បណ្ឌិត គង់ វុទ្ធី',
  'បណ្ឌិត សៀង សុវណ្ណារី', 'បណ្ឌិត ស៊ុន​បូណា', 'បណ្ឌិត វ៉ុន វេជ្ជការ', 'បណ្ឌិត សុខ ស្រីពេជ្រ',
];
const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', specialty: '', doctor: '', date: '', time: '', notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-slate-50 min-h-screen font-roboto font-hanuman flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-lg p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Appointment Booked!</h2>
          <p className="text-slate-500 mb-2">Thank you, <strong>{form.name}</strong>!</p>
          <p className="text-slate-500 mb-8">
            Your appointment with <strong>{form.doctor}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong> has been confirmed. A confirmation email will be sent to <strong>{form.email}</strong>.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', specialty: '', doctor: '', date: '', time: '', notes: '' }); }}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-roboto">
      <PageTemplate title="Appointment" description="Schedule an appointment with our medical professionals." isHome={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center mb-14" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            Book an <span className="text-blue-600">Appointment</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Schedule a visit with our expert medical professionals at your preferred time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar Info */}
          <div className="space-y-6" data-aos="fade-right">
            {[
              { icon: Clock, title: 'Working Hours', lines: ['Mon–Fri: 8:00 AM – 8:00 PM', 'Sat–Sun: 9:00 AM – 5:00 PM'] },
              { icon: Phone, title: 'Emergency', lines: ['+855 126-21443', 'Available 24/7'] },
              { icon: Mail, title: 'Email Us', lines: ['vizclinic@clinic.com'] },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                  {item.lines.map((l, j) => <p key={j} className="text-slate-500 text-sm">{l}</p>)}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-8" data-aos="fade-left">
            <h2 className="text-xl font-bold text-slate-900 mb-8">Appointment Details</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Specialty *</label>
                  <div className="relative">
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <select required value={form.specialty} onChange={e => setForm({ ...form, specialty: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all appearance-none">
                      <option value="">Select specialty...</option>
                      {specialties.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Doctor *</label>
                <div className="relative">
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <select required value={form.doctor} onChange={e => setForm({ ...form, doctor: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all appearance-none">
                    <option value="">Select a doctor...</option>
                    {doctors.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date *</label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} min={new Date().toISOString().split('T')[0]} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time *</label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, time: t })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${form.time === t ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-200 text-slate-600 hover:border-blue-400'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Notes</label>
                <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Describe your symptoms or any special requests..." rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all resize-none" />
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                <Calendar size={18} /> Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
