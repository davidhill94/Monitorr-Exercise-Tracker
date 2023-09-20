import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center text-black'>
    <form className='w-1/2'>
        <input 
        className="border-solid border-2 border-secondary w-full my-2 p-1 bg-white"
        type="text"
        required
        placeholder='Name'
        />
        <input 
        className="border-solid border-2 border-secondary w-full my-2 p-1 bg-white"
        type="email"
        required
        placeholder='Email address'
        />
        <input
        className="border-solid border-2 border-secondary w-full my-2 p-1 bg-white"
        type="password"
        required
        placeholder='Password'
        />
        <div className='flex items-center my-2'>
        <input
                className='border-solid border-2 border-secondary text-secondary bg-alt px-1 cursor-pointer mr-2'
                type="submit"
                value="Register"
            />
        <p className='text-white'>Already have an account? <span className='text-alt font-bold'><Link to="/login">Log in</Link></span></p>
        </div>   
    </form>
</div>
  )
}
