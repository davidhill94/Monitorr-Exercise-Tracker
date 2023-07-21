import React, { useState } from 'react';
import axios from 'axios';
import banner_four from '../images/banner_four.jpg';
import { UserForm } from './FormComponents/UserForm';
import { ActivityForm } from './FormComponents/ActivityForm';

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
        <div
            className="bg-primary h-[calc(100vh-5rem)] w-full relative grid grid-cols-5 grid-rows-1 font-primary">
            <div className="col-start-3 col-end-6 row-start-1 flex items-center justify-center h-[calc(100vh-10rem)] w-100 z-10">
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
            <img
        className="h-[calc(100%-10rem)] w-full mt-10 object-cover col-start-1 col-end-6 row-start-1 items-center opacity-50"
        src={banner_four}
        alt="Background"
      />
      <div className="col-start-1 col-end-3 row-start-1 z-10 h-[calc(100%-5rem)] relative grid grid-rows-hero-rows border-alt border-dotted border-t-2 border-r-2 border-b-2">
        <h2
          className="font-primary text-white h-full text-7xl leading-snug  self-start flex items-center pl-6 drop-shadow-2xl shadow-secondary row-start-2 row-end-3 font-bold">
          New<br></br> Athlete <br></br> or Activity
        </h2>
      </div>
        </div>
    )
}