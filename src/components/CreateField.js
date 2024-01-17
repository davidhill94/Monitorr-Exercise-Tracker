import React, { useState } from 'react';
import axios from 'axios';
import { UserForm } from './FormComponents/UserForm';
import { ActivityForm } from './FormComponents/ActivityForm';
import { BackgroundDottedLinesBottom, BackgroundDottedLinesTop } from './BackgroundDottedLines';
import { HeroAbout } from './HeroAbout';
import { StatisticsHero } from './StatisticsHero';

export const CreateField = () => {

    const [username, setUsername] = useState("");
    const [activity, setActivity] = useState("");

    //Sets state when input value is being changed
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const onChangeActivity = (e) => {
        setActivity(e.target.value);
    };

    //Sets username when form is submitted
    const handleSubmitUsername = (e) => {
        e.preventDefault();
        const user = {
            username: username
        }
        //POST Request that updates users on the backend database
        axios.post("http://localhost:5000/users/add", user)
            .then(res => console.log(res.data));

        //Resets form input to empty string
        setUsername("");
    }

    //Sets activity when form is submitted
    const handleSubmitActivity = (e) => {
        e.preventDefault();
        const act = {
            activity: activity
        }
        //POST Request that updates users on the backend database
        axios.post("http://localhost:5000/activity/add", act)
            .then(res => console.log(res.data))

        //Resets form input to empty string
        setActivity("");
    }

    return (
        <>
        <div className="bg-primary h-auto w-full bg-add-users bg-center bg-cover px-4 py-8">
            <BackgroundDottedLinesTop />
            <div className="flex flex-col items-center justify-center w-full h-auto lg:flex-row">
                <h2 className="font-primary text-white text-4xl text-center lg:w-full lg:mx-4 lg:text-6xl">Add Athlete or Activity</h2>
                <div className="w-full py-10 px-2w-full h-full flex flex-col items-center justify-center font-primary md:flex-row">
                    <UserForm
                        handleSubmitUsername={handleSubmitUsername}
                        username={username}
                        onChangeUsername={onChangeUsername}
                    />
                    <ActivityForm
                        handleSubmitActivity={handleSubmitActivity}
                        activity={activity}
                        onChangeActivity={onChangeActivity}
                    />
                </div>
            </div>
            <BackgroundDottedLinesBottom />
        </div>
        <StatisticsHero />
        <HeroAbout />  
        </>
    )
}