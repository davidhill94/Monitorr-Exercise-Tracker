import React, { useEffect, useState } from 'react';
import axios from 'axios';
import banner_two from '../images/banner_two.jpg';
import { Table } from './DashboardComponents/Table/Table';
import { Pagination } from './DashboardComponents/Table/Pagination';
import { Filter } from './DashboardComponents/Table/Filter';

export const Dashboard = () => {

  const [exercises, setExercises] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  //GET request to retrieve all exercises in backend database
  const handleExerciseLoad = async () => {
    await axios.get("http://localhost:5000/exercises/")
      .then(res => {
        setExercises(res.data)
      })
      .catch((err) => console.log(err));
  }

  //Runs on initial render
  useEffect(() => {
    handleExerciseLoad()
  }, []);

  //Function that deletes an exercise with the relevent id
  const deleteExercise = (id) => {
    axios.delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data));
    //removes exercises from current state and filters out the exercise we have just deleted
    setExercises(exercises.filter(el => el._id !== id))
  }

  //Handles Pagination
  const exercisesPerPage = 5;
  const pagesVisited = pageNumber * exercisesPerPage;
  const pageCount = Math.ceil(exercises.length / exercisesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className="bg-primary h-[calc(100vh-5rem)] w-full relative grid grid-cols-5 grid-rows-1 font-primary">
      <img
        className="h-[calc(100%-10rem)] w-full mt-10 object-cover col-start-1 col-end-6 row-start-1 items-center opacity-50"
        src={banner_two}
        alt="Bike" />
      <div className="col-start-1 col-end-3 row-start-1 z-10 h-[calc(100%-5rem)] relative grid grid-rows-hero-rows border-alt border-dotted border-t-2 border-r-2 border-b-2">
        <h2
          className="font-primary text-white h-full text-7xl leading-snug  self-start flex items-center pl-6 drop-shadow-2xl shadow-secondary row-start-2 row-end-3 font-bold">
          Welcome<br></br> to the Dashboard.
        </h2>
      </div>
      <div className="col-start-3 col-end-6 row-start-1 grid grid-rows-dashboard h-[calc(100vh-15rem)] w-100 z-10 p-6 mt-10 ">
        <Filter />
        <Table
          exercises={exercises}
          deleteExercise={deleteExercise}
          pagesVisited={pagesVisited}
          exercisesPerPage={exercisesPerPage}
        />
        <Pagination
          pageCount={pageCount}
          changePage={changePage}
        />
      </div>
    </div>
  )
}
