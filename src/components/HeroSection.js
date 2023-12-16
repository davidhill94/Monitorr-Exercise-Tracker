import React from 'react';
import banner_two from '../images/banner_two.jpg';
import { ButtonHero, ButtonHeroAlt } from './ButtonHero';
import { BackgroundDottedLinesBottom, BackgroundDottedLinesTop } from './BackgroundDottedLines';

export const HeroSection = () => {
  return (
    <div className="bg-primary h-auto w-full relative flex flex-col items-center justify-center bg-bannerHero bg-left bg-cover px-4 py-8">
      <BackgroundDottedLinesTop />
      <div className='lg:flex lg:flex-row lg:w-full lg:items-center lg:justify-center'>
        <h2 className='font-primary text-white text-4xl text-center lg:w-full lg:mx-4'>Log. Track. Monitorr.</h2>
        <div className="flex flex-col w-full h-auto bg-nonelg:w-full lg:mx-4">
          <div className='flex flex-col items-center justify-center my-6 sm:flex-row lg:my-0'>
            <ButtonHero buttontext={"Monitorr Now"} />
            <ButtonHeroAlt buttontext={"Dashboard"} />
          </div>
          <p className='text-white italic text-center px-2'>Stay on top of your fitness habits with Monitorr</p>
        </div>
      </div>
      <BackgroundDottedLinesBottom />
    </div>
  )
}
