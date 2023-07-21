import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

export const Filter = () => {

  const [filtered, setFiltered] = useState(false);

  const handleFilteredClick = () => {
    setFiltered(!filtered);
  }

  return (
    <div className='row-start-1 row-end-2 w-full flex items-center justify-start'>
      <div className='flex items-center justify-between w-fit'>
        <select className='mr-2'>
          <option selected disabled>Sort</option>
          <option>Duration H to L</option>
          <option>Duration L to H</option>
          <option>Date Newest</option>
          <option>Date Oldest</option>
        </select>
        <button
          onClick={handleFilteredClick}
          className='w-6 h-6 border-2 border-alt text-alt flex items-center justify-center'>
          <FaFilter />
        </button>
      </div>
      {filtered
        ?
        <div className='flex flex-row justify-between items-center ml-2 w-full'>
          <select>
            <option selected disabled>Athlete</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <select>
            <option selected disabled>Activity</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <p>Duration</p>
          <div className='flex justify-between items-center'>
            <p>From:</p>
            <p>To:</p>
          </div>
        </div>
        :
        <></>
      }
    </div>
  )
}
