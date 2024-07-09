import React from 'react';

type SectionTwoCardProps = {
  imageUrl: string;
  title: string;
};

const SectionTwoCard: React.FC<SectionTwoCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="w-[283px] h-[420px] rounded-[16px] border-[1px] border-white/10 bg-white/10 flex flex-col justify-center relative overflow-hidden ">
      <div className="block w-full h-full">
        <div className="flex h-10 w-10 p-2 justify-center items-center rounded-[1000px] border-[1px] bg-white/5 border-white/5 backdrop-blur-lg absolute top-4 right-4 cursor-pointer">
          <img src="reel.svg" alt="" />
        </div>
        <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent">
          <div className=''>
          <div className=" text-[#fff9] drop-shadow-md text-xl font-normal leading-[30px] tracking-[.117px] absolute bottom-3 left-4 mix-blend-plus-lighter overflow-hidden text-ellipsis z-[2] ">
            {title}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwoCard;
