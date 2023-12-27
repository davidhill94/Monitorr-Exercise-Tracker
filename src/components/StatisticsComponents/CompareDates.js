//Currently unused but may be useful if building a function to convert dates and compare them

import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';

export const CompareDates = () => {

const [selectedDate, setSelectedDate] = useState(null);

//Sets state when new date is selected
const handleDateChange = (date) => {
    setSelectedDate(date);
}

  return (
    <div className='flex flex-col'>
        <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        />
    </div>
  )
}
