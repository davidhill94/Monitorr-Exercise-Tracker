import React from 'react';
import { FaCheck } from 'react-icons/fa';
import ReactSlider from 'react-slider';

export const DurationSlider = ({ durationSlider, maxDuration, lower, setUpper, setLower, upper, handleSettingDurationFilter }) => {
  return (
    <div
              className={`flex justify-between items-center absolute bg-primary px-2 w-64 mt-1 shadow-xl shadow-black ml-2 ${durationSlider === true ? "opacity-100" : "opacity-0"}`}>
              <div className='flex flex-row items-center justify-start'>
                <p className='mr-2 text-white w-4 text-center'>{lower}</p>
                <ReactSlider
                  className="w-32 h-10 flex items-center justify-center"
                  trackClassName='absolute left-0 right-0 h-2 bg-alt rounded-full'
                  thumbClassName='bg-white w-4 h-4 rounded-full leading-4 text-secondary cursor-grab'
                  defaultValue={[0, maxDuration]}
                  ariaLabel={['Lower thumb', 'Upper thumb']}
                  renderThumb={(props, state) => <div {...props}></div>}
                  pearling
                  max={maxDuration}
                  minDistance={5}
                  onChange={(val) => {
                    setUpper(val[1])
                    setLower(val[0])
                  }}
                />
                <p className='ml-2 text-white w-4 text-center'>{upper}</p>
              </div>
              <button 
              className='border-2 border-alt text-alt flex w-6 h-6 items-center justify-center mx-2'
              onClick={handleSettingDurationFilter}
              ><FaCheck /></button>
            </div>
  )
}
