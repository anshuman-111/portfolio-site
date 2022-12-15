import React from 'react'
import fmda from '../assets/flatmates_logo.jpeg'
import groc from '../assets/grocery.jpeg'
import tsa from '../assets/tsa.jpeg'
import webbot from '../assets/webbot.jpeg'

const Projects = () => {

  const projects = [
    {
      id: 1,
      src: fmda,
      alt: "flatmates scrape and analysis"
    },
    {
      id: 2,
      src: groc,
      alt: "Grocery app"
    },
    {
      id: 3,
      src: tsa,
      alt: "ARIMA"
    },
    {
      id: 4,
      src: webbot,
      alt: "Webbot"
    }
  ]



  return (
    <div name="projects" className=' bg-gradient-to-b from-slate-600 to-black w-full text-white md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
      {projects.map(({id, src, alt}) => (<div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
        <img src={src} alt={alt} className='rounded-md hover:scale-105 duration-200 ' />
        <div className=' flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
        </div>
      </div>
    ))}
    </div>          
  </div>
</div>

  )
}

export default Projects