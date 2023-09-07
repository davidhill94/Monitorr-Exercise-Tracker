import React, { useEffect, useState } from 'react';
import { Joined } from './Joined';
import { Total } from './Total';
import { Favourite } from './Favourite';
import { AverageDuration } from './AverageDuration';
import { findDates } from './Functions/DatesArr';
import { findDuration } from './Functions/DurationArr';
import { CompareDates } from './CompareDates';

export const Details = ({ total, users, athleteFilter, mostCommon, averageDuration, exercises, setDatesArr, datesArr, durationArr, setDurationArr, setGraphArr }) => {

  const handleFind = (exercises, setDatesArr, datesArr, setDurationArr, durationArr) => {
    findDates(exercises, setDatesArr);
    findDuration(exercises, setDurationArr);
  }

  useEffect(() => {
    handleFind(exercises, setDatesArr, datesArr, setDurationArr, durationArr)
  }, [])

  return (
    <div className='flex flex-col items-start justify-start min-w-fit h-full p-4 bg-secondary'>
      <Joined users={users} athleteFilter={athleteFilter} />
      <Favourite mostCommon={mostCommon} />
      <AverageDuration averageDuration={averageDuration} />
      <Total total={total} />
      <button onClick={() => handleFind(exercises, setDatesArr, datesArr, setDurationArr, durationArr)}>Find</button>
      <CompareDates datesArr={datesArr} exercises={exercises} setDatesArr={setDatesArr} durationArr={durationArr} setGraphArr={setGraphArr}/>
      <button onClick={() => findDuration(exercises, setDurationArr)}>Dur</button>
    </div>
  )
}
