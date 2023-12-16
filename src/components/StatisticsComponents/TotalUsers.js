//Renders the total number of users in the database

import React from 'react'

export const TotalUsers = ({ users }) => {
  return (
    <div className='flex flex-col m-4 pr-2 text-xl'>
        <p>Total Users: </p>
        <p className='text-alt italic'>{users.length}</p>
    </div>
  )
}
