import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const ExerciseForm = ({ handleSubmit, username, onChangeUsername, users, description, onChangeDescription, duration, onChangeDuration, date, onChangeDate, val }) => {
  return (
    <div
      className="py-10 px-6 w-full h-full flex items-center justify-center font-primary">
      <form
        className="w-auto max-h-full grid grid-cols-2 grid-rows-form-input"
        onSubmit={handleSubmit}>
        <div className="row-start-1 row-end-2 col-start-1 col-end-1 h-12 flex flex-col items-start justify-center border-b-2 border-r-2 border-alt border-dotted pb-2 pr-2 m-2">
          <label className='text-white'>Username: </label>
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
        <div className="row-start-1 row-end-2 col-start-2 col-end-3 h-12 flex flex-col items-start justify-center border-b-2 border-r-2 border-alt border-dotted pb-2 pr-2 m-2">
          <label className='text-white'>Date: </label>
          <DatePicker
          className='w-36 pl-2' 
            selected={date}
            onChange={onChangeDate}
          />
        </div>
        <div className="row-start-2 row-end-3 col-start-1 col-end-2 h-12 flex  flex-col items-start justify-center border-b-2 border-r-2 border-alt border-dotted pb-2 pr-2 m-2">
          <label className='text-white'>Activity: </label>
          <select
          className='w-36'
            required
            value={username}
            onChange={onChangeUsername}
          >
            <option>Bike</option>
            <option>Run</option>
          </select>
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-3 flex flex-col items-start justify-center border-b-2 border-r-2 border-alt border-dotted pb-2 pr-2 m-2">
          <label className='text-white pt-1 '>Description: </label>
          <textarea
            className='resize-none w-full p-1'
            type="text"
            required
            rows="3"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="row-start-2 row-end-3 col-start-2 col-end-3 h-12 flex flex-col items-start justify-center border-b-2 border-r-2 border-alt border-dotted pb-2 pr-2 m-2">
          <label className='text-white'>Duration: </label>
          <input
          className='w-36 pl-2'
            type="text"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="row-start-4 row-end-5 col-start-1 col-end-2 py-2  ml-2 text-center bg-alt">
          <input
            className='cursor-pointer'
            type="submit"
            value={`${val} Exercise`}
          />
        </div>
      </form>
    </div>
  )
}
