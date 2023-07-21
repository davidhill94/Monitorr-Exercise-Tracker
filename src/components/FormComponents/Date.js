import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const Date = ({ date, onChangeDate }) => {
  return (
    <div className="row-start-1 row-end-2 col-start-2 col-end-3 h-12 flex flex-col items-start justify-center border-b-2 border-r-2 border-alt border-dotted pb-2 pr-2 m-2">
          <label className='text-white'>Date: </label>
          <DatePicker
            className='w-36 pl-2'
            selected={date}
            onChange={onChangeDate}
          />
        </div>
  )
}
