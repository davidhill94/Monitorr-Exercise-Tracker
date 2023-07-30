import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

export const ExerciseList = ({ exercises, setExercises, pagesVisited, exercisesPerPage }) => {

  //Function that deletes an exercise with the relevent id
  const deleteExercise = (id) => {
    axios.delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data));
    //removes exercises from current state and filters out the exercise we have just deleted
    setExercises(exercises.filter(el => el._id !== id))
  }

  return (
    <>
      {[...exercises]
        .reverse()
        .slice(pagesVisited, pagesVisited + exercisesPerPage)
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
