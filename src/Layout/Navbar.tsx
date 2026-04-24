import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp, Phone } from "lucide-react";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/About" },
  { label: "Departments", path: "/Departments" },
  { label: "Services", path: "/Services" },
  { label: "Doctors", path: "/Doctor" },
  {
    label: "More Pages",
    path: "/MorePage",
    dropdown: [
      { label: "Department Detail", path: "/DepartmentDetail" },
      { label: "Service Detail", path: "/ServiceDetail" },
      { label: "Testimonials", path: "/Testimonials" },
      { label: "FAQ", path: "/FAQ" },
      { label: "Gallery", path: "/Gallery" },
      { label: "Doctor Detail", path: "/DoctorDetail" },
      { label: "Term & Conditions", path: "/Term" },
      { label: "Privacy Policy", path: "/Privacy" },
      { label: "404 Page", path: "/404" },
    ]
  },
  { label: "Contact Us", path: "/Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
      if (e.key === "Escape") { setIsOpen(false); setDropdownOpen(false); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>

      {/* Main Navbar */}
      <nav
        className={`flex items-center  justify-between px-5 md:px-10 lg:px-16 py-3 sticky top-0 z-[200] transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-slate-100' : 'bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-100'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200">
            <span className="text-white font-black text-lg tracking-tighter">V</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
              VIZ Clinic
            </span>
            <span className="text-[10px] font-bold text-blue-600 tracking-[0.15em] uppercase">
              Healthcare Excellence
            </span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden bg-transparent border-none outline-none text-slate-700 cursor-pointer p-2"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navigation Links */}
        <ul
          id="primary-navigation"
          className={`
            flex gap-1 font-medium transition-all duration-300 ease-in-out
            absolute lg:static top-full left-0 right-0backdrop-blur-lg lg:bg-transparent
            flex-col lg:flex-row items-start lg:items-center overflow-hidden lg:overflow-visible
            pl-6 lg:pl-0
            ${isOpen ? "active max-h-[1000px] py-6 lg:py-0 border-t border-slate-100 shadow-lg lg:shadow-none" : "max-h-0 lg:max-h-full py-0"}
            lg:flex
          `}
        >
          {links.map((link) => (
            <li
              key={link.label}
              ref={link.dropdown ? dropdownRef : null}
              className={`w-full lg:w-auto relative group ${link.dropdown ? "cursor-pointer" : ""}`}
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
            >
              {!link.dropdown ? (
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    block py-2.5 lg:py-2 px-3 text-sm font-semibold transition-colors rounded-lg
                    ${isActive ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"}
                  `}
                >
                  {link.label}
                </NavLink>
              ) : (
                <div className="w-full">
                  <div
                    className="flex items-center justify-between py-2.5 lg:py-2 px-3 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    {dropdownOpen ? <ChevronUp size={15} className="ml-1" /> : <ChevronDown size={15} className="ml-1" />}
                  </div>

                  <ul className={`
                    ${dropdownOpen ? "block" : "hidden"}
                    lg:absolute lg:top-full lg:left-0 lg:bg-white/95 lg:backdrop-blur-md lg:min-w-[220px] lg:shadow-xl lg:rounded-xl lg:border lg:border-slate-100
                    flex flex-col gap-0.5 py-2 lg:p-2 z-[300]
                  `}>
                    {link.dropdown.map((sub) => (
                      <li key={sub.label} className="w-full">
                        <NavLink
                          to={sub.path}
                          onClick={() => { setIsOpen(false); setDropdownOpen(false); }}
                          className={({ isActive }) => `
                            flex items-center py-2 px-4 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all text-sm
                            ${isActive ? "bg-blue-50 text-blue-600 font-semibold" : ""}
                          `}
                        >
                          {sub.label}
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
    </>
  );
}

export default Navbar;
