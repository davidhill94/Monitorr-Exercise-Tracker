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

export const Statistics = () => {

    const [users, setUsers] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [total, setTotal] = useState(0);
    const [athleteFilter, setAthleteFilter] = useState("")
    const [mostCommon, setMostCommon] = useState("");
    const [averageDuration, setAverageDuration] = useState(0);
    const [loading, setLoading] = useState(true);
    const [datesArr, setDatesArr] = useState([]);
    const [durationArr, setDurationArr] = useState([]);
    const [graphArr, setGraphArr] = useState([]);

    //Filters exercises by username selected
    const filterExercise = async () => {
        await axios.get("http://localhost:5000/exercises/")
            .then(setLoading(true))
            .then(res => {
                setExercises(res.data
                    .filter(val => athleteFilter === "" || athleteFilter === "All" ? val.username : val.username === athleteFilter)
                )
            })
            .then(setTimeout(() => {
                setLoading(false)
              }, 1000))
            .catch((err) => console.log(err));
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
        createGraphData(datesArr, durationArr, setGraphArr)
    }, [])


    return (
        <div className="bg-primary h-[calc(100vh-5rem)] w-full relative grid grid-cols-5 grid-rows-1">
            <div className="col-start-1 col-end-4 row-start-1 flex items-center justify-center h-[calc(100vh-10rem)] w-100 z-10">
                <div className='col-start-3 col-end-6 row-start-1 grid grid-rows-statistics h-[calc(100vh-15rem)] w-full z-10 p-6 bg-test'>
                    <div className='flex flex-row justify-start items-center w-full bg-alt row-start-1 row-end-2'>
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
                        />
                    </div>
                    {loading ?
                        <p>Loading...</p>
                        :
                        <div className='bg-primary h-full row-start-2 row-end-3 flex flex-row justify-start items-center'>
                            <Details
                                mostCommon={mostCommon}
                                total={total}
                                users={users}
                                athleteFilter={athleteFilter}
                                averageDuration={averageDuration}
                                exercises={exercises}
                                setDatesArr={setDatesArr}
                                datesArr={datesArr}
                                durationArr={durationArr}
                                setDurationArr={setDurationArr}
                                setGraphArr={setGraphArr}
                            />
                            <Graph
                            datesArr={datesArr}
                            durationArr={durationArr}
                            graphArr={graphArr}
                            />
                        </div>
                    }
                </div>
            </div>
            <img
                className="h-[calc(100%-10rem)] w-full mt-10 object-cover col-start-1 col-end-6 row-start-1 items-center opacity-50"
                src={banner_six}
                alt="Background"
            />
            <div className="col-start-4 col-end-6 row-start-1 z-10 h-[calc(100%-5rem)] relative grid grid-rows-hero-rows border-alt border-dotted border-t-2 border-l-2 border-b-2">
                <h2
                    className="font-primary text-white h-full text-7xl leading-snug  self-start flex items-center pl-6 drop-shadow-2xl shadow-secondary row-start-2 row-end-3 font-bold">
                    Statistics
                </h2>
            </div>
        </div>
    )
}
