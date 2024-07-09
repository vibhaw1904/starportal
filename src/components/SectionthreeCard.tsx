import React from 'react';
import { BiBook, BiBookOpen } from 'react-icons/bi';

type SectionthreeCardProps = {

};

const SectionthreeCard:React.FC<SectionthreeCardProps> = () => {
    
    return <div className='w-max h-full mt-[30px] relative cursor-pointer overflow-hidden rounded-2xl border-[1px] flex items-center justify-center border-white/5'>
        <img src="sec3.svg" className='object-cover bg-white/5' alt="" />
        <div className='w-full mx-w-[1200px] h-1/5 absolute bottom-[1px] left-[1px] flex justify-between items-center p-[6px] z-[3] rounded-b-2xl	'>
        <div className='not-italic  font-normal  tracking-[.117px]'>
            <h1 className='text-white text-2xl leading-[30px] mix-blend-plus-lighter '>Web3 +  Degan Glossary</h1>
            <p className='text-white/40 text-base leading-5 mix-blend-plus-lighter'>Your own crypto dictionary</p>
        </div>
        <div className='flex w-16 h-16 p-5 justify-center  items-center rounded-[1000px] border-[1px] bg-white/10 border-white/10 backdrop-blur-xl text-lg'>
            <BiBookOpen/>
        </div>
        </div>
    </div>
}
export default SectionthreeCard;