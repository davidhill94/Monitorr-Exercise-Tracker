import React from 'react';
import { AddButton } from './AddButton';

export const Athlete = ({ users, username, onChangeUsername }) => {

    return (
            <div className="h-16 w-full flex flex-col items-start justify-center border-l-2 border-alt border-dotted pb-2 pl-2 m-2">
                <div className='w-full flex items-center justify-between'>
                    <label className='text-white'>Athlete: </label>
                    <AddButton link={"user"}/>
                </div>
                <select
                    className='w-full'
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
