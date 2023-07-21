import React from 'react';
import { Link } from 'react-router-dom';

export const ExerciseList = ({ exercises, deleteExercise, pagesVisited, exercisesPerPage }) => {

  return (
    <>
      {exercises
        .slice(pagesVisited, pagesVisited + exercisesPerPage)
        .reverse()
        .map((ex, index) => {
          return (
            <tr key={index} className='bg-secondary'>
              <td className='py-1'>{ex.username}</td>
              <td className='py-1'>{ex.activity}</td>
              <td className='py-1'>{ex.duration}</td>
              <td className='py-1'>{ex.date.substring(0, 10)}</td>
              <td className='py-1'>
                <Link to={"/edit/" + ex._id}>Edit</Link> | <button onClick={() => { deleteExercise(ex._id) }}>Delete</button>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}
