import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Scroll from "./Scroll"

import { Search, Bell, User } from "lucide-react";

const Header = () => (
  <header className="sticky top-0 z-[90] h-16 bg-white/80 backdrop-blur-md border-b border-dashboard-border px-6 flex items-center justify-between">
    <div className="flex items-center gap-4 flex-1">
      <div className="relative max-w-md w-full hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dashboard-muted" size={18} />
        <input 
          type="text" 
          placeholder="Search records, patients..." 
          className="w-full bg-slate-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all outline-none text-dashboard-text"
        />
      </div>
    </div>
    
    <div className="flex items-center gap-3">
      <button className="p-2 text-dashboard-muted hover:bg-slate-100 rounded-xl transition-all relative">
        <Bell size={20} />
        <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
      </button>
      <div className="h-8 w-px bg-dashboard-border mx-1 hidden sm:block"></div>
      <div className="flex items-center gap-3 pl-1">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-dashboard-text leading-none">Vun Vicheka</p>
          <p className="text-[10px] text-dashboard-muted font-medium mt-1">Admin Account</p>
        </div>
        <button className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary shadow-sm border border-blue-100">
          <User size={20} />
        </button>
      </div>
    </div>
  </header>
);

function Layout() {
  return (
    <div className="flex min-h-screen bg-dashboard-bg font-roboto">
      <Scroll />  
      <Navbar />
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout