import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export const UserForm = ({ handleSubmitUsername, username, onChangeUsername }) => {

    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(true);
        setTimeout(() => {
            setCheck(false);
        }, "3000");
    };

  return (
    <form onSubmit={handleSubmitUsername} className='w-44 h-auto flex flex-col items-start my-4 md:my-0 md:mx-6 lg:mx-2'>
                    <div className='border-r-2 border-b-2 border-alt border-dotted pr-1'>
                        <label className="my-2 text-white">Athlete: </label>
                        <input
                            className="border-solid border-2 border-secondary w-full my-2 p-1 bg-white"
                            type="text"
                            required
                            value={username}
                            onChange={onChangeUsername}
                            placeholder='Name'
                        />
                    </div>
                    <div className='mt-2 w-44 flex items-center'>
                        <input
                            className='border-solid border-2 bg-alt px-1 cursor-pointer'
                            onClick={handleCheck}
                            type="submit"
                            value="Create User"
                        />
                        {check ?
                    <FaCheckCircle className='ml-2 text-alt' />
                    :
                    <></>
                }
                    </div>
                </form>
  )
}
