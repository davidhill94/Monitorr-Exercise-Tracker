import React from 'react';
import banner_five from '../images/banner_five.jpg';
import { RegisterForm } from './RegisterForm';
import { PageHeader } from './PageHeader';
import { BannerImage } from './BannerImage';

export const Register = () => {
  return (
    <div className="bg-primary h-[calc(100vh-5rem)] w-full relative grid grid-cols-12 grid-rows-1">
      <div className="col-start-2 col-end-8 row-start-1 flex items-center justify-center h-[calc(100vh-10rem)] w-100 z-10">
        <RegisterForm />
      </div>
      <BannerImage src={banner_five} />
      <PageHeader text={"Register"} />
    </div>
  )
}
