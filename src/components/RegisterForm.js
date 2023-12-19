import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const RegisterForm = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center text-black'>
      <form className='w-full md:w-1/2 my-4 px-2 lg:my-0'>
        <div className='inline-flex w-full'>
          <FaUser className='border-2 border-secondary bg-alt h-8 w-8 my-2 p-1' />
          <input
            className="border-solid border-2 border-secondary w-full h-8 my-2 p-1 bg-white"
            type="text"
            required
            placeholder='Name'
          />
        </div>
        <div className='inline-flex w-full'>
          <IoMdMail className='border-2 border-secondary bg-alt h-8 w-8 my-2 p-1' />
          <input
            className="border-solid border-2 border-secondary w-full h-8 my-2 p-1 bg-white"
            type="email"
            required
            placeholder='Email address'
          />
        </div>
        <div className='inline-flex w-full'>
          <FaLock className='border-2 border-secondary bg-alt h-8 w-8 my-2 p-1' />
          <input
            className="border-solid border-2 border-secondary w-full h-8 my-2 p-1 bg-white"
            type="password"
            required
            placeholder='Password'
          />
        </div>
        <div className='flex flex-wrap items-center justify-center my-2 lg:items-start lg:justify-start'>
          <input
            className='border-solid border-2 border-secondary text-secondary bg-alt px-1 cursor-pointer mr-2 my-1'
            type="submit"
            value="Register"
          />
          <div className='flex flex-row flex-wrap items-start justify-start'>
            <p className='text-white whitespace-nowrap mr-1'>Already have an account?</p>
            <Link className='text-alt font-bold' to="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
