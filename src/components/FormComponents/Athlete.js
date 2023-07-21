import React from 'react';
import { AddButton } from './AddButton';

export const Athlete = ({ users, username, onChangeUsername }) => {

    return (
            <div className="row-start-1 row-end-2 col-start-1 col-end-1 h-12 flex flex-col items-start justify-center border-b-2 border-r-2 border-alt border-dotted pb-2 pr-2 m-2">
                <div className='w-full flex items-center justify-between'>
                    <label className='text-white'>Athlete: </label>
                    <AddButton link={"user"}/>
                </div>
                <select
                    className='w-36'
                    required
                    value={username}
                    onChange={onChangeUsername}
                >
                    {users.map((user, index) => {
                        return (
                            <option key={index} value={user}>{user}</option>
                        )
                    })
                    }
                </select>
            </div>
    )
}
