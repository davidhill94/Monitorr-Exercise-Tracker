import React from 'react';

export const Duration = ({ duration, onChangeDuration }) => {
  return (
    <div className="row-start-2 row-end-3 col-start-2 col-end-3 h-12 flex flex-col items-start justify-center border-b-2 border-r-2 border-alt border-dotted pb-2 pr-2 m-2">
          <label className='text-white'>Duration (mins): </label>
          <input
            className='w-36 pl-2'
            type="text"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
  )
}
