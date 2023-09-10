//Displays the favourite activity carried out by each user

import React from 'react';

export const Favourite = ({ mostCommon }) => {

    return (
        <div className='flex flex-col border-alt border-dotted border-r-2 border-b-2 w-full pl-1 pb-1 text-white'>
            <p>Favourite: </p>
            <p>{mostCommon}</p>
        </div>
    )
}
