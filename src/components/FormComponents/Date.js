import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const Date = ({ date, onChangeDate }) => {

  return (
    <div className="h-16 w-full flex flex-col items-start justify-center border-l-2 border-alt border-dotted pb-2 pl-2 m-2">
          <label className='text-white'>Date: </label>
          <DatePicker
            className='w-full'
            selected={date}
            onChange={onChangeDate}
            dateFormat={"dd/MM/y"}
          />
        </div>
  )
}
