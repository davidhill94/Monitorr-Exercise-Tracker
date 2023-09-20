import React from 'react';

export const AboutText = () => {
  return (
    <>
        <p>Monitorr is an exercise tracker that allows users to keep a simple record of their exercise habits. It can be used by multiple users and can be personalised with users favourite activities, along with a statistics page that allows users to see their habits in graph form.</p>
        <hr className='border-t-2 border-dotted border-alt w-full my-2'></hr>
        <p>The website was built by myself, <span className='text-alt'><a href="http://thehillcoder.com" target='_blank' rel="noreferrer">David Hill</a></span> - an aspiring Full Stack Developer. I have spent most of my early programming days working on front end skills and projects. Monitorr was my first real taste of implementing the back end skills I have studied and building a Full Stack Website.</p>
        <hr className='border-t-2 border-dotted border-alt w-full my-2'></hr>
        <p>This website includes the following skills: HTML, Tailwind CSS, React, MongoDB, Mongoose, Express.js</p>
    </>
  )
}
