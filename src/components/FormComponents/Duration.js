import React from 'react';

export const Duration = ({ duration, onChangeDuration }) => {
  return (
    <div className="h-16 w-full flex flex-col items-start justify-center border-l-2 border-alt border-dotted pb-2 pl-2 m-2">
          <label className='text-white'>Duration (mins): </label>
          <input
            className='w-full pl-2'
            type="text"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
  )
}
