//Component used to display additional details regarding the users profile

import React from 'react';
import { Joined } from './Joined';
import { Total } from './Total';
import { Favourite } from './Favourite';
import { AverageDuration } from './AverageDuration';
import { TotalUsers } from './TotalUsers';

export const Details = ({ total, users, athleteFilter, mostCommon, averageDuration }) => {

  return (
    <div className='flex flex-col items-start justify-between min-w-fit h-full mt-4'>
      {athleteFilter === "All" || athleteFilter === ""
        ?
        <TotalUsers users={users}/>
        :
        <></>
      }
      <Joined users={users} athleteFilter={athleteFilter} />
      <Favourite mostCommon={mostCommon} />
      <AverageDuration averageDuration={averageDuration} />
      <Total total={total} />
    </div>
  )
}
