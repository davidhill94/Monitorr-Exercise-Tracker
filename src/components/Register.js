import React from 'react';
import banner_five from '../images/banner_five.jpg';
import { RegisterForm } from './RegisterForm';

export const Register = () => {
  return (
    <div className="bg-primary h-[calc(100vh-5rem)] w-full relative grid grid-cols-5 grid-rows-1">
      <div className="col-start-1 col-end-4 row-start-1 flex items-center justify-center h-[calc(100vh-10rem)] w-100 z-10">
        <RegisterForm />
      </div>
      <img
        className="h-[calc(100%-10rem)] w-full mt-10 object-cover col-start-1 col-end-6 row-start-1 items-center opacity-50"
        src={banner_five}
        alt="Background"
      />
      <div className="col-start-4 col-end-6 row-start-1 z-10 h-[calc(100%-5rem)] relative grid grid-rows-hero-rows border-alt border-dotted border-t-2 border-l-2 border-b-2">
        <h2
          className="font-primary text-white h-full text-7xl leading-snug  self-start flex items-center pl-6 drop-shadow-2xl shadow-secondary row-start-2 row-end-3 font-bold">
          Register.
        </h2>
      </div>
    </div>
  )
}
