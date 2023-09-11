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
                className='w-full h-full my-6 text-white row-start-1 row-end-3 bg-test'>
                    <p>{item.username}</p>
                    <p>{item.activity}</p>
                    <p>{item.duration}</p>
                    <p>{item.description}</p>
                    <button onClick={handleBack}>Back</button>
                </div>
            )
        })
    )
}
