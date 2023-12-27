import React from 'react';
import statsIllustration from '../images/statsIllustration.svg';
import { ButtonHero } from './ButtonHero';

export const StatisticsHero = () => {
    return (
        <section className='bg-primary h-auto w-full flex flex-col items-center justify-center py-8 px-8 sm:px-24'>
            <div className='w-full flex flex-col-reverse md:flex-row-reverse items-center justify-center my-4'>
                <div className='flex flex-col items-center md:items-start lg:items-center justify-center text-center md:text-left text-3xl lg:text-4xl h-full w-full md:w-1/2 md:ml-8 my-4 md:my-0'>
                    <h1 className='text-white'><span className='text-alt italic'>Log </span>your exercises. </h1>
                    <h1 className='text-white my-2'><span className='text-alt italic'>Track </span>your progress. </h1>
                    <h1 className='text-white'><span className='text-alt italic'>Monitorr </span>your health. </h1>
                </div>
                <div className='h-full w-full md:w-1/2 flex flex-col items-center justify-center'>
                    <img
                        src={statsIllustration}
                        alt="Stats Illustration"
                        className='w-1/2 my-4'
                    />
                </div>
            </div>
            <div className='my-4 w-full lg:w-2/3'>
                <h3 className='italic text-white text-center'>"Tracking my progress through the detailed statistics on Monitorr has transformed my fitness journey, giving me insights that keep me motivated and on target every step of the way" - U Bolt, 2023</h3>
            </div>
            <ButtonHero 
            buttontext={"Explore"} 
            link="/statistics"
            className="my-4"
            />
        </section>
    )
}
