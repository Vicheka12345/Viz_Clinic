import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Camera, Send, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-slate-300 font-roboto ">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">V</span>
              </div>
              <div>
                <div className="text-white font-black text-lg tracking-tight leading-none">VIZ Clinic</div>
                <div className="text-blue-400 text-[10px] font-bold tracking-[0.15em] uppercase">Healthcare Excellence</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing compassionate, world-class healthcare to our community for over 25 years. Your health is our highest priority.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/share/15iimqPh5bZ/?mibextid=wwXIfr', icon: ExternalLink, label: 'Facebook' },
                { href: 'https://www.instagram.com/vichekaz_?igsh=MWo1d2puZjlrbjYz&utm_source=qr', icon: Camera, label: 'Instagram' },
                { href: 'https://t.me/Vichekazz', icon: Send, label: 'Telegram' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='grid sm:grid-cols-2'>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/About' },
                { label: 'Departments', path: '/Departments' },
                { label: 'Our Doctors', path: '/Doctor' },
                { label: 'Services', path: '/Services' },
                { label: 'Gallery', path: '/Gallery' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology', 'Oncology'].map((s) => (
                <li key={s}>
                  <Link to="/Services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">No. 123, Preah Sihanouk Blvd,<br />Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500 flex-shrink-0" />
                <a href="tel:+855314777288" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">+(855) 31 477 7288</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500 flex-shrink-0" />
                <a href="mailto:info@vizclinic.com" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">info@vizclinic.com</a>
              </li>
            </ul>
            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white text-sm font-semibold mb-3">Subscribe to Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email..."
                  className="flex-1 bg-white/5 border border-white/10 text-white text-xs px-4 py-2.5 rounded-xl outline-none focus:border-blue-500 placeholder-slate-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl transition-colors text-xs font-semibold">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 VIZ Clinic. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={12} className="text-red-400 fill-red-400" /> for better healthcare
          </p>
          <div className="flex items-center gap-4">
            <Link to="/Privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/Term" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;