import React, { useState } from 'react';
import { Athlete } from './Athlete';
import { Duration } from './Duration';
import { Date } from './Date';
import { Activity } from './Activity';
import { Description } from './Description';
import { SubmitForm } from './SubmitForm';

export const ExerciseForm = ({ handleSubmit, username, onChangeUsername, users, activities, activity, onChangeActivity, description, onChangeDescription, duration, onChangeDuration, date, onChangeDate, val }) => {

  return (
    <div
      className="w-full py-10 px-2w-full h-full flex items-center justify-center font-primary">
      <form
        className="w-auto h-auto flex flex-col items-center justify-center"
        onSubmit={handleSubmit}>
        <div className='w-full flex flex-col items-center justify-center sm:flex-row sm:my-2'>
          <Athlete
            users={users}
            username={username}
            onChangeUsername={onChangeUsername}
          />
          <Date
            date={date}
            onChangeDate={onChangeDate}
          />
        </div>
        <div className='w-full flex flex-col items-center justify-center sm:flex-row sm:my-2'>
          <Activity
            activity={activity}
            activities={activities}
            onChangeActivity={onChangeActivity}
          />
          <Duration
            duration={duration}
            onChangeDuration={onChangeDuration}
          />
        </div>
        <div className='w-full flex flex-col items-center justify-center sm:flex-row sm:my-2'>
          <Description
            description={description}
            onChangeDescription={onChangeDescription} />
        </div>
        <SubmitForm
          val={val}
        />
      </form>
    </div>
  )
}
