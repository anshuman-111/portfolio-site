import React from 'react'

const About = () => {
  return (
    <div name="About" className='bg-gradient-to-b p-4 to-black from-slate-600 w-full h-screen'>
        <div className='sm:my-0 my-16 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mb-4'>
        <h2 className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-white'>About</h2>
        </div>
        <div className='mt-5'>
        <p className='text-lg md:text-2xl text-white mb-5 text-justify p-5'>
        My name is Anshuman Gupta. I am a recent graduate of the University of Wollongong with a Master in Computer Science (Software Engineering Major). I am looking for my first full-time role as a software developer or data analyst.  
        </p>
        <p className='text-lg md:text-2xl text-white mt-5 text-justify p-5'>
        I am a quick learner and I enjoy learning new concepts and methods and applying them in a professional setting. I am and always have been, a team player and am capable of adjusting to different work environments with ease. Being a business undergraduate, I am constantly honing my communication and collaboration skills. 
        </p>
        <p className='text-lg md:text-2xl text-white mt-5 text-justify p-5'>
        I currently work in a customer facing role at a fine dining restaurant. Although my current occupation is technically unrelated, it has allowed me to practice and improve my communication skills and understand customer service. I am confident that with a little guidance and mentoring, I will be a valuable addition to your team.
        </p>
        
        </div>
        </div>
    </div>
  )
}

export default About