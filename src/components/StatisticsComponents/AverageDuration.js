import React, { useState } from 'react';

export const AverageDuration = ({ averageDuration }) => {

    return (
        <p>Avg. Duration: {isNaN(averageDuration) ? "Calculating..." : averageDuration === 0 ? 0 : Math.round(averageDuration) + " minutes"}</p>
    )
}
