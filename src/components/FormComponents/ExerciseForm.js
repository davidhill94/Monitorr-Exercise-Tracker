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
      className="py-10 px-6 w-full h-full flex items-center justify-center font-primary">
      <form
        className="w-auto max-h-full grid grid-cols-2 grid-rows-form-input"
        onSubmit={handleSubmit}>
        <Athlete
          users={users}
          username={username}
          onChangeUsername={onChangeUsername}
        />
        <Date
          date={date}
          onChangeDate={onChangeDate}
        />
        <Activity
          activity={activity}
          activities={activities}
          onChangeActivity={onChangeActivity}
        />
        <Description
          escription={description}
          onChangeDescription={onChangeDescription} />
        <Duration
          duration={duration}
          onChangeDuration={onChangeDuration}
        />
        <SubmitForm
          val={val}
        />
      </form>
    </div>
  )
}
