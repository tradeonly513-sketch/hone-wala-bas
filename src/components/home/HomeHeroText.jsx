import React from 'react';
import Video from './Video';

const HomeHeroText = () => {
  return (
    <div className="font-[font1] mt-72 lg:mt-0 pt-5 text-center relative z-20">
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        You do the work
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]">
        we
        <div className="h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden mx-2">
          <Video />
        </div>
        do the
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        stitches
      </div>
    </div>
  );
};

export default HomeHeroText;
