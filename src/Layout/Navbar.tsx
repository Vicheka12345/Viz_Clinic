import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Home,
  Info,
  Stethoscope,
  Briefcase,
  Users,
  Layout,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

const links = [
  { label: "Home", path: "/", icon: <Home size={18} /> },
  { label: "About", path: "/About", icon: <Info size={18} /> },
  {
    label: "Departments",
    path: "/Departments",
    icon: <Stethoscope size={18} />,
  },
  { label: "Services", path: "/Services", icon: <Briefcase size={18} /> },
  { label: "Doctors", path: "/Doctor", icon: <Users size={18} /> },
  {
    label: "More Pages",
    path: "/MorePage",
    icon: <Layout size={18} />,
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
    ],
  },
  { label: "Contact Us", path: "/Contact", icon: <Mail size={18} /> },
];

type NavbarProps = {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
};

function Navbar({ isDarkMode, onToggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar on click outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        window.innerWidth < 1024 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle Header (Visible only on mobile) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[100] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-dashboard-text p-4 flex items-center justify-between shadow-sm border-b border-dashboard-border">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md shadow-primary/20">
            <span className="text-white font-black text-lg">V</span>
          </div>
          <span className="font-black text-dashboard-text tracking-tight">VIZ Clinic</span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label={isDarkMode ? "Turn off dark mode" : "Turn on dark mode"}
            title={isDarkMode ? "Turn off dark mode" : "Turn on dark mode"}
            className="theme-toggle-button p-2 hover:bg-dashboard-bg rounded-xl text-dashboard-muted transition-colors"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-dashboard-bg rounded-xl text-dashboard-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Backdrop (mobile only) */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/20 z-[110] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Persistent Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 bottom-0 w-[240px] bg-white dark:bg-slate-900 text-dashboard-muted z-[120] border-r border-dashboard-border transition-transform duration-300 ease-in-out flex flex-col
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-dashboard-border flex items-center">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md shadow-primary/20">
              <span className="text-white font-black text-lg">V</span>
            </div>
            <span className="text-lg font-black text-dashboard-text tracking-tight leading-none">
              VIZ Clinic
            </span>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          <div className="px-3 space-y-1">
            {links.map((link) => (
              <div key={link.label}>
                {!link.dropdown ? (
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-bold transition-all
                      ${
                        isActive
                          ? "bg-blue-50 text-primary shadow-sm shadow-blue-50/50"
                          : "text-dashboard-muted hover:bg-dashboard-bg hover:text-dashboard-text"
                      }
                    `}
                  >
                    <span className="opacity-70">{link.icon}</span>
                    {link.label}
                  </NavLink>
                ) : (
                  <div className="space-y-1">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`
                        w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-bold transition-all
                        ${dropdownOpen ? "bg-dashboard-bg text-dashboard-text" : "text-dashboard-muted hover:bg-dashboard-bg hover:text-dashboard-text"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className="opacity-70">{link.icon}</span>
                        {link.label}
                      </div>
                      {dropdownOpen ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    <div
                      className={`
                      overflow-hidden transition-all duration-300
                      ${dropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                    `}
                    >
                      <div className="ml-4 border-l border-dashboard-border space-y-1 mt-1">
                        {link.dropdown.map((sub) => (
                          <NavLink
                            key={sub.label}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `
                              block py-2.5 px-6 text-[13px] font-bold transition-all
                              ${isActive ? "text-primary" : "text-dashboard-muted hover:text-primary"}
                            `}
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 bg-dashboard-bg border-t border-dashboard-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-sm border border-blue-100">
              VC
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-dashboard-text">
                VIZ Clinic
              </span>
              <span className="text-[10px] text-dashboard-muted font-bold uppercase">
                Online
              </span>
            </div>
            <button
              type="button"
              onClick={onToggleDarkMode}
              aria-label={isDarkMode ? "Turn off dark mode" : "Turn on dark mode"}
              title={isDarkMode ? "Turn off dark mode" : "Turn on dark mode"}
              className="theme-toggle-button ml-auto p-2 text-dashboard-muted hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </aside>

      {/* Spacers to prevent content overlap */}
      <div className="hidden lg:block w-[240px] flex-shrink-0" />
      <div className="lg:hidden h-16" />
    </>
  );
}

export default Navbar;
