import React from 'react';
import { AddButton } from './AddButton';

export const Activity = ({ activity, onChangeActivity, activities }) => {
  return (
    <div className="h-16 w-full flex flex-col items-start justify-center border-l-2 border-alt border-dotted pb-2 pl-2 m-2">
          <div className='w-full flex items-center justify-between'>
            <label className='text-white'>Activity: </label>
            <AddButton link={"user"}/>
          </div>
          <select
            className='w-full text-secondary'
            required
            value={activity}
            onChange={onChangeActivity}
          >
            {activities.map((act, index) => {
              return (
                <option key={index} value={act}>{act}</option>
              )
            })
            }
          </select>
        </div>
  )
}
