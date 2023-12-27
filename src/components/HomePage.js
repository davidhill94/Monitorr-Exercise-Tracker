import React from 'react';
import { HeroSection } from './HeroSection';
import { StatisticsHero } from './StatisticsHero';
import { Testimonials } from './Testimonials';
import { HeroCards } from './HeroCards';

export const HomePage = () => {
  return (
    <section className='bg-primary'>
    <HeroSection />
    <StatisticsHero />
    <HeroCards />
    </section>
  )
}
