import React from 'react';
import SectionTwoCard from './SectionTwoCard';

type SectiontwoProps = {};

const Sectiontwo: React.FC<SectiontwoProps> = () => {
  const cardsData = [
    {
      imageUrl: 'catCard.png',
      title: 'How to plan your retirement with crypto?',
    },
    {
      imageUrl: 'bumble.png',
      title: 'Why arre there limited bitcoins',
    },
    {
      imageUrl: 'horse.png',
      title: 'How does Uniswap actually work?',
    },
    {
      imageUrl: 'monkey.png',
      title: 'How to spot crypto projects to invest in?',
    },
  ];

  return (
    <div className='mx-w-[1200px] mt-7 mb-16 border-t-[1px] border-white/10'>
      <div className='flex flex-col items-center justify-center font-normal font-outfit mt-10 mb-10'>
        <div className='text-white text-2xl leading-8'>
          Top Crypto Creators and Projects to Follow
        </div>
        <div className='text-white/30 text-base leading-5 align-middle'>
          Answers to your crypto doubts, straight from the experts
        </div>
      </div>
      <div className='mt-10 flex flex-wrap gap-4 mb-5 justify-center'>
        {cardsData.map((card, index) => (
          <SectionTwoCard key={index} imageUrl={card.imageUrl} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Sectiontwo;
