'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full relative z-50">
      
      <div className=" max-w-full mx-auto flex items-center justify-between transition-all duration-300
                      h-[64px] md:h-[75px] xl:h-[85px] 2xl:h-[92px] 
                      px-6 xl:px-[60px] 2xl:px-[108px]">
        
        {/* --- LOGO SECTION --- */}
       
        <div className="flex items-center shrink-0">
          <a href="/">
            <img 
              src="/logonav.png" 
              alt="CoreEdge Logo" 
              className="w-[140px] md:w-[180px] 2xl:w-[229px] h-auto object-contain"
            />
          </a>
        </div>

        {/* --- LINKS SECTION --- 
           
        */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 2xl:gap-[48px] 
                        text-[14px] xl:text-[16px] 2xl:text-[20px] font-normal text-[#FFFFFF] ">
          <a href="#" className="hover:text-[#00A9CE] whitespace-nowrap">Products</a>
          <a href="#" className="hover:text-[#00A9CE] whitespace-nowrap">Solutions</a>
          <a href="#" className="hover:text-[#00A9CE] whitespace-nowrap">Resources</a>
          <a href="#" className="hover:text-[#00A9CE] whitespace-nowrap">Company</a>
          <a href="#" className="hover:text-[#00A9CE] whitespace-nowrap">Services</a>
        </div>

        {/* --- BUTTONS SECTION --- 
            
        */}
        <div className="items-center 2xl:gap-[12px] gap-[8px] shrink-0  hidden lg:flex">
          <button className="border border-white rounded-md transition-all font-medium whitespace-nowrap
                             2xl:h-[52px] xl:h-[44px] lg:h-[38px]
                             2xl:px-8 xl:px-6 lg:px-4
                             2xl:text-[20px] xl:text-[16px] lg:text-[14px]">
            Request a Demo
          </button>
          <button className="bg-[#0095B6] rounded-md transition-all font-bold whitespace-nowrap hover:bg-cyan-600
                             2xl:h-[52px] xl:h-[44px] lg:h-[38px]
                             2xl:px-8 xl:px-6 lg:px-4
                             2xl:text-[20px] xl:text-[16px] lg:text-[14px]">
            Get in Touch
          </button>
        </div>

        {/* --- HAMBURGER BUTTON  */}
        <div className="lg:hidden ml-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 outline-none"
          >
            <span className={`block w-7 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* --- MOBILE/TABLET  */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black border-t border-zinc-800 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center p-8 gap-6 text-lg font-medium">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Company</a>
          <a href="#">Services</a>
          <div className="flex flex-col w-full gap-3 pt-4">
            <button className="w-full h-12 border border-white rounded-md">Request a Demo</button>
            <button className="w-full h-12 bg-[#0095B6] rounded-md font-bold">Get in Touch</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;