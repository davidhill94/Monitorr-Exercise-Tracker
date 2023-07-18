import React from 'react';
import { Link } from 'react-router-dom';

export const ExerciseList = ({ exercises, deleteExericse }) => {
  return (
    exercises.map((ex, index) => {
        return (
        <tr key={index}>
            <td>{ex.username}</td>
            <td>{ex.description}</td>
            <td>{ex.duration}</td>
            <td>{ex.date.substring(0, 10)}</td>
            <td>
                <Link to={"/edit/"+ex._id}>Edit</Link> | <button onClick={() => { deleteExericse(ex._id) }}>Delete</button>
            </td>
        </tr>
        )
    })
  )
}
