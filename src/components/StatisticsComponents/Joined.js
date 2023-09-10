//This component filters through the users state to find the date the user was first added to the database

import React from 'react';

export const Joined = ({ users, athleteFilter }) => {
  return (
    users
        .filter(val => val.username === athleteFilter ? val.username : null)
        .map((item, index) => {
          return(
            <div className='flex flex-col border-alt border-dotted border-r-2 border-b-2 w-full pl-1 pb-1 text-white'>
            <p
            key={index}
            className='text-white'
            >Joined: </p>
            <p>{item.createdAt.substring(0, 10)}</p>
            </div>
          )
        })
  )
}
