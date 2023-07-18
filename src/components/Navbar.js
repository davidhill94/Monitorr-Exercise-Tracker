import React from 'react';
import { Link } from 'react-router-dom';
import MonitorrLogo from '../images/Monitorr_wrapped.png';
import { FaUser } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="bg-primary text-white h-20 w-full flex flex-row justify-between items-center px-6 static top-0 left-0 font-primary text-xl">
      <Link to="/">
        <img 
        className="h-8 w-auto"
        src={MonitorrLogo} 
        alt="Monitorr Logo"/>
      </Link>
      <div>
        <ul className='flex flex-row'>
          <li className='mx-6'>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className='mx-6'>
            <Link to="/create">Exercise +</Link>
          </li>
          <li className='mx-6'>
            <Link to="/user">Users</Link>
          </li>
          <li className='mx-6 flex items-center justify-center'>
            <Link to="/register"><FaUser /></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
