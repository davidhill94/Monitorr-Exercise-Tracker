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
                    className='w-full h-full text-white flex flex-col items-center justify-center'>
                    <div className='flex flex-row w-full items-center justify-center px-2 my-2 gap-2 md:w-2/3'>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <p className='bg-alt text-secondary pl-2 py-1 w-full'>Athlete:</p>
                            <p className='bg-secondary text-white pl-2 py-1 w-full'>{item.username}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <p className='bg-alt text-secondary pl-2 py-1 w-full'>Date:</p>
                            <p className='bg-secondary text-white pl-2 py-1 w-full'>{item.date.substring(0, 10)}</p>
                        </div>
                    </div>
                    <div className='flex flex-row w-full items-center justify-center px-2 my-2 gap-2 md:w-2/3'>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <p className='bg-alt text-secondary pl-2 py-1 w-full'>Activity:</p>
                            <p className='bg-secondary text-white pl-2 py-1 w-full'>{item.activity}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <p className='bg-alt text-secondary pl-2 py-1 w-full'>Duration:</p>
                            <p className='bg-secondary text-white pl-2 py-1 w-full'>{item.duration}</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full px-2 my-2 md:w-2/3'>
                        <p className='bg-alt text-secondary pl-2 py-1 w-full'>Description:</p>
                        <p className='bg-secondary text-white pl-2 py-1 w-full'>{item.description}</p>
                    </div>

                    <div className='flex items-center justify-center w-2/3 my-2 md:justify-start pl-2'>
                        <button
                            className='border-solid border-2 bg-alt px-1 cursor-pointer text-secondary whitespace-nowrap'
                            onClick={handleBack}>Back to dashboard</button>
                    </div>
                </div>
            )
        })
    )
}
