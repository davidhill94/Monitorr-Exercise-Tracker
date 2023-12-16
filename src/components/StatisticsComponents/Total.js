//This component renders the total number of exercises a user has carried out

import React from 'react';

export const Total = ({ total }) => {
  return (
    <div className='flex flex-col m-4 text-xl'>
       <p>Total Exercises: </p>
       <p className='text-alt italic'>{total}</p>
    </div>
  )
}
