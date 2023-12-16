import React, { useState } from 'react';
import banner_four from '../images/banner_four.jpg';
import { LoginForm } from './LoginForm';
import { PageHeader } from './PageHeader';
import { BannerImage } from './BannerImage';

export const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  return (
    <div className="bg-primary h-[calc(100vh-5rem)] w-full relative grid grid-cols-12 grid-rows-1 font-primary">
    <BannerImage src={banner_four} />
    <PageHeader text={"Login"} />
    <div className="col-start-2 col-end-8 row-start-1 h-[calc(100vh-15rem)] w-100 z-10 p-6 mt-10 flex flex-col items-center justify-center">
        <LoginForm 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        />
    </div>
    </div>
  )
}
