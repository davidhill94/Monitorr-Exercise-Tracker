import React, { useEffect, useState } from 'react';
import axios from 'axios';
import banner_two from '../images/banner_two.jpg';
import { Table } from './DashboardComponents/Table/Table';
import { Pagination } from './DashboardComponents/Table/Pagination';
import { Filter } from './DashboardComponents/Filter/Filter';
import { Info } from './DashboardComponents/Table/Info';
import { PageHeaderTop } from './PageHeader';
import { mockExerciseData } from './Mock Data/MockExercises';
import { HeroAbout } from './HeroAbout';
import { StatisticsHero } from './StatisticsHero';

export const Dashboard = ({ mockData }) => {

  const [exercises, setExercises] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [info, setInfo] = useState(false);
  const [infoArr, setInfoArr] = useState([]);

  //GET request to retrieve all exercises in backend database
  const handleExerciseLoad = async () => {
    if(mockData === true) {
      setExercises(mockExerciseData);
    } else {
    await axios.get("http://localhost:5000/exercises/")
      .then(res => {
        setExercises(res.data)
      })
      .catch((err) => console.log(err));
    }
  }

  //Runs on initial render
  useEffect(() => {
    handleExerciseLoad()
  }, []);

  //Handles Pagination
  const exercisesPerPage = 10;
  const pagesVisited = pageNumber * exercisesPerPage;
  const pageCount = Math.ceil(exercises.length / exercisesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  
  return (
    <div className="bg-primary flex flex-col w-full relative">
      <PageHeaderTop text={"Welcome to the Dashboard"} banner={banner_two}/>
      <div className="flex flex-col h-auto w-full items-center justify-center py-8">
      {info ? 
      <Info 
      infoArr={infoArr} 
      setInfo={setInfo}
      info={info}
      setInfoArr={setInfoArr}
      />
      :
      <>
      <Filter 
        exercises={exercises}
        setExercises={setExercises}
        setPageNumber={setPageNumber}
        mockData={mockData}
        />
        <Table
          exercises={exercises}
          setExercises={setExercises}
          pagesVisited={pagesVisited}
          exercisesPerPage={exercisesPerPage}
          info={info}
          setInfo={setInfo}
          infoArr={infoArr}
          setInfoArr={setInfoArr}
          mockData={mockData}
        />
        <Pagination
          pageCount={pageCount}
          changePage={changePage}
        />
        </>
    }
      </div>
      <StatisticsHero />
      <HeroAbout />
    </div>
  )
}
