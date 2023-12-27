import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonHeroAlt, ButtonHeroDarkText } from './ButtonHero';

const ExerciseCard = ({ illustration, header, buttonLink }) => {
    return (
        <div className="w-48 h-56 md:w-64 md:h-72 rounded overflow-hidden shadow-lg m-6 flex items-center justify-center flex-col shadow-card relative hover:scale-105 transition duration-150">
            <div className='bg-white p-6 h-40 md:h-56'>
                <img className="w-full h-auto" src={illustration} alt="Exercise Illustration" />
            </div>
            <div className='bg-secondary p-4 w-full flex flex-col items-center justify-center h-16'>
                <h3 className="text-white text-left md:text-center italic font-primary my-2 border-l-2 border-alt border-dotted pl-2">{header}</h3>
            </div>
            <Link 
            to={buttonLink}
            onClick={window.scrollTo(0, 0)}
            className='h-full w-full z-50 absolute top-0 left-0'
            ></Link>
        </div>
    );
};

export default ExerciseCard;