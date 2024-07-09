import React from "react";
import { BsCircleFill, BsLock } from "react-icons/bs";
type MiddleRightProps = {};

const MiddleRight: React.FC<MiddleRightProps> = () => {
  return (
    
      <div>
        <div className="flex w-12 h-12 p-3 justify-center items-center rounded-[1000px] border-[1px] backdrop-blur-md text-[#fff3] bg-white/5 border-white/10 ml-14 text-3xl">
          <BsCircleFill />
        </div>
        <div className="relative w-[160px] z-10">
          <div className="w-[160px] h-[180px] rounded-3xl border-[1px] bag-white/10 mr-[120px] mt-4 flex items-center justify-center overflow-hidden ">
            <img
              src="cat.png"
              className=" w-[147px] h-[165px] rounded-[20px] object-cover z-[1]"
              alt=""
            />
          </div>
          <div className="flex w-12 h-12 p-3 justify-center items-center rounded-[1000px] border-[1px] border-white/20 bg-[#13131] backdrop-blur-md absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
            <BsLock className=""/>
          </div>
        </div>
        <div className="text-white/60 text-lg font-normal leading-6 mb-2 mt-4">
        Interact Certified:Learner NFT
        </div>
        <div className="text-white/20 text-base font-normal leading-5   mb-4 ">
    Your crypto black-belt
    <br />
    certificate
        </div>
        <button className="rounded-[8px] border-[1px] border-white/5 bg-white/5 flex w-[160px] pt-[10px] pb-[10px] pr-0 pl-0 justify-center items-center text-white/40 text-base font-normal leading-5 cursor-not-allowed">Claim</button>
      </div>
    
  );
};
export default MiddleRight;
