import React from 'react';
import { ExerciseList } from './ExerciseList';

export const Table = ({ exercises, deleteExercise, pagesVisited, exercisesPerPage }) => {
  return (
    <table className="w-full h-fit my-6 text-center text-white bg-test row-start-2 row-end-3">
        <thead>
          <tr className="bg-alt text-secondary">
            <th>Username</th>
            <th>Activity</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <ExerciseList exercises={exercises} deleteExericse={deleteExercise} pagesVisited={pagesVisited} exercisesPerPage={exercisesPerPage}/>
        </tbody>
      </table>
  )
}
