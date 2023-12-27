import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import MonitorrLogo from '../images/Monitorr_wrapped.png';
import { Socials } from './Socials';



export const Sidebar = ({ toggleSidebar, sidebar }) => {

    const hidden = sidebar ? "0%" : "-100%";

    return (
        <div className='w-full h-screen bg-secondary border-r-2 border-alt border-dotted fixed top-0 z-50 transition-all duration-300 ease-in-out cursor-pointer sm:w-1/3'
            style={{ left: hidden }}
        >
            <button
                className='absolute top-0 left-0 m-4'
                onClick={toggleSidebar}>
                <FaRegWindowClose className='text-alt text-2xl' />
            </button>
            <div className='w-full h-full px-4 py-16 flex items-center justify-center flex-col sm:items-start'>
                <ul>
                    <li
                        className='border-alt border-dotted flex justify-start items-center h-12 w-36 pl-4 text-xl my-4 border-l-2'
                        onClick={toggleSidebar}
                    >
                        <NavLink
                            to="/dashboard"
                            className='text-white'
                        >Dashboard
                        </NavLink>
                    </li>
                    <li
                        className='border-alt border-dotted flex justify-start items-center h-12 w-36 pl-4 text-xl my-4 border-l-2'
                        onClick={toggleSidebar}
                    >
                        <NavLink
                            to="/create"
                            className='text-white'
                        >Exercise +
                        </NavLink>
                    </li>
                    <li
                        className='border-alt border-dotted flex justify-start items-center h-12 w-36 pl-4 text-xl my-4 border-l-2'
                        onClick={toggleSidebar}
                    >
                        <NavLink
                            to="/user"
                            className='text-white'
                        >Users
                        </NavLink>
                    </li>
                    <li
                        className='border-alt border-dotted flex justify-start items-center h-12 w-36 pl-4 text-xl my-4 border-l-2'
                        onClick={toggleSidebar}
                    >
                        <NavLink
                            to="/statistics"
                            className='text-white'
                        >Statistics
                        </NavLink>
                    </li>
                    </ul>
                        <NavLink 
                        className='flex items-center justify-center w-full my-4'
                        onClick={toggleSidebar}
                        to="/"
                        >
                            <img
                                className="h-8 w-auto"
                                src={MonitorrLogo}
                                alt="Monitorr Logo" />
                        </NavLink>
                        <div className='flex items-center justify-center w-full'>
                        <Socials />
                        </div>
            </div>
        </div>
    )
}
