import React from 'react';

export const Joined = ({ users, athleteFilter }) => {
  return (
    users
        .filter(val => val.username === athleteFilter ? val.username : null)
        .map((item, index) => {
          return(
            <p
            key={index}
            className='bg-secondary text-white'
            >Joined: {item.createdAt.substring(0, 10)}</p>
          )
        })
  )
}
