import React from 'react';
import { years } from './YearData';

export const YearSelector = () => {
  return (
    <select
            className='pr-2 mt-2'
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
