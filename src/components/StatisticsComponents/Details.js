//Component used to display additional details regarding the users profile

import React from 'react';
import { Joined } from './Joined';
import { Total } from './Total';
import { Favourite } from './Favourite';
import { AverageDuration } from './AverageDuration';
import { TotalUsers } from './TotalUsers';

export const Details = ({ total, users, athleteFilter, mostCommon, averageDuration }) => {

  return (
    <div 
    className='flex flex-row items-center justify-center w-full mt-4 flex-wrap text-center text-white'>
      {athleteFilter === "All" || athleteFilter === ""
        ?
        <TotalUsers 
        users={users}/>
        :
        <></>
      }
      <Joined 
      users={users} athleteFilter={athleteFilter} />
      <Favourite
      mostCommon={mostCommon} />
      <AverageDuration 
      averageDuration={averageDuration} />
      <Total
      total={total} />
    </div>
  )
}
