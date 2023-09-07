import React from 'react';

export const SelectFilter = ({ handleFilterOption, oldestDate, newestDate, durationHighToLow, durationLowToHigh, exercises, setExercises }) => {
    return (
        <select className='mr-2' onClick={(e) => handleFilterOption(e, oldestDate, newestDate, durationHighToLow, durationLowToHigh, exercises, setExercises)}>
            <option selected disabled>Sort</option>
            <option value={"Oldest"}>Oldest</option>
            <option value={"Newest"}>Newest</option>
            <option value={"Longest"}>Longest</option>
            <option value={"Shortest"}>Shortest</option>
        </select>
    )
}
