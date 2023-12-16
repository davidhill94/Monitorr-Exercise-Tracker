//Select form that switches the selected year and renders the graph for the selected year

import React from 'react';
import { years } from './YearData';
import { handleYear } from './Functions/SetYear';

export const YearSelector = ( { year, setYear }) => {
  return (
     <select
            className='pr-2 mt-2 text-2xl sm:text-xl'
            onChange={(e) => handleYear(e, setYear)}
        >
            {years
            .map((item, index) => {
                return (
                    <option selected={3} key={index} value={item.year}>{item.year}</option>
                )
            })
            }
        </select>
  )
}
