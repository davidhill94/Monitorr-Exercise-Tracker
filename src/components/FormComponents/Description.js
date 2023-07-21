import React from 'react';

export const Description = ({ description, onChangeDescription }) => {
  return (
    <div className="row-start-3 row-end-4 col-start-1 col-end-3 flex flex-col items-start justify-center border-b-2 border-r-2 border-alt border-dotted pb-2 pr-2 m-2">
    <label className='text-white pt-1 '>Description: </label>
    <textarea
      className='resize-none w-full p-1'
      type="text"
      required
      rows="3"
      value={description}
      onChange={onChangeDescription}
      placeholder='Tell us about your activity'
    />
  </div>
  )
}
