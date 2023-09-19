import React from 'react';
import banner_two from '../images/banner_two.jpg';
import { AboutText } from './AboutText';

export const About = () => {
  return (
    <div className="bg-primary h-[calc(100vh-5rem)] w-full relative grid grid-cols-5 grid-rows-1 font-primary">
    <img
      className="h-[calc(100%-10rem)] w-full mt-10 object-cover col-start-1 col-end-6 row-start-1 items-center opacity-50"
      src={banner_two}
      alt="Bike" />
    <div className="col-start-1 col-end-3 row-start-1 z-10 h-[calc(100%-5rem)] relative grid grid-rows-hero-rows border-alt border-dotted border-t-2 border-r-2 border-b-2">
      <h2
        className="font-primary text-white h-full text-7xl leading-snug  self-start flex items-center pl-6 drop-shadow-2xl shadow-secondary row-start-2 row-end-3 font-bold">
        About<br></br> Monitorr.
      </h2>
    </div>
    <div className="col-start-3 col-end-6 row-start-1 h-[calc(100vh-15rem)] w-100 z-10 p-6 mt-10 flex flex-col items-center justify-center text-white">
        <AboutText />
    </div>
    </div>
  )
}
