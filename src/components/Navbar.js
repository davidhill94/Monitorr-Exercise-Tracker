import React from 'react';
import { NavLink } from 'react-router-dom';
import MonitorrLogo from '../images/Monitorr_wrapped.png';
import { FaUser, FaBars } from 'react-icons/fa';


export const Navbar = ({ sidebar, toggleSidebar }) => {

  return (
    <nav className="bg-primary text-white h-20 w-full flex flex-row justify-between items-center px-6 static top-0 left-0 font-primary text-xl">
      <NavLink to="/">
        <img
          className="h-8 w-auto"
          src={MonitorrLogo}
          alt="Monitorr Logo" />
      </NavLink>
      <div>
        {window.innerWidth >= 1024 
        
        ? 

        <ul className='flex flex-row'>
          <li className='mx-6'>
            <NavLink 
            to="/dashboard"
            >Dashboard</NavLink>
          </li>
          <li className='mx-6'>
            <NavLink 
            to="/create"
            >Exercise +
            </NavLink>
          </li>
          <li className='mx-6'>
            <NavLink 
            to="/user"
            >Users
            </NavLink>
          </li>
          <li className='mx-6'>
            <NavLink 
            to="/statistics"
            >Statistics
            </NavLink>
          </li>
          <li className='mx-6 flex items-center justify-center'>
            <NavLink 
            to="/login"
            ><FaUser />
            </NavLink>
          </li>
        </ul>

        :

        <FaBars 
        className='text-alt'
        onClick={toggleSidebar}
         />
}
      </div>
    </nav>
  )
}
