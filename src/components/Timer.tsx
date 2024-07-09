import React from "react";
import { BsClock } from "react-icons/bs";

type TimerProps = {};

const Timer: React.FC<TimerProps> = () => {
  return (
    <div className="flex gap-6 relative pr-auto pl-auto pt-[80px] pb-[48px]">
      <div className="flex flex-col justify-end w-[320px] absolute bottom-0 custom-left"></div>
      <div className="w-[320px]">
        <div className="relative  p-3 rounded-xl border-[1px]  border-white/5 bg-white/5 backdrop-blur-xl flex flex-col gap-4">
          <div className="relative flex items-center gap-2 text-white/40 text-base font-normal leading-5 tracking-[.117px]">
            <div className="flex w-5 h-5 p-1 justify-center  items-center shrink-0 rounded-[1000px] bg-white/10">
              <BsClock />
            </div>
            Reward onlocks in
          </div>
          <hr className="dotted-line w-full my-2 " />
          <div className="pt-3 pb-3 pr-5 pl-5 flex items-center  justify-evenly gap-5 overflow-hidden  relative rounded-lg border-[1px] bg-white/20 border-white/20">
            <img
              src="bg2.png"
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="flex flex-col items-center z-[1] relative mx-w-10 min-w-10">
              <h3 className="text-3xl font-medium leading-10 not-italic">00</h3>
              <p className="text-center font-normal text-base text-white/20 leading-5 tracking-[.117px]">Days</p>
            </div>
            <div className="flex flex-col items-center z-[1] relative mx-w-10 min-w-10">
              {" "}
              <h3 className="text-3xl font-medium leading-10 not-italic">00</h3>
              <p className="text-center font-normal text-base text-white/20 leading-5 tracking-[.117px]" >Hrs</p>
            </div>
            <div className="flex flex-col items-center z-[1] relative mx-w-10 min-w-10">
              {" "}
              <h3 className="text-3xl font-medium leading-10 not-italic">00</h3>
              <p className="text-center font-normal text-base text-white/20 leading-5 tracking-[.117px]" >Mins</p>
            </div>
            <div className="flex flex-col items-center z-[1] relative mx-w-10 min-w-10">
              {" "}
              <h3 className="text-3xl font-medium leading-10 not-italic">00</h3>
              <p className="text-center font-normal text-base text-white/20 leading-5 tracking-[.117px]">Secs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timer;
