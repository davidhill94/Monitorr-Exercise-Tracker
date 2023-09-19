import React from 'react';

export const Info = ({ infoArr, setInfo, info, setInfoArr }) => {

    const handleBack = () => {
        setInfo(!info)
        setInfoArr([]);
    }

    return (
        infoArr.map((item, index) => {
            return (
                <div
                    key={index}
                    className='w-full h-full my-6 text-white row-start-1 row-end-3 grid grid-rows-info grid-cols-info'>
                    <div className='col-start-1 col-end-2 row-start-1 row-end-2 m-2'>
                        <p className='bg-alt text-secondary pl-2'>Athlete:</p>
                        <p className='bg-secondary text-white pl-2'>{item.username}</p>
                    </div>
                    <div className='col-start-2 col-end-3 row-start-1 row-end-2 m-2'>
                        <p className='bg-alt text-secondary pl-2'>Date:</p>
                        <p className='bg-secondary text-white pl-2'>{item.date.substring(0, 10)}</p>
                    </div>
                    <div className='col-start-1 col-end-2 row-start-2 row-end-3 m-2'>
                        <p className='bg-alt text-secondary pl-2'>Activity:</p>
                        <p className='bg-secondary text-white pl-2'>{item.activity}</p>
                    </div>
                    <div className='col-start-2 col-end-3 row-start-2 row-end-3 m-2'>
                        <p className='bg-alt text-secondary pl-2'>Duration:</p>
                        <p className='bg-secondary text-white pl-2'>{item.duration}</p>
                    </div>
                    <div className='col-start-1 col-end-3 row-start-3 row-end-4 m-2'>
                        <p className='bg-alt text-secondary pl-2'>Description:</p>
                        <p className='bg-secondary text-white pl-2'>{item.description}</p>
                    </div>
                    <div className='col-start-1 col-end-2 row-start-4 row-end-5 m-2'>
                        <button 
                        className='border-solid border-2 bg-alt px-1 cursor-pointer text-secondary'
                        onClick={handleBack}>Back to dashboard</button>
                    </div>
                </div>
            )
        })
    )
}
