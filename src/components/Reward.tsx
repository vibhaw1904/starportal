import React from "react";
import { BiCheck } from "react-icons/bi";

type RewardProps = {};

const Reward: React.FC<RewardProps> = () => {
  return (
    <div className="w-[320px] rounded-[15px] border-[1px]  mt-2 bg-white/5 border-white/5 p-3 relative ">
      <img
        src="reward.gif"
        alt=""
        className="w-[296px] h-[296px]  rounded-md border-[1px] border-white/10 bg-white/5  mb-3"
      />
      <div
        className="
    absolute
    top-6
    right-6
    p-0.5
    px-1
    rounded
    bg-black bg-opacity-60
    text-base
    font-normal
    leading-5
    text-white
"
        style={{
          color: "var(--White-60, rgba(255, 255, 255, .8))",
          textShadow: "0px 0px 2px rgba(0, 0, 0, .4)",
        }}
      >
        Lucky Draw
      </div>
<div className="flex items-center justify-between  text-white/40 text-base font-normal leading-5 mb-3">
<div>Exclusive community</div>
<span><p>Eardrop</p></span>
</div>
<hr className="dotted-line w-full my-2 "/>
<div className="flex items-center justify-between  text-white/40 text-[14px] font-normal leading-4 mt-3">
<div className="">Complete all essentials</div>
<div className="flex w-4 h-4 justify-center items-center shrink-0 p-1 rounded-[1000px] border-[1px] border-bg/10 bg-white/5 backdrop-blur-md self-end text-sm "><BiCheck/></div>

</div>
<div className="flex items-center justify-between  text-white/40 text-[14px] font-normal leading-4 mt-3">
<div className="">Complete atleast 1 Alphahub today</div>
<div className="flex w-4 h-4 justify-center items-center shrink-0 p-1 rounded-[1000px] border-[1px] border-bg/10 bg-white/5 backdrop-blur-md self-end text-sm "><BiCheck/></div>

</div>
<div className="flex w-full pt-[10px] pb-[10px] pl-0 pr-0 justify-center items-center gap-2  rounded-[8px] border-[1px] border-white/10 bg-white/10 cursor-pointer align-middle text-center mt-3 leading-5"><div>Claim Now</div><img src="arrow.svg" alt="" /></div>

    </div>
  );
};
export default Reward;
