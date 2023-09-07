import React, { useEffect, useState } from 'react';
import { ExerciseForm } from './FormComponents/ExerciseForm';
import banner_five from '../images/banner_five.jpg';

import axios from 'axios';

export const CreateExercise = () => {

  //Setting state
  const [username, setUsername] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);

  //Sets state when input value is changing
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeActivity = (e) => {
    setActivity(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };
  const onChangeDate = (date) => {
    setDate(date);
    console.log(date)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: username,
      activity: activity,
      description: description,
      duration: duration,
      date: date
    }

    //POST request to update exercise information on backend database
    axios.post("http://localhost:5000/exercises/add", exercise)
      .then(res => console.log(res.data));

    window.location = "/dashboard"; //return user back to list of exercises
  }

  //Function that will run on initial render to retrieve backend data of all users and activities in the database
  const handleLoad = async () => {
    await axios.get("http://localhost:5000/users/")
      .then(res => {
        if (res.data.length > 0) {
          setUsers(res.data.map(user => user.username));
          setUsername(res.data[0].username);
        }
      })
      .catch((error) => {
        // handle this error
        console.log('error: ' + error);
      })
    await axios.get("http://localhost:5000/activity/")
      .then(res => {
        if (res.data.length > 0) {
          setActivities(res.data.map(act => act.activity));
          setActivity(res.data[0].username);
        }
      })
      .catch((error) => {
        // handle this error
        console.log('error: ' + error);
      })
  };

  //Runs on initial render
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="bg-primary h-[calc(100vh-5rem)] w-full relative grid grid-cols-5 grid-rows-1">
      <div className="col-start-1 col-end-4 row-start-1 flex items-center justify-center h-[calc(100vh-10rem)] w-100 z-10">
        <ExerciseForm
          handleSubmit={handleSubmit}
          username={username}
          setUsername={setUsername}
          onChangeUsername={onChangeUsername}
          users={users}
          activities={activities}
          activity={activity}
          onChangeActivity={onChangeActivity}
          description={description}
          onChangeDescription={onChangeDescription}
          duration={duration}
          onChangeDuration={onChangeDuration}
          date={date}
          onChangeDate={onChangeDate}
          val={"Create"}
        />
      </div>
      <img
        className="h-[calc(100%-10rem)] w-full mt-10 object-cover col-start-1 col-end-6 row-start-1 items-center opacity-50"
        src={banner_five}
        alt="Background"
      />
      <div className="col-start-4 col-end-6 row-start-1 z-10 h-[calc(100%-5rem)] relative grid grid-rows-hero-rows border-alt border-dotted border-t-2 border-l-2 border-b-2">
        <h2
          className="font-primary text-white h-full text-7xl leading-snug  self-start flex items-center pl-6 drop-shadow-2xl shadow-secondary row-start-2 row-end-3 font-bold">
          Add new <br></br> Exercise
        </h2>
      </div>
    </div>
  )
}
