import React from 'react'
import fmda from '../assets/flatmates_logo.jpeg'
import invbuddy from '../assets/invbuddy.png'
import sdc from '../assets/sdc.png'




const Projects = () => {

  const projects = [
    {
      id: 1,
      src: invbuddy,
      alt: "Inventory App using React and Flask",
      url: "https://invbuddy.herokuapp.com/",
      giturl: "https://github.com/anshuman-111/simple-inventory"
    },
    {
      id: 2,
      src: fmda,
      alt: "Flatmates Data Web Scraper",
      url: process.env.PUBLIC_URL + "/Flatmates.html",
      giturl: "https://github.com/anshuman-111/flatmates-data"
    },
    {
      id: 3,
      src: sdc,
      alt: "Survey Dataset Cleaning",
      url: process.env.PUBLIC_URL + "/survey_data_report.html",
      giturl: "https://github.com/anshuman-111/data-cleaning"
    }
  ]



  return (
    <div name="Projects" className=' bg-gradient-to-b from-slate-600 to-black w-full text-white p-4 md:h-screen'>
      <div className='my-5 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
      {projects.map(({id, src, alt, url, giturl}) => (<div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
        <img src={src} alt={alt} className='rounded-md hover:scale-105 duration-200 ' />
        <div className=' flex items-center justify-center'>
          <button 
          className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 rounded-3xl hover:bg-green-400 hover:text-black'
          onClick={()=>{window.open(url,"_blank",'noopener,noreferrer')}}
          >Demo</button>
          <button 
          className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 rounded-3xl hover:bg-green-400 hover:text-black'
          onClick={()=>{window.open(giturl,"_blank",'noopener,noreferrer')}}
          >Code</button>
        </div>
      </div>
    ))}
    </div>          
  </div>
</div>

  )
}

export default Projects