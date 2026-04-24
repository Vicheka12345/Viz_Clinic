import React, { useState } from 'react';
import PageTemplate from '../Components/PageTemplate';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen font-roboto">
      <PageTemplate title="Contact" description="Get in touch with our team for any inquiries or support." isHome={false} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
          Get In <span className="text-blue-600">Touch</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Have questions or need to schedule an appointment? Our team is here to help you 24/7.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MapPin,
              title: 'Our Address',
              lines: ['No. 123, Preah Sihanouk Blvd,', 'Phnom Penh, Cambodia'],
              color: 'bg-blue-50 text-blue-600',
            },
            {
              icon: Phone,
              title: 'Call Us',
              lines: ['+(855) 31 477 7288', '+(855) 12 345 678'],
              color: 'bg-green-50 text-green-600',
            },
            {
              icon: Mail,
              title: 'Email Us',
              lines: ['info@vizclinic.com', 'contact@vizclinic.com'],
              color: 'bg-purple-50 text-purple-600',
            },
            {
              icon: Clock,
              title: 'Opening Hours',
              lines: ['Mon–Fri: 8:00 AM – 8:00 PM', 'Sat–Sun: 9:00 AM – 5:00 PM'],
              color: 'bg-orange-50 text-orange-600',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${item.color}`}>
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-slate-500 text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Map + Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 lg:h-auto" data-aos="fade-right">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767643"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
            <p className="text-slate-500 text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

            {sent && (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6">
                <CheckCircle size={20} />
                <span className="font-medium text-sm">Message sent successfully! We'll be in touch soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
