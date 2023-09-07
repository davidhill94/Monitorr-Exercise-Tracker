import React from 'react';

export const ActivityFilter = ({ filterExerciseByActivity, setActivityFilter, activities }) => {
    return (
        <select
            onChange={(value) => filterExerciseByActivity(value, setActivityFilter)}
            className='mx-2 text-white bg-primary h-5 text-16 cursor-pointer'
        >
            <option selected disabled>Activity</option>
            <option value={"All"}>All</option>
            {activities.map((act, index) => {
                return (
                    <option key={index} value={act}>{act}</option>
                )
            })
            }
        </select>
    )
}
