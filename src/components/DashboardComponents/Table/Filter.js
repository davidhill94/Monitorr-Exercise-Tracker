import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaFilter } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ReactSlider from 'react-slider';

export const Filter = ({ exercises, setExercises, setPageNumber }) => {

  const [filtered, setFiltered] = useState(false);
  const [activities, setActivities] = useState(false);
  const [users, setUsers] = useState(false);
  const [userFilter, setUserFilter] = useState("");
  const [activityFilter, setActivityFilter] = useState("");
  const [durationFilterMin, setDurationFilterMin] = useState("");
  const [durationFilterMax, setDurationFilterMax] = useState("");
  const [durationSlider, setDurationSlider] = useState(false);
  const [maxDuration, setMaxDuration] = useState(0);
  const [upper, setUpper] = useState(0);
  const [lower, setLower] = useState(0);

  const ref = useRef()

  //Opens and Closes the filters tab
  const handleFilteredClick = () => {
    setFiltered(!filtered);
    findLargestDuration();
  }

  //Sets activityFilter state to value of selected option
  const filterExerciseByActivity = (e) => {
    setActivityFilter(e.target.value)
  }

  //Sets userFilter state to value of selected option
  const filterExerciseByAthlete = (e) => {
    setUserFilter(e.target.value)
  }

  //Function that filters the exercise list based on filter states
  const filterExercise = async (e) => {
    await axios.get("http://localhost:5000/exercises/")
      .then(res => {
        setExercises(res.data
          .filter(val => userFilter === "" || userFilter === "All" ? val.username : val.username === userFilter)
          .filter(val => activityFilter === "" || activityFilter === "All" ? val.activity : val.activity === activityFilter)
          .filter(val => val.duration > durationFilterMin ? val.duration : val.duration === durationFilterMin)
          .filter(val => val.duration < durationFilterMax ? val.duration : val.duration === durationFilterMax)
        )
        //Sets page to first
        setPageNumber(0);
      })
      .catch((err) => console.log(err));
  }

  //Retrieves acitivities and users lists from backend database and sets state to data retrieved
  const handleActivitiesLoad = async () => {
    //Activities data retrieval 
    await axios.get("http://localhost:5000/activity/")
      .then(res => {
        if (res.data.length > 0) {
          setActivities(res.data.map(act => act.activity));
        }
      })
      .catch((error) => {
        console.log('error: ' + error);
      })
    //Users data retrieval
    await axios.get("http://localhost:5000/users/")
      .then(res => {
        if (res.data.length > 0) {
          setUsers(res.data.map(user => user.username));
        }
      })
      .catch((error) => {
        console.log('error: ' + error);
      })
  }

  //Handles durationSlider state to display slider on DOM
  const handleDurationSlider = () => {
    setDurationSlider(!durationSlider);
  };

  //Checks if user has clicked outside the duration slider
  const checkIfClickedOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      handleDurationSlider()
    }
  }

  //Finds largest duration number in array and sets it to the maxDuration and upper state for durationSlider
  const findLargestDuration = () => {
    const newArr = []
    for (let i = 0; i < exercises.length; i++) {
      newArr.push(exercises[i].duration)
      const max = Math.max(...newArr);
      setMaxDuration(max);
      setUpper(max);
    };
  };

  //Handles setting duratinFilterMax and durationFilterMin
  const handleSettingDurationFilter = () => {
    setDurationFilterMax(upper);
    setDurationFilterMin(lower);
    handleDurationSlider();
  }

  //Runs on initial load to load activities list
  useEffect(() => {
    handleActivitiesLoad()
  }, [])

  //Updates exercise list by running filter exercise func everytime a new filter selection is made
  useEffect(() => {
    filterExercise()
  }, [userFilter, activityFilter, durationFilterMin, durationFilterMax])

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (durationSlider === true) {
        if (ref.current && !ref.current.contains(e.target)) {
          handleDurationSlider()
        }
      }
    }
    document.addEventListener("click", checkIfClickedOutside)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
  }, [handleDurationSlider])


  return (
    <div className='row-start-1 row-end-2 w-full flex items-center justify-start'>
      <div className='flex items-center justify-between w-fit'>
        <select className='mr-2'>
          <option selected disabled>Sort</option>
          <option>Duration H to L</option>
          <option>Duration L to H</option>
          <option>Date Newest</option>
          <option>Date Oldest</option>
        </select>
        <button
          onClick={handleFilteredClick}
          className='w-6 h-6 border-2 border-alt text-alt flex items-center justify-center ml-2'>
          <FaFilter />
        </button>
      </div>
      {filtered
        ?
        <div ref={ref} className='flex flex-row justify-start items-center ml-2 w-full'>
          <select
            onChange={(user) => filterExerciseByAthlete(user)}
            className='mx-2 text-white bg-primary h-5 text-16 cursor-pointer'
          >
            <option selected disabled>Athlete</option>
            <option value={"All"}>All</option>
            {users.map((user, index) => {
              return (
                <option key={index} value={user}>{user}</option>
              )
            })
            }
          </select>
          <select
            onChange={(value) => filterExerciseByActivity(value)}
            className='mx-2 text-white bg-primary h-5 text-16 cursor-pointer'
          >
            <option selected disabled>Activity</option>
            <option value={"All"}>All</option>
            {activities.map((act, index) => {
              return (
                <option key={index} value={act}>{act}</option>
              )
            })
            }
          </select>
          <div className='relative'>
            <button
              onClick={handleDurationSlider}
              className='bg-primary text-white p-1 inline-flex items-center justify-start h-5 text-16 mx-2'
            >Duration   {durationSlider ? <span className='ml-4 text-sm pointer-events-none	'><IoIosArrowUp /></span> : <span className='ml-4 text-sm pointer-events-none	'><IoIosArrowDown /></span>}</button>
            <div
              className={`flex justify-between items-center absolute bg-primary px-2 w-64 mt-1 shadow-xl shadow-black ml-2 ${durationSlider === true ? "opacity-100" : "opacity-0"}`}>
              <div className='flex flex-row items-center justify-start'>
                <p className='mr-2 text-white w-4 text-center'>{lower}</p>
                <ReactSlider
                  className="w-32 h-10 flex items-center justify-center"
                  trackClassName='absolute left-0 right-0 h-2 bg-alt rounded-full'
                  thumbClassName='bg-test w-4 h-4 rounded-full leading-4 text-black cursor-grab'
                  defaultValue={[0, maxDuration]}
                  ariaLabel={['Lower thumb', 'Upper thumb']}
                  renderThumb={(props, state) => <div {...props}></div>}
                  pearling
                  max={maxDuration}
                  minDistance={5}
                  onChange={(val) => {
                    setUpper(val[1])
                    setLower(val[0])
                  }}
                />
                <p className='ml-2 text-white w-4 text-center'>{upper}</p>
              </div>
              <button 
              className='border-2 border-alt text-alt flex w-6 h-6 items-center justify-center mx-2'
              onClick={handleSettingDurationFilter}
              ><FaCheck /></button>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p>From:</p>
            <p>To:</p>
          </div>
        </div>
        :
        <></>
      }
    </div>
  )
}
