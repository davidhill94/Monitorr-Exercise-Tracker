//Displays the average duration of all exercises in the exercises array

import React from 'react';

export const AverageDuration = ({ averageDuration }) => {

    return (
        <div className='flex flex-col border-alt border-dotted border-r-2 border-b-2 w-full pl-1 pb-1 text-white'>
            <p>Avg. Duration: </p>
            <p>{isNaN(averageDuration) ? "Calculating..." : averageDuration === 0 ? 0 : Math.round(averageDuration) + " minutes"}</p>
        </div>
    )
}
