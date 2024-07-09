import React from 'react';

type StickyButtonProps = {};

const StickyButton: React.FC<StickyButtonProps> = () => {
  return (
    <div className='h-32'>
<div className="fixed z-[100] bottom-10 flex justify-center w-full">
      <div className="rounded-[1000px] border-[1px] border-white/10 bg-white/10 shadow-md backdrop-blur-md w-max flex relative">
        <div className="inline-flex pt-2 pb-2 pr-10 pl-10 justify-center items-center rounded-[1000px] bg-white/30 cursor-pointer text-center text-base not-italic font-normal leading-5 tracking-[.117px] transition duration-75">
          Essentials
        </div>
        <div className="relative">
          <div className="inline-flex pt-2 pb-2 pr-10 pl-10 justify-center items-center rounded-[1000px]  cursor-pointer text-center text-base not-italic font-normal leading-5 tracking-[.117px] transition duration-75 border-white/10 ">Alpha Hub</div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default StickyButton;
