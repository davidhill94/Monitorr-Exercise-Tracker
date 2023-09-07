import React from 'react';

export const AthleteFilter = ({ filterExerciseByAthlete, setUserFilter, users }) => {
    return (
        <select
            onChange={(user) => filterExerciseByAthlete(user, setUserFilter)}
            className='mx-2 text-white bg-primary h-5 text-16 cursor-pointer'
        >
            <option selected disabled>Athlete</option>
            <option value={"All"}>All</option>
            {users.map((user, index) => {
                return (
                    <option key={index} value={user}>{user}</option>
                )
            })
            }
        </select>
    )
}
