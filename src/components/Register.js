import React from "react";
import { RegisterForm } from "./RegisterForm";
import {
  BackgroundDottedLinesBottom,
  BackgroundDottedLinesTop,
} from "./BackgroundDottedLines";
import { StatisticsHero } from "./StatisticsHero";
import { HeroCards } from "./HeroCards";
import { HeroAbout } from "./HeroAbout";

export const Register = () => {
  return (
    <>
      <div className="bg-primary h-auto w-full bg-create-exercise bg-center bg-cover px-4 py-8">
        <BackgroundDottedLinesTop />
        <div className="flex flex-col items-center justify-center w-full h-auto lg:flex-row">
          <h2 className="font-primary text-white text-4xl text-center lg:w-full lg:mx-4 lg:text-6xl">
            Register
          </h2>
          <RegisterForm />
        </div>
        <BackgroundDottedLinesBottom />
      </div>
      <StatisticsHero />
      <HeroCards />
      <HeroAbout />
    </>
  );
};
