import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonHero = ({ buttontext }) => {
  return (
    <Link 
    to="/register"
    className="py-2 px-4 bg-alt border-secondary border-2 text-secondary m-2 w-32 text-center font-primary text-sm whitespace-nowrap md:w-40 md:text-16">
        {buttontext}
    </Link>
  )
}

export const ButtonHeroAlt = ({ buttontext }) => {
  return (
    <Link 
    to="/dashboard"
    className="py-2 px-4 bg-transparent border-white border-2 text-white border-s-white m-2 w-32 text-center text-sm whitespace-nowrap font-primary md:w-32 md:text-16">
        {buttontext}
    </Link>
  )
}

