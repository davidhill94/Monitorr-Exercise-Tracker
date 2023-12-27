import React from 'react';
import { HeroSection } from './HeroSection';
import { StatisticsHero } from './StatisticsHero';
import { Testimonials } from './Testimonials';
import { HeroCards } from './HeroCards';
import { HeroAbout } from './HeroAbout';

export const HomePage = () => {
  return (
    <section className='bg-primary'>
    <HeroSection />
    <StatisticsHero />
    <HeroCards />
    <HeroAbout />
    </section>
  )
}
