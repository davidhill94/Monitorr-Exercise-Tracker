import React, { useEffect, useRef, useState } from 'react';

//FUNCTION IMPORTS
import { toggleFilter } from './Functions/ToggleFilter';
import { filterExerciseByActivity, filterExerciseByAthlete } from './Functions/SetFilterState';
import { filterExercise } from './Functions/FilterExercise';
import { handleActivitiesLoad } from './Functions/LoadData';
import { findLargestDuration } from './Functions/FindLargestDuration';
import { durationHighToLow, durationLowToHigh, newestDate, oldestDate } from './Functions/Order';
import { handleFilterOption } from './Functions/HandleFilterOption';

//COMPONENT IMPORTS
import { SelectFilter } from './SelectFilter';
import { ToggleFilter } from './ToggleFilter';
import { AthleteFilter } from './AthleteFilter';
import { ActivityFilter } from './ActivityFilter';
import { DurationToggle } from './DurationToggle';
import { DurationSlider } from './DurationSlider';

export const Filter = ({ exercises, setExercises, setPageNumber }) => {

  //STATE
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

  //Handles durationSlider state to display slider on DOM
const handleDurationSlider = () => {
  setDurationSlider(!durationSlider);
};

  //Handles setting duratinFilterMax and durationFilterMin
  const handleSettingDurationFilter = () => {
    setDurationFilterMax(upper);
    setDurationFilterMin(lower);
    handleDurationSlider();
  }

  //Runs on initial load to load activities list
  useEffect(() => {
    handleActivitiesLoad(setActivities, setUsers)
  }, [])

  //Updates exercise list by running filter exercise func everytime a new filter selection is made
  useEffect(() => {
    filterExercise(setExercises, userFilter, activityFilter, durationFilterMin, durationFilterMax, setPageNumber)
  }, [userFilter, activityFilter, durationFilterMin, durationFilterMax])

  //Checks to see if click is outside of the durationSlider element and closed the element if true
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
    <div className='row-start-1 row-end-2 w-full flex items-center justify-start flex-col md:flex-row'>
      <div className='flex items-center justify-between w-fit md:pl-8'>
        <SelectFilter
        handleFilterOption={handleFilterOption}
        oldestDate={oldestDate}
        newestDate={newestDate}
        durationHighToLow={durationHighToLow}
        durationLowToHigh={durationLowToHigh}
        exercises={exercises}
        setExercises={setExercises}
        />
        <ToggleFilter 
        toggleFilter={toggleFilter}
        setFiltered={setFiltered}
        filtered={filtered}
        findLargestDuration={findLargestDuration}
        exercises={exercises}
        setMaxDuration={setMaxDuration}
        setUpper={setUpper}
        />
      </div>
      {filtered
        ?
        <div className='flex flex-row justify-center items-center w-full mt-2 md:justify-start md:mt-0 md:ml-2'>
          <div ref={ref} className='relative'>
            <DurationToggle 
            handleDurationSlider={handleDurationSlider}
            durationSlider={durationSlider}
            />
            <DurationSlider
            durationSlider={durationSlider}
            maxDuration={maxDuration}
            lower={lower}
            setUpper={setUpper}
            setLower={setLower}
            upper={upper}
            handleSettingDurationFilter={handleSettingDurationFilter}
            />
          </div>
          <AthleteFilter 
          filterExerciseByAthlete={filterExerciseByAthlete}
          setUserFilter={setUserFilter}
          users={users}
          />
          <ActivityFilter 
          filterExerciseByActivity={filterExerciseByActivity}
          setActivityFilter={setActivityFilter}
          activities={activities}
          />
        </div>
        :
        <></>
      }
    </div>
  )
}
