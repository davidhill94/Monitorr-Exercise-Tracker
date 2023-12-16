//Displays the favourite activity carried out by each user

import React from 'react';

export const Favourite = ({ mostCommon }) => {

    return (
        <div className='flex flex-col m-4 text-xl'>
            <p>Favourite: </p>
            <p className='text-alt italic'>{mostCommon}</p>
        </div>
    )
}
