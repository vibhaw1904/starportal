"use client"
import React, { useEffect, useState } from 'react';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="pt-16 relative">
      <img src="bg.png" alt="" className="w-full object-cover" />
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center mix-blend-screen  transition-all duration-800 ease gap-5 ${
          animate ? 'animate-dropDown' : ''
        }`}
      >
        <div className="flex justify-center">
          <img src="academy.gif" alt="" className="w-[235px] mix-blend-screen" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p>
            <span>Intract users</span> have together made more than <span>$100 million</span> in web3. <br />
            <span>Learn how to earn crypto!</span> Join them and
          </p>
          <div className="pt-6 mt-8 flex justify-center">
            <button className="bg-[#6435e9] justify-center  w-48 rounded-md p-2 flex items-center gap-2">
              Get Started <img src="arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
