import React, { useState } from 'react';
import axios from 'axios';
import banner_four from '../images/banner_four.jpg';
import { UserForm } from './FormComponents/UserForm';
import { ActivityForm } from './FormComponents/ActivityForm';
import { PageHeader } from './PageHeader';
import { BannerImage } from './BannerImage';

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
            className="bg-primary h-[calc(100vh-5rem)] w-full relative grid grid-cols-container grid-rows-1 font-primary">
            <div className="col-start-2 col-end-8 row-start-1 flex items-center justify-center h-[calc(100vh-10rem)] w-100 z-10">
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
            <BannerImage src={banner_four} />
            <PageHeader text={"Add Athlete or Activity"} />
        </div>
    )
}