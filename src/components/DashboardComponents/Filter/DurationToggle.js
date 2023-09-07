import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const DurationToggle = ({ handleDurationSlider, durationSlider }) => {
    return (
        <button
            onClick={() => handleDurationSlider()}
            className='bg-primary text-white p-1 inline-flex items-center justify-start h-5 text-16 mx-2'
        >Duration   {durationSlider ? <span className='ml-4 text-sm pointer-events-none	'><IoIosArrowUp /></span> : <span className='ml-4 text-sm pointer-events-none	'><IoIosArrowDown /></span>}</button>
    )
}
