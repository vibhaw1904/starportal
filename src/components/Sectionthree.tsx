import React from 'react';
import SectionthreeCard from './SectionthreeCard';

type SectionthreeProps = {
    
};

const Sectionthree:React.FC<SectionthreeProps> = () => {
    
    return <section>
        <div className='mx-w-[1200px] mt-7 p-32'>
    <div className='flex flex-col justify-center items-center font-normal not-italic tracking-[.117px] gap-2 '>
        <div className='text-white text-2xl leading-6'>
            Crypto Dictionary
        </div>

        <div className='text-white/40 text-base leading-5  align-middle text-center'>Your one-stop to catch up all crypto terms</div>
    </div>
    <SectionthreeCard/>
        </div>
    </section>
}
export default Sectionthree;