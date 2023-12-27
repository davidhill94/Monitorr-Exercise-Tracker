import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonHero = ({ buttontext, link }) => {
  return (
    <Link 
    to={link}
    className="py-2 px-4 bg-alt border-secondary border-2 text-secondary m-2 w-32 text-center font-primary text-sm whitespace-nowrap md:w-40 md:text-16 rounded">
        {buttontext}
    </Link>
  )
}

export const ButtonHeroAlt = ({ buttontext, link }) => {
  return (
    <Link 
    to={link}
    className="py-2 px-4 bg-transparent border-white border-2 text-white border-s-white m-2 w-32 text-center text-sm whitespace-nowrap font-primary md:w-32 md:text-16 rounded">
        {buttontext}
    </Link>
  )
}

export const ButtonHeroDarkText = ({ buttontext, link }) => {
  return (
    <Link 
    to={link}
    className="py-2 px-4 bg-transparent border-primary border-2 text-primary border-s-primary m-2 w-32 text-center text-sm whitespace-nowrap font-primary md:w-32 md:text-16 rounded">
        {buttontext}
    </Link>
  )
}

