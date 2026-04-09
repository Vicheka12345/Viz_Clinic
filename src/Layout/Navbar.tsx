import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp, Home } from "lucide-react";


const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/About" },
  { label: "Departments", path: "/Departments" },
  { label: "Services", path: "/Services" },
  { label: "Doctor", path: "/Doctor" },
  { 
    label: "More Pages", 
    path: "/MorePage",
    dropdown: [
      { label: "Department Detail", path: "/DepartmentDetail" },
      { label: "Service Detail", path: "/ServiceDetail" },
      { label: "Appointment", path: "/Appointment" },
      { label: "Testimonials", path: "/Testimonials" },
      { label: "FAQ", path: "/FAQ" },
      { label: "Gallery", path: "/Gallery" },
        { label: "DoctorDetail", path: "/DoctorDetail" },
      { label: "Term", path: "/Term" },
      { label: "Privacy", path: "/Privacy" },
      { label: "404", path: "/404" },
    ]
  },
  { label: "Contact us", path: "/Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <nav
      className="nav-bar flex items-center justify-between md:px-16 lg:px-28 py-4 bg-[#233D4C] border-b border-white/5 sticky top-0 z-[200] shadow-sm transform transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <Link 
        to="/" 
        className="px-5 md:px-0 flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
        onClick={() => setIsOpen(false)}
      >
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-black text-white tracking-tighter leading-none group-hover:text-[#c8a165] transition-colors">
            VIZ
          </span>
          <span className="text-[10px] md:text-[11px] font-bold text-[#c8a165] tracking-[0.2em] font-serif uppercase">
            Healthcare
          </span>
        </div>
      </Link>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden bg-transparent border-none outline-none text-white cursor-pointer px-5"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <ul
        id="primary-navigation"
        className={`
          nav-lists flex gap-4 font-medium transition-all duration-300 ease-in-out
          absolute lg:static top-full left-0 right-0 bg-[#233D4C] lg:bg-transparent
          flex-col lg:flex-row items-start lg:items-center overflow-hidden lg:overflow-visible
          pl-10 lg:px-0
          ${isOpen ? "active max-h-[1000px] py-10 lg:py-0 border-t border-white/10" : "max-h-0 lg:max-h-full py-0"}
          lg:flex
        `}
      >
        {links.map((link) => (
          <li
            key={link.label}
            ref={link.dropdown ? dropdownRef : null}
            className={`w-full lg:w-auto ml-2.5 lg:ml-0 relative group ${link.dropdown ? "cursor-pointer" : ""}`}
            onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
            onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
          >
            {!link.dropdown ? (
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  block py-3 lg:py-2 px-0 lg:px-3 text-lg text-white hover:text-orange-400 transition-colors
                  ${isActive ? "text-orange-400 font-bold underline" : ""}
                `}
              >
                {link.label}
              </NavLink>
            ) : (
              <div className="w-full">
                <div 
                  className="flex items-center justify-between py-3 lg:py-2 px-0 lg:px-3 text-lg text-white hover:text-orange-400 transition-colors"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {link.label}
                  {dropdownOpen ? <ChevronUp size={18} className="ml-1" /> : <ChevronDown size={18} className="ml-1" />}
                </div>

                {/* Sub-dropdown Menu */}
                <ul className={`
                  ${dropdownOpen ? "block" : "hidden"}
                  lg:absolute lg:top-full lg:left-0 lg:bg-[#1a2f3b] lg:min-w-[200px] lg:shadow-xl lg:rounded-b-lg
                  flex flex-col gap-1 py-2 lg:p-2 z-[300]
                `}>
                  {link.dropdown.map((sub) => (
                    <li key={sub.label} className="w-full">
                      <NavLink
                        to={sub.path}
                        onClick={() => {
                          setIsOpen(false);
                          setDropdownOpen(false);
                        }}
                        className={({ isActive }) => `
                          flex items-center justify-between py-2 px-4 text-white hover:bg-[#c8a165] hover:text-[#233D4C] rounded transition-all text-sm
                          ${isActive ? "bg-[#c8a165] text-[#233D4C] font-bold" : ""}
                        `}
                      >
                        {sub.label}
                        <Home size={14} className="opacity-50" />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
