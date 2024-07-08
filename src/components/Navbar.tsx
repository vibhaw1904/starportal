"use client"
import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` fixed w-full  h-16 z-50 transition-colors duration-500 ${scrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-black'} text-white p-1 flex items-center justify-around align-middle border-b-[1px] transition-all ease`}>
      <div className="flex items-center space-x-4 justify-center gap-5">
        <span className="text-2xl font-bold">intract.</span>
        <a href="#" className="hover:text-gray-400">Compass</a>
        <a href="#" className="hover:text-gray-400">Explore</a>
        <a href="#" className="hover:text-gray-400 relative border-b-2 border-white">
          Academy
          <span className="top-0 right-0 mt-1 ml-2 text-xs bg-purple-500 text-white px-2 py-0.5 rounded-lg">New</span>
        </a>
        <a href="#" className="hover:text-gray-400">NFTs</a>
        <a href="#" className="hover:text-gray-400">For Projects</a>
      </div>
      <div className='flex gap-4'>
        <div className="flex rounded-full border border-white/5 bg-white/5 h-[42.5px] w-96 p-[10px] items-center flex-1 gap-2 relative ">
          <FiSearch />
          <input
            type="text"
            placeholder="Search for ecosystems, trending quests etc."
            className="flex-1 bg-font-outfit text-[14px]  font-medium p-1 bg-transparent"
          />
        </div>
        <button className="bg-gray-800 p-2 rounded-full w-10 border border-red-400 focus:outline-none focus:ring-2 focus:ring-purple-500">
          <img src="icon.svg" alt="" className='w-12 p-1' />
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
