import { useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Scroll from "./Scroll"

import { Search, Bell, User, Moon, Sun } from "lucide-react";

type HeaderProps = {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
};

const getInitialDarkMode = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const Header = ({ isDarkMode, onToggleDarkMode }: HeaderProps) => (
  <header className="sticky top-0 z-[90] h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-dashboard-border px-6 flex items-center justify-between">
    <div className="flex items-center gap-4 flex-1">
      <div className="relative max-w-md w-full hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dashboard-muted" size={18} />
        <input 
          type="text" 
          placeholder="Search records, patients..." 
          className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all outline-none text-dashboard-text"
        />
      </div>
    </div>
    
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onToggleDarkMode}
        aria-label={isDarkMode ? "Turn off dark mode" : "Turn on dark mode"}
        title={isDarkMode ? "Turn off dark mode" : "Turn on dark mode"}
        className="theme-toggle-button p-2 text-dashboard-muted hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <button className="p-2 text-dashboard-muted hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all relative">
        <Bell size={20} />
        <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white dark:border-slate-900"></span>
      </button>
      <div className="h-8 w-px bg-dashboard-border mx-1 hidden sm:block"></div>
      <div className="flex items-center gap-3 pl-1">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-dashboard-text leading-none">Vun Vicheka</p>
          <p className="text-[10px] text-dashboard-muted font-medium mt-1">Admin Account</p>
        </div>
        <button className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm border border-blue-100 dark:border-slate-700">
          <User size={20} />
        </button>
      </div>
    </div>
  </header>
);

function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);
  const [themeEffect, setThemeEffect] = useState<"to-dark" | "to-light" | null>(null);
  const effectTimerRef = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    return () => {
      if (effectTimerRef.current) {
        window.clearTimeout(effectTimerRef.current);
      }
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((current) => {
      const nextMode = !current;
      setThemeEffect(nextMode ? "to-dark" : "to-light");

      if (effectTimerRef.current) {
        window.clearTimeout(effectTimerRef.current);
      }

      effectTimerRef.current = window.setTimeout(() => {
        setThemeEffect(null);
      }, 850);

      return nextMode;
    });
  };

  return (
    <div className="flex min-h-screen bg-dashboard-bg font-roboto">
      {themeEffect && (
        <div
          className={`theme-transition-overlay theme-transition-overlay--${themeEffect}`}
          aria-hidden="true"
        />
      )}
      <Scroll />  
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
