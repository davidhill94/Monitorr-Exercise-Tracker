import React from 'react';

export const UserSelect = ({ users, filterAthlete, setAthleteFilter, exercises, setMostCommon, findMostCommonWord, setAverageDuration, findAverageDuration }) => {

    const handleFunctions = (e) => {
        filterAthlete(e, setAthleteFilter);
        findMostCommonWord(exercises, setMostCommon);
        findAverageDuration(exercises, setAverageDuration);
    }

    return (
        <select
            className='mx-2 text-white bg-primary h-5 text-16 cursor-pointer'
            onChange={(e) => {
                handleFunctions(e)
            }}
        >
            <option selected disabled>Athlete</option>
            <option value={"All"}>All</option>
            {users.map((user, index) => {
                return (
                    <option key={index} value={user.username}>{user.username}</option>
                )
            })
            }
        </select>
    )
}
