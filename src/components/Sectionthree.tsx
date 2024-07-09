import React from "react";
import SectionthreeCard from "./SectionthreeCard";
import StickyButton from "./StickyButton";

type SectionthreeProps = {};

const Sectionthree: React.FC<SectionthreeProps> = () => {
  return (
    <section>
      <div className="mx-w-[1200px] mt-7 pl-32 pr-32 pt-5 border-t-[1px] border-white/10 ">
        <div className="flex flex-col justify-center items-center font-normal not-italic tracking-[.117px] gap-2 ">
          <div className="text-white text-2xl leading-6">Crypto Dictionary</div>

          <div className="text-white/40 text-base leading-5  align-middle text-center">
            Your one-stop to catch up all crypto terms
          </div>
          <SectionthreeCard />

        </div>
    
      </div>
      <StickyButton/>
    </section>
  );
};
export default Sectionthree;
