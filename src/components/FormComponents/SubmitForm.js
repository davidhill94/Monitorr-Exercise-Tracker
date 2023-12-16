import React from 'react';

export const SubmitForm = ({ val }) => {
  return (
    <div className="text-start ml-2 mt-2">
          <input
            className='border-solid border-2 bg-alt px-1 cursor-pointer'
            type="submit"
            value={`${val} Exercise`}
          />
        </div>
  )
}
