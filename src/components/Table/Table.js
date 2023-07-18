import React from 'react';
import { ExerciseList } from './ExerciseList';

export const Table = ({ exercises, deleteExercise }) => {
  return (
    <table className="w-full h-full my-10 text-center text-white">
        <thead>
          <tr className="bg-alt text-secondary">
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <ExerciseList exercises={exercises} deleteExericse={deleteExercise}/>
        </tbody>
      </table>
  )
}
