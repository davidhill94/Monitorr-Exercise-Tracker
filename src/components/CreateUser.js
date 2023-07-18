import React, { useState } from 'react';
import axios from 'axios';

export const CreateUser = () => {

    const [username, setUsername] = useState("");

    //Sets state when input value is being changed
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    //Sets username when form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: username
        }
        //POST Request that updates users on the backend database
        axios.post("http://localhost:5000/users/add", user)
            .then(res => console.log(res.data));

        //Resets form input to empty string
        setUsername("");
    }

    return (
        <div 
        className="bg-slate-300">
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        className="border-solid border-2 border-indigo-600"
                        type="text"
                        required
                        value={username}
                        onChange={onChangeUsername}
                    />
                </div>
                <div>
                    <input
                        className='border-solid border-2 border-indigo-600'
                        type="submit"
                        value="Create User"
                    />
                </div>
            </form>
        </div>
    )
}