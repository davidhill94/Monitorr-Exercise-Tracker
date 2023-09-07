import React from 'react';
import { FaFilter } from 'react-icons/fa';

export const ToggleFilter = ({ toggleFilter, setFiltered, filtered, findLargestDuration, exercises, setMaxDuration, setUpper }) => {
  return (
    <button
          onClick={() => toggleFilter(setFiltered, filtered, findLargestDuration, exercises, setMaxDuration, setUpper)}
          className='w-6 h-6 border-2 border-alt text-alt flex items-center justify-center ml-2'>
          <FaFilter />
        </button>
  )
}
