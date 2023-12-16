import React, { useEffect, useState } from 'react';
import banner_six from '../images/banner_six.jpg';
import { UserSelect } from './StatisticsComponents/UserSelect';
import { Details } from './StatisticsComponents/Details';
import axios from 'axios';
import { Graph } from './StatisticsComponents/Graph';
import { findLength } from './StatisticsComponents/Functions/FindLength';
import { filterAthlete } from './StatisticsComponents/Functions/FilterAthlete';
import { findMostCommonWord } from './StatisticsComponents/Functions/FindMostCommon';
import { findAverageDuration } from './StatisticsComponents/Functions/FindAverageDuration';
import { createGraphData } from './StatisticsComponents/Functions/CreateGraphData';
import { YearSelector } from './StatisticsComponents/YearSelector';
import { Loading } from './StatisticsComponents/Loading';
import { PageHeader, PageHeaderTop } from './PageHeader';
import { BannerImage } from './BannerImage';

export const Statistics = () => {

    const [users, setUsers] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [total, setTotal] = useState(0);
    const [athleteFilter, setAthleteFilter] = useState("")
    const [mostCommon, setMostCommon] = useState("");
    const [averageDuration, setAverageDuration] = useState(0);
    const [loading, setLoading] = useState(true);
    const [graphArr, setGraphArr] = useState([]);
    const [year, setYear] = useState("2023");

    //Filters exercises by username selected
    const filterExercise = async () => {
        await axios.get("http://localhost:5000/exercises/")
            .then(res => {
                setExercises(res.data
                    .filter(val => athleteFilter === "" || athleteFilter === "All" ? val.username : val.username === athleteFilter)
                )
            })
            .catch((err) => console.log(err))
            .finally(setLoading(false))
    }

    //GET request to retrieve all users in backend database
    const handleUserLoad = async () => {
        await axios.get("http://localhost:5000/users/")
            .then(res => {
                setUsers(res.data)
            })
            .catch((err) => console.log(err));
    }

    //Runs on initial render to load user and exercise data
    useEffect(() => {
        handleUserLoad()
    }, []);

    //Runs whenever athleteFilter state is changed to rerender list
    useEffect(() => {
        filterExercise()
    }, [athleteFilter])

    //Runs whenever the filterExercise() function is complete and exercise state has been updated
    useEffect(() => {
        findLength(exercises, setTotal)
    }, [filterExercise])

    //Runs on initial render to find the most common activity
    useEffect(() => {
        findMostCommonWord(exercises, setMostCommon);
    })

    useEffect(() => {
        findAverageDuration(exercises, setAverageDuration)
    })

    useEffect(() => {
        createGraphData(exercises, setGraphArr, year)
    }, [exercises, year])

    return (
        <div className="bg-primary w-full relative grid grid-cols-container grid-rows-container font-primary max-md:grid-rows-container-tablet">
            <div className="col-start-1 col-end-13 row-start-2 row-end-3 flex items-center justify-center h-auto w-100 z-10 my-6 sm:col-start-2 sm:col-end-12">
                <div className='flex flex-col gap-2 w-full z-10 p-6'>
                    {loading ?
                        <Loading />
                        :
                        <>
                            <div className='h-full w-full flex flex-col items-center justify-center pr-2'>
                                <UserSelect
                                    users={users}
                                    setUsers={setUsers}
                                    filterAthlete={filterAthlete}
                                    setAthleteFilter={setAthleteFilter}
                                    exercises={exercises}
                                    setMostCommon={setMostCommon}
                                    findMostCommonWord={findMostCommonWord}
                                    findAverageDuration={findAverageDuration}
                                    setAverageDuration={setAverageDuration}
                                    setGraphArr={setGraphArr}
                                />
                                <YearSelector 
                                year={year}
                                setYear={setYear}
                                />
                                <Details
                                    mostCommon={mostCommon}
                                    total={total}
                                    users={users}
                                    athleteFilter={athleteFilter}
                                    averageDuration={averageDuration}
                                    exercises={exercises}
                                    setGraphArr={setGraphArr}
                                    graphArr={graphArr}
                                    year={year}
                                    setYear={setYear}
                                />
                            </div>
                            <div className='w-full h-full'>
                                <Graph
                                    graphArr={graphArr}
                                />
                            </div>
                        </>
                    }
                </div>
            </div>
            <PageHeaderTop text={"Statistics"} />
        </div>
    )
}
