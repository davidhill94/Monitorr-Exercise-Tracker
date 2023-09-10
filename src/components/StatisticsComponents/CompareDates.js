import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { findDates } from './Functions/DatesArr';

export const CompareDates = ({ datesArr, exercises, setDatesArr, durationArr, setGraphArr }) => {

const [selectedDate, setSelectedDate] = useState(null);
const [convertedDate, setConvertedDate] = useState(null);

//Sets state when new date is selected
const handleDateChange = (date) => {
    setSelectedDate(date);
}

//Converts date from dd Month yy eg. 24 Sep 1994 to yyyy-mm-dd such as 1994-09-24 and sets it to state of convertedDate
const formatDate = (inputDate) => {
    // Parse the input date string
    const date = new Date(inputDate);
    
    // Get the components of the date
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    // Format the date as yyyy-mm-dd
    const formattedDate = `${year}-${month}-${day}`;
    
    setConvertedDate(formattedDate);
    console.log(convertedDate);
}

//Compares two given dates to see which occured first
const compareDatesFunc = () => {
    if(selectedDate){
        const compareDate = new Date(convertedDate);
        const selecteDateObj = new Date(selectedDate);

        if(selecteDateObj < compareDate){
            console.log(`Selected: ${selecteDateObj} + Exercise: ${compareDate} - Selected is before`)
        } else if (selecteDateObj > compareDate) {
            console.log(`Selected: ${selecteDateObj} + Exercise: ${compareDate} - Selected is after`)
        } else {
            console.log("Selected date is today")
        }
    } else {
        console.log("No Date")
    }
}

  return (
    <div className='flex flex-col'>
        <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        />
        <button onClick={() => findDates(exercises, setDatesArr)}>create dates</button>
    </div>
  )
}
