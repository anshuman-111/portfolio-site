import React from 'react'

const About = () => {
  return (
    <div name="About" className='bg-gradient-to-b p-4 to-black from-slate-600 w-full h-screen'>
        <div className='sm:my-0 my-16 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mb-4'>
        <h2 className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-white'>About</h2>
        </div>
        <div className='mt-5'>
        <p className='text-md text-white mb-2'>
            My name is Anshuman Gupta. I am a graduate from the University of Wollongong with 
            Masters in Computer Science (Software Engineering Major) from  in December 2022. Now, I am looking for my first full-time role as a software developer or data analyst. 
            </p>
            <p className='text-md text-white mt-2'>
            I enjoy learning concepts and methods and applying them in a professional environment. I enjoy working in teams and adjust to different work environments with ease. I am confident that, with a little guidance and mentoring, I will be a valuable addition to your team. 
            </p>
        
        </div>
        </div>
    </div>
  )
}

export default About