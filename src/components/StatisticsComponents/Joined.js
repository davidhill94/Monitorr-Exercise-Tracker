//This component filters through the users state to find the date the user was first added to the database

import React from 'react';

export const Joined = ({ users, athleteFilter }) => {
  return (
    users
        .filter(val => val.username === athleteFilter ? val.username : null)
        .map((item, index) => {
          return(
            <div className='flex flex-col m-4 text-xl'>
            <p
            key={index}
            >Joined: </p>
            <p className='text-alt italic'>{item.createdAt.substring(0, 10)}</p>
            </div>
          )
        })
  )
}
