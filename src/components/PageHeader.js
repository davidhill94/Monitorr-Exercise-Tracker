import React from 'react';
import { BackgroundDottedLinesBottom, BackgroundDottedLinesTop } from './BackgroundDottedLines';

export const PageHeader = ({ text }) => {
  return (
    <div className="col-start-8 col-end-12 row-start-1 z-10 h-[calc(100%-5rem)] relative grid grid-rows-hero-rows border-alt border-dotted border-l-2 border-t-2 border-b-2">
      <h2
        className="font-primary text-white h-full text-6xl leading-snug  self-start flex items-center pl-6 drop-shadow-2xl shadow-secondary row-start-2 row-end-3 font-bold max-lg:text-4xl max-md:text-2xl">
        {text}
      </h2>
    </div>
  )
}


export const PageHeaderTop = ({ text, banner }) => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className='bg-cover bg-center py-4'
    >
      <BackgroundDottedLinesTop />
      <h2
        className="font-primary text-white text-lg drop-shadow-2xl shadow-secondary text-center sm:text-3xl">
        {text}
      </h2>
      <BackgroundDottedLinesBottom />
    </div>
  )
}

