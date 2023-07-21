import React from 'react';

export const SubmitForm = ({ val }) => {
  return (
    <div className="row-start-4 row-end-5 col-start-1 col-end-2 text-start ml-2">
          <input
            className='border-solid border-2 bg-alt px-1 cursor-pointer'
            type="submit"
            value={`${val} Exercise`}
          />
        </div>
  )
}
