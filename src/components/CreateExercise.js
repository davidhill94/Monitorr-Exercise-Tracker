import React, { useEffect, useState } from 'react';
import { ExerciseForm } from './FormComponents/ExerciseForm';
import banner_five from '../images/banner_five.jpg';

import axios from 'axios';
import { PageHeader } from './PageHeader';
import { BannerImage } from './BannerImage';

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
    <div className="bg-primary h-[calc(100vh-5rem)] w-full relative grid grid-cols-container grid-rows-1">
      <div className="col-start-2 col-end-8 row-start-1 flex items-center justify-center h-[calc(100vh-10rem)] w-100 z-10">
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
      <BannerImage src={banner_five} />
      <PageHeader text={"New Exercise"} />
    </div>
  )
}
