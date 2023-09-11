//Renders the loading screen whilst API data is being called

import React from 'react';
import { FaRunning } from 'react-icons/fa'
export const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <p>
            <FaRunning className="animate-ping text-alt text-4xl" />
        </p>
    </div>
  )
}
