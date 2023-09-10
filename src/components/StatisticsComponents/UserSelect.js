//Renders a select form to switch between users and generate the selected users data

import React from 'react';

export const UserSelect = ({ users, filterAthlete, setAthleteFilter, exercises, setMostCommon, findMostCommonWord, setAverageDuration, findAverageDuration }) => {

    const handleFunctions = (e) => {
        filterAthlete(e, setAthleteFilter);
        findMostCommonWord(exercises, setMostCommon);
        findAverageDuration(exercises, setAverageDuration);
    }

    return (
        <select
            className='pr-2'
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
