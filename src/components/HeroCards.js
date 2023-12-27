import React from 'react';
import ExerciseCard from './Cards';
import dahsboardIllustration from '../images/dashIllustration.svg';
import statsIllustration from '../images/statsIllustration2.svg';
import exerciseIllustration from '../images/exerciseIllustration.svg';
import userIllustration from '../images/userIllustration.svg';

export const HeroCards = () => {
    return (
        <section className='bg-primary w-full h-auto flex flex-wrap items-center justify-center py-8 px-24'>
            <div className='flex flex-wrap justify-around items-center w-fit'>
                <ExerciseCard
                    illustration={statsIllustration}
                    header={"Chart your monthly data"}
                    buttonText={"Statistics"}
                    buttonLink="/statistics"
                />
                <ExerciseCard
                    illustration={dahsboardIllustration}
                    header={"View your activity history"}
                    buttonText={"Dashboard"}
                    buttonLink="/dashboard"
                />
                <ExerciseCard
                    illustration={exerciseIllustration}
                    header={"Add new activity"}
                    buttonText={"Create"}
                    buttonLink="/create"
                />
                <ExerciseCard
                    illustration={userIllustration}
                    header={"Customise your database"}
                    buttonText={"Customise"}
                    buttonLink="/user"
                />
            </div>
        </section>
    )
}
