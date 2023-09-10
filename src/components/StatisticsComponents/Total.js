import React from 'react';

export const Total = ({ total }) => {
  return (
    <div className='flex flex-col border-alt border-dotted border-r-2 border-b-2 w-full pl-1 pb-1 text-white'>
       <p className='text-white'>Total Exercises: </p>
       <p>{total}</p>
    </div>
  )
}
