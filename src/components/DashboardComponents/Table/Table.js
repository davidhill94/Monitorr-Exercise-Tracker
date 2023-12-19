import React from 'react';
import { ExerciseList } from './ExerciseList';

export const Table = ({ exercises, setExercises, pagesVisited, exercisesPerPage, info, setInfo, infoArr, setInfoArr, mockData }) => {
  return (
    <table className="w-full h-fit my-6 text-center text-white text-xs">
        <thead>
          <tr className="bg-alt text-secondary">
            <th>Username</th>
            <th>Activity</th>
            <th>Minutes</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <ExerciseList 
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
        </tbody>
      </table>
  )
}
