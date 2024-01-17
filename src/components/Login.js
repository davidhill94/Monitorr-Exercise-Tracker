import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { BackgroundDottedLinesBottom, BackgroundDottedLinesTop } from './BackgroundDottedLines';
import { StatisticsHero } from './StatisticsHero';
import { HeroCards } from './HeroCards';
import { HeroAbout } from './HeroAbout';

export const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  return (
    <>
    <div className="bg-primary h-auto w-full bg-create-exercise bg-center bg-cover px-4 py-8">
    <BackgroundDottedLinesTop />
    <div className="flex flex-col items-center justify-center w-full h-auto lg:flex-row">
      <h2 className="font-primary text-white text-4xl text-center lg:w-full lg:mx-4 lg:text-6xl">Login</h2>
      <LoginForm 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        />
    </div>
    <BackgroundDottedLinesBottom />
  </div>
  <StatisticsHero />
  <HeroCards />
  <HeroAbout />
  </>
  )
}
