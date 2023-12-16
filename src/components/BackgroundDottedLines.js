import React from 'react';

export const BackgroundDottedLinesTop = () => {
    return (
        <div className='flex flex-row items-center justify-center w-full mb-6'>
            <p className='h-12 w-1/2 mx-4 border-alt border-dotted border-t-2 border-r-2'></p>
            <p className='h-12 w-1/2 mx-4 border-alt border-dotted border-t-2 border-l-2'></p>
        </div>
    )
}

export const BackgroundDottedLinesBottom = () => {
    return (
        <div className='flex flex-row items-center justify-center w-full mt-6'>
            <p className='h-12 w-1/2 mx-4 border-alt border-dotted border-b-2 border-r-2'></p>
            <p className='h-12 w-1/2 mx-4 border-alt border-dotted border-b-2 border-l-2'></p>
        </div>
    )
}
