import React from 'react'

export const TotalUsers = ({ users }) => {
  return (
    <div className='flex flex-col border-alt border-dotted border-r-2 border-b-2 w-full pl-1 pb-1 text-white'>
        <p>Total Users: </p>
        <p>{users.length}</p>
    </div>
  )
}
