import React from 'react';
import { Link } from 'react-router-dom';

export const AddButton = ({ link }) => {


    return (
            <Link
                to={`/${link}`}
                className='border-2 border-alt text-alt w-4 h-4 flex items-center justify-center'>
                +
            </Link>
    )
}
