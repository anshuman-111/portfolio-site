import React from 'react';
import { Link } from 'react-scroll';
import {BsCaretRightFill} from "react-icons/bs"

const Home = () => {
  return (
    <div name="Home" 
    className='p-4 w-full h-screen bg-gradient-to-b
     from-black via-black to-slate-700'>
        <div 
        className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row'>

            <div 
            className='flex flex-col justify-center h-full'>

                <h2 
                className='text-4xl sm:text-7xl font-bold text-white px-4 my-4'> 
                Software developer
                </h2>
                <h2 
                className='text-3xl sm:text-7xl font-bold text-white px-4 my-4'> 
                Aspiring Data Analyst
                </h2>
                <p 
                className=' text-gray-400 py-4 max-w-md px-4'>
                Recent computer science graduate keen on building scalable web applications.
                </p>
                <p 
                className=' text-gray-400 py-4 max-w-md px-4'>
                    
                </p>


                <div className=' px-4'>
                    <Link 
                    to="Projects"
                    smooth
                    duration={500}
                    >
                    <button 
                    className='group text-white w-fit px-5 py-3 my-2 flex 
                    items-center rounded-md bg-gradient-to-r from-green-800 to-green-500 text-lg'>Projects
                        <span 
                        className='group-hover:rotate-90 duration-300 px-2'>
                            {/* <BsFillArrowRightSquareFill size={20} /> */}
                            <BsCaretRightFill size={20} />
                </span>
                    </button>
                    </Link>
                    
                </div>
            </div>      
        </div>
    </div>
    
  )
}



export default Home