import React from 'react';
import banner_two from '../images/banner_two.jpg';
import { AboutText } from './AboutText';
import { PageHeaderTop } from './PageHeader';

export const About = () => {
  return (
    <div className="bg-primary w-full relative font-primary">
      <PageHeaderTop text={"About Monitorr"} banner={banner_two} />
      <div className="flex flex-col items-center justify-center w-full h-auto p-6">
        <AboutText />
      </div>
    </div>
  )
}
