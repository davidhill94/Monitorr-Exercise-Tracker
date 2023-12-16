//Displays the average duration of all exercises in the exercises array

import React from 'react';

export const AverageDuration = ({ averageDuration }) => {

    return (
        <div className='flex flex-col m-4 text-xl'>
            <p>Avg. Duration: </p>
            <p className='text-alt italic'>{isNaN(averageDuration) ? "Calculating..." : averageDuration === 0 ? 0 : Math.round(averageDuration) + " minutes"}</p>
        </div>
    )
}
