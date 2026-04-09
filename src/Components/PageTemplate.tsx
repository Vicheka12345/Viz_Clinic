import React from "react";
import { NavLink } from "react-router-dom";
import { Home } from "lucide-react";

interface PageTemplateProps {
  title: string;
  description: string;
  isHome?: boolean;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  description,
  isHome = false,
}) => (
  <div className="flex flex-col ">
    {!isHome && (
      <div className="bg-[#f8f9fa] py-4 px-6 lg:px-12 border-b border-gray-100 flex mt-12 md:mt-20">
        <div className="flex items-center gap-3 text-sm font-medium">
          <NavLink to="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</NavLink>
          <span className="text-gray-300">/</span>
          <span className="text-slate-600">{title}</span>
        </div>
      </div>
    )}

  </div>
);

export default PageTemplate;
