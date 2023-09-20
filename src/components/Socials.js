import React from 'react';
import { FaFacebook, FaInstagram, FaReddit, FaPhone,  } from 'react-icons/fa';

export const Socials = () => {
  return (
    <div>
        <ul className='flex text-xl justify-center items-center'>
            <li className='m-1 hover:scale-110 duration-150 hover:text-alt'>
                <a 
                href="/" 
                target='_blank' 
                rel="noreferrer"
                className='hover:text-alt'
                ><FaFacebook /></a>
            </li>
            <li className='mx-1 hover:scale-110 duration-150 hover:text-alt'>
                <a 
                href="/" 
                target='_blank' 
                rel="noreferrer"
                ><FaInstagram /></a>
            </li>
            <li className='mx-1 hover:scale-110 duration-150 hover:text-alt'>
                <a 
                href="/" 
                target='_blank' 
                rel="noreferrer"
                ><FaReddit /></a>
            </li>
            <li className='mx-1 hover:scale-110 duration-150 hover:text-alt'>
                <a 
                href="/" 
                target='_blank' 
                rel="noreferrer"
                ><FaPhone /></a>
            </li>
        </ul>
    </div>
  )
}
