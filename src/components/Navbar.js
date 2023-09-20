import React from 'react';
import { NavLink } from 'react-router-dom';
import MonitorrLogo from '../images/Monitorr_wrapped.png';
import { FaUser } from 'react-icons/fa';

export const Navbar = () => {

  return (
    <nav className="bg-primary text-white h-20 w-full flex flex-row justify-between items-center px-6 static top-0 left-0 font-primary text-xl">
      <NavLink to="/">
        <img
          className="h-8 w-auto"
          src={MonitorrLogo}
          alt="Monitorr Logo" />
      </NavLink>
      <div>
        <ul className='flex flex-row'>
          <li className='mx-6'>
            <NavLink 
            to="/dashboard" 
            className={({ isActive }) =>
              isActive ? "border-b-2 border-r-2 border-dotted border-alt p-2" : "p-2"}
            >Dashboard</NavLink>
          </li>
          <li className='mx-6'>
            <NavLink 
            to="/create"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-r-2 border-dotted border-alt p-2" : "p-2"}
            >Exercise +
            </NavLink>
          </li>
          <li className='mx-6'>
            <NavLink 
            to="/user"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-r-2 border-dotted border-alt p-2" : "p-2"}
            >Users
            </NavLink>
          </li>
          <li className='mx-6'>
            <NavLink 
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-r-2 border-dotted border-alt p-2" : "p-2"}
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
      </div>
    </nav>
  )
}
