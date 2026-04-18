import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Home } from 'lucide-react';

const MorePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownItems = [
    { label: "Department Detail", path: "/DepartmentDetail" },
    { label: "Service Detail", path: "/ServiceDetail" },
    { label: "Appointment", path: "/Appointment" },
    { label: "Testimonials", path: "/Testimonials" },
    { label: "Frequently Ask Question", path: "/FAQ" },
    { label: "Gallery", path: "/Gallery" },
    { label: "Term", path: "/Term" },
    { label: "Privacy", path: "/Privacy" },
    { label: "404", path: "/404" },
  ];

  return (
    <div className="p-10 flex flex-col items-center min-h-[60vh] bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-[#233D4C]">More Pages</h1>
      
      <div className="relative inline-block text-left w-64">
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c8a165]"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Select a Page
            <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {dropdownItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition-colors border-b last:border-0 border-gray-50 flex items-center justify-between"
                  role="menuitem"
                  tabIndex={-1}
                  id={`menu-item-${item.label}`}
                >
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-20">
        <Link to="/" className="flex items-center gap-2 bg-[#233D4C] text-white px-8 py-3 rounded-full hover:bg-[#c8a165] transition-all transform hover:scale-105 shadow-xl font-bold">
          <Home size={20} />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default MorePage;
