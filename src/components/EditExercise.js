import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import banner_three from '../images/banner_three.jpg';
import { ExerciseForm } from './FormComponents/ExerciseForm';
import { PageHeader } from './PageHeader';
import { BannerImage } from './BannerImage';

export const EditExercise = () => {

  //Setting State
  const [username, setUsername] = useState("");
  const [activity, setActivity] = useState("");
  const [activities, setActivities] = useState([]);
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState(useParams());

  //Handles change of target value and sets it to state
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

    //POST Request to update exercise details
    axios.post("http://localhost:5000/exercises/update/" + params.id, exercise)
      .then(res => console.log(res.data));

    window.location = "/"; //return user back to list of exercises
  }

  //A function that will run on initial load to retrieve data from backend using GET request to auto fill input values of the current exercise details
  const handleLoad = async () => {
    await axios.get("http://localhost:5000/exercises/" + params.id)
      .then(res => {
        setUsername(res.data.username);
        setActivity(res.data.activity);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(new Date(res.data.date));
      })
      .catch((error) => {
        console.log("error: " + error)
      })

    //GET Request that retrieves all users and maps them to be used in an option tag
    await axios.get("http://localhost:5000/users/")
      .then(res => {
        if (res.data.length > 0) {
          setUsers(res.data.map(user => user.username));
        }
      })
      .catch((error) => {
        console.log("error: " + error);
      })

    //GET Request that retrieves all activities and maps them to be used in an option tag
    await axios.get("http://localhost:5000/activity/")
      .then(res => {
        if (res.data.length > 0) {
          setActivities(res.data.map(act => act.activity));
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
          onChangeUsername={onChangeUsername}
          users={users}
          activity={activity}
          activities={activities}
          onChangeActivity={onChangeActivity}
          description={description}
          onChangeDescription={onChangeDescription}
          duration={duration}
          onChangeDuration={onChangeDuration}
          date={date}
          onChangeDate={onChangeDate}
          val={"Edit"}
        />
      </div>
      <BannerImage src={banner_three} />
      <PageHeader text={"Edit Exercise"} />
    </div>
  )
}
