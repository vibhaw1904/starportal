import React from "react";
import { RiDropdownList } from "react-icons/ri";
type TopCardProps = {
  title: string;
  description: string;
  quests: number;
  xp: number;
  imageUrl: string;
};

const TopCard: React.FC<TopCardProps> = ({
  title,
  description,
  quests,
  xp,
  imageUrl,
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl text-white  shadow-lg p-4 flex w-[520px]">
      <div className="p-6 flex items-center gap-6 cursor-pointer rounded-3xl border-white/5 border-[1px] border-b-0 transition ease">
        <div className="absolute top-2  right-3 p-2 text-[#fff3] text-base transition ease-in delay-300">
  <RiDropdownList/>
        </div>
        <div className="lex-shrink-0 flex-grow-0 w-[270px] h-[180px] w p-2 rounded-2xl border-[1px] border-white/5 relative">
          
          <img src={imageUrl} alt={title} className="w-full h-full rounded-xl object-cover " />

       
          <div className="w-max h-12 pt-[11px] pb-[11px] pr-6 pl-6 rounded-[1000px] border-[1px] border-white/5 shadow-sm bg-white/5 backdrop-blur-md absolute bottom-4  left-1/2	-translate-x-2/4 mb-0 ">
            {quests} Quests
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl mb-2 font-normal	 font-bold ">{title}</div>
          <p className="text-gray-400">{description}</p>
          <div className="mt-2 flex items-center">
            <span className="text-yellow-400">
              <img src="coin.svg" alt="XP" className="inline-block w-6 h-6" />
            </span>
            <span className="ml-2">{xp} XPs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
