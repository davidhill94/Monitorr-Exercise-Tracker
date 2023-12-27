import React from 'react';
import aboutIllustration from '../images/about.svg';
import { ButtonHeroAlt } from './ButtonHero';

export const HeroAbout = () => {
    return (
        <section className='bg-primary w-full h-auto flex flex-col lg:flex-row items-center justify-center py-8 px-6 sm:px-24'>
            <div className='h-full w-full md:w-full flex flex-col items-center justify-center my-4'>
                <img
                    src={aboutIllustration}
                    alt="Stats Illustration"
                    className='w-1/2 my-4'
                />
            </div>
            <div className='flex flex-col items-center justify-center text-white my-4 w-full'>
                <h3 className='text-3xl lg:text-4xl my-2 w-full md:w-2/3 text-center'><span className='text-alt italic'>Who</span> are we?</h3>
                <p className='text-lg italic text-center my-2 w-full md:w-2/3'>Monitorr: A personal project by <span className='text-alt'><a href="http://thehillcoder.com" target='_blank' rel="noreferrer">David Hill</a></span>, showcasing backend skills in Node.js, Express.js, MongoDB, as well as existing Front End skills such as React and TailwindCSS.</p>
                <ButtonHeroAlt
                    buttontext={"About"}
                    link="/about"
                />
            </div>
        </section>
    )
}
