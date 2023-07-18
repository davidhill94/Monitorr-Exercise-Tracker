import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ExerciseForm } from './ExerciseForm';
import background_img from '../images/edit-background.jpg';

export const EditExercise = () => {

  //Setting State
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState(useParams());

  //Handles change of target value and sets it to state
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
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
        onChangeUsername={onChangeUsername}
        users={users}
        description={description}
        onChangeDescription={onChangeDescription}
        duration={duration}
        onChangeDuration={onChangeDuration}
        date={date}
        onChangeDate={onChangeDate}
        val={"Edit"}
      />
    </div>
    <img
      className="h-[calc(100%-10rem)] w-full mt-10 object-cover col-start-1 col-end-6 row-start-1 items-center opacity-50"
      src={background_img}
      alt="Background"
    />
    <div className="col-start-4 col-end-6 row-start-1 z-10 h-[calc(100%-5rem)] relative grid grid-rows-hero-rows border-alt border-dotted border-t-2 border-l-2 border-b-2">
      <h2
        className="font-primary text-white h-full text-7xl leading-snug  self-start flex items-center pl-6 drop-shadow-2xl shadow-secondary row-start-2 row-end-3 font-bold">
        Edit <br></br> Exercise
      </h2>
    </div>
  </div>
  )
}
