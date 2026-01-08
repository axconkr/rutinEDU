
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-sm flex items-center justify-center transition-colors ${scrolled ? 'bg-[#002b5c]' : 'bg-[#002b5c]'}`}>
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-black tracking-tight leading-none ${scrolled ? 'text-[#002b5c]' : 'text-[#002b5c]'}`}>
              루틴에듀
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c5a059]">ROUTINE EDU ACADEMY</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-12 text-[15px] font-medium uppercase tracking-wider">
          <a href="#about" className="hover:text-[#c5a059] transition-colors relative group">
            ABOUT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all group-hover:w-full"></span>
          </a>
          <a href="#subjects" className="hover:text-[#c5a059] transition-colors relative group">
            SUBJECTS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all group-hover:w-full"></span>
          </a>
          <a href="#teachers" className="hover:text-[#c5a059] transition-colors relative group">
            FACULTY
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all group-hover:w-full"></span>
          </a>
          <a href="#location" className="hover:text-[#c5a059] transition-colors relative group">
            LOCATION
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:02-1234-5678" 
            className="hidden sm:block text-sm font-bold border-b border-[#002b5c] pb-0.5 text-[#002b5c]"
          >
            CONSULTING : 02.1234.5678
          </a>
          <button className="bg-[#002b5c] text-white px-6 py-2.5 text-sm font-bold hover:bg-[#c5a059] transition-all">
            ADMISSION
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
