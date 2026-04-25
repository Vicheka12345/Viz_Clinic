import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Camera,
  Send,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-dashboard-muted font-roboto border-t border-dashboard-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
                <span className="text-white font-black text-lg">V</span>
              </div>
              <div>
                <div className="text-dashboard-text font-black text-lg tracking-tight leading-none">
                  VIZ Clinic
                </div>
                <div className="text-primary text-[10px] font-bold tracking-[0.15em] uppercase">
                  Healthcare Excellence
                </div>
              </div>
            </Link>
            <p className="text-dashboard-muted text-sm leading-relaxed mb-6">
              Providing compassionate, world-class healthcare to our community
              for over 25 years. Your health is our highest priority.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/share/15iimqPh5bZ/?mibextid=wwXIfr",
                  icon: ExternalLink,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/vichekaz_?igsh=MWo1d2puZjlrbjYz&utm_source=qr",
                  icon: Camera,
                  label: "Instagram",
                },
                {
                  href: "https://t.me/Vichekazz",
                  icon: Send,
                  label: "Telegram",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 bg-dashboard-bg border border-dashboard-border rounded-full flex items-center justify-center text-dashboard-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dashboard-text font-bold text-sm uppercase tracking-widest mb-6 ">
              Quick Links
            </h4>
            <ul className="flex flex-wrap gap-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/About" },
                { label: "Departments", path: "/Departments" },
                { label: "Our Doctors", path: "/Doctor" },
                { label: "Services", path: "/Services" },
                { label: "Gallery", path: "/Gallery" },
              ].map((link) => (
                <li key={link.label} className="w-1/2 lg:w-full">
                  <Link
                    to={link.path}
                    className="text-dashboard-muted hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-dashboard-text font-bold text-sm uppercase tracking-widest mb-6">
              Our Services
            </h4>
            <ul className="flex flex-wrap gap-y-3">
              {[
                "Cardiology",
                "Neurology",
                "Pediatrics",
                "Orthopedics",
                "Dermatology",
                "Oncology",
              ].map((s) => (
                <li key={s} className="w-1/2 lg:w-full">
                  <Link
                    to="/Services"
                    className="text-dashboard-muted hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dashboard-text font-bold text-sm uppercase tracking-widest mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <span className="text-dashboard-muted text-sm">
                  No. 123, Preah Sihanouk Blvd,
                  <br />
                  Phnom Penh, Cambodia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+855314777288"
                  className="text-dashboard-muted hover:text-primary text-sm transition-colors"
                >
                  +(855) 31 477 7288
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@vizclinic.com"
                  className="text-dashboard-muted hover:text-primary text-sm transition-colors"
                >
                  info@vizclinic.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
