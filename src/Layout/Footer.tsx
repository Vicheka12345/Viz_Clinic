import { ExternalLink, Camera, Send } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bakzy-footer bg-[#ede6d9] px-5 overflow-hidden font-sans">
      <div className="footer-container bg-[#4a3431] rounded-[50px_5px_2px] min-h-[470px] relative flex">

        {/* Main Content Area */}
        <div className="footer-content flex-1 p-10 md:p-14 lg:p-[60px_80px_40px_60px] text-[#d1c7bc]">
          <div className="footer-columns grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 md:mb-20">
            {/* Newsletter Section */}
            <div className="footer-col newsletter col-span-1 md:col-span-2 lg:col-span-1">
              <h4 className="col-title text-[#c8a165] text-lg tracking-widest mb-6">DELIGHTS IN YOUR INBOX</h4>
              <p className="mb-6">Freshly baked updates, special deals, and sweet stories in your inbox.</p>
              <div className="email-input-wrapper flex items-center bg-white/5 border border-white/20 rounded-full p-1.5 px-4 mb-8">
                <span className="mail-icon">✉</span>
                <input className="bg-transparent border-none text-white flex-1 p-2 outline-none" type="email" placeholder="Your email address" />
                <button className="submit-btn bg-[#c8a165] border-none w-9 h-9 rounded-full text-[#4a3431] font-bold cursor-pointer">↗</button>
              </div>
              <aside className="social-sidebar">
                <div className="social-icons flex gap-3">
                  <a href="https://www.facebook.com/share/15iimqPh5bZ/?mibextid=wwXIfr" className="icon-link w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10 transition-all hover:bg-[#c8a165] hover:text-[#4a3431] hover:-translate-y-1 hover:rounded-xl">
                    <ExternalLink size={20} />
                  </a>
                  <a href="https://www.instagram.com/vichekaz_?igsh=MWo1d2puZjlrbjYz&utm_source=qr" className="icon-link w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10 transition-all hover:bg-[#c8a165] hover:text-[#4a3431] hover:-translate-y-1 hover:rounded-xl">
                    <Camera size={20} />
                  </a>
                  <a href="#" className="icon-link w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10 transition-all hover:bg-[#c8a165] hover:text-[#4a3431] hover:-translate-y-1 hover:rounded-xl">
                    <Send size={20} />
                  </a>
                </div>
              </aside>
            </div>

            {/* Pages Section */}
            <div className="footer-col">
              <h4 className="col-title text-[#c8a165] text-lg tracking-widest mb-6">PAGES</h4>
              <ul className="list-none p-0">
                <li className="mb-3 cursor-pointer font-bold underline">Our Story</li>
                <li className="mb-3 cursor-pointer">Our Menu</li>
                <li className="mb-3 cursor-pointer">Reservation</li>
                <li className="mb-3 cursor-pointer">Our Chef's</li>
                <li className="mb-3 cursor-pointer">Blogs</li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="footer-col">
              <h4 className="col-title text-[#c8a165] text-lg tracking-widest mb-6">RESOURCES</h4>
              <ul className="list-none p-0">
                <li className="mb-3 cursor-pointer">Contact us</li>
                <li className="mb-3 cursor-pointer">Reservation Policy</li>
                <li className="mb-3 cursor-pointer">Licensing</li>
                <li className="mb-3 cursor-pointer">Changelog</li>
              </ul>
            </div>

            {/* About Section */}
            <div className="footer-col">
              <h4 className="col-title text-[#c8a165] text-lg tracking-widest mb-6">ABOUT VICHEKA</h4>
              <p className="mb-4">Toul Kork<br />Phnom Penh City</p>
              <p className="contact-info mb-1 font-medium">info@Viz.come</p>
              <p className="contact-info font-medium">+(855) 126-21443, 031-477-7288</p>
            </div>
          </div>

          {/* Large Brand Name */}
          <div className="footer-brand mt-10">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-[#c8a165] font-semibold italic text-left md:text-center leading-[0.8]">VICHEKA</h1>
            <div className="divider w-full h-px bg-white/10 mt-5"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;