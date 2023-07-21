import React from 'react';
import { AddButton } from './AddButton';

export const Activity = ({ activity, onChangeActivity, activities }) => {
  return (
    <div className="row-start-2 row-end-3 col-start-1 col-end-2 h-12 flex  flex-col items-start justify-center border-b-2 border-r-2 border-alt border-dotted pb-2 pr-2 m-2">
          <div className='w-full flex items-center justify-between'>
            <label className='text-white'>Activity: </label>
            <AddButton link={"user"}/>
          </div>
          <select
            className='w-36 text-secondary'
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
