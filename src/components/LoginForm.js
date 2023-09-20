import React from 'react';
import { Link } from 'react-router-dom';

export const LoginForm = ({ email, setEmail, password, setPassword }) => {

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email)
  console.log(password)
}

  return (
    <div className='h-full w-full flex flex-col items-center justify-center text-black'>
        <form className='w-1/2'>
            <input 
            onChange={(e) => {setEmail(e.target.value)}}
            className="border-solid border-2 border-secondary w-full my-2 p-1 bg-white"
            type="email"
            required
            placeholder='Email address'
            />
            <input
            onChange={(e) => {setPassword(e.target.value)}}
            className="border-solid border-2 border-secondary w-full my-2 p-1 bg-white"
            type="password"
            required
            placeholder='Password'
            />
            <div className='flex items-center my-2'>
            <input
                    className='border-solid border-2 border-secondary text-secondary bg-alt px-1 cursor-pointer mr-2'
                    type="submit"
                    value="Login"
                    onClick={(e) => handleSubmit(e)}
                />
            <p className='text-white'>Don't have an account? <span className='text-alt font-bold'><Link to="/register">Register</Link></span></p>
            </div>   
        </form>
    </div>
  )
}
