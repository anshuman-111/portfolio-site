import React, { useState } from 'react'
import {FaBars , FaTimes} from "react-icons/fa"
import logo from '../assets/logo.gif'

const Navbar = () => {

    const [nav, setNav] = useState(false)


    const links = [
        {   id : 1,
            link: "Home"
        },
        {   id : 2,
            link: "Projects"
        },
        {   id : 3,
            link: "Skills"
        },
        {   id : 4,
            link: "Contact"
        },
    ]



  return (
    <div className='flex items-center justify-between 
    h-20 w-full px-4 z-10 text-white fixed bg-black'>
        <div>
            <h1 className="text-5xl mt-0.3 ml-1">AG</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer hover:scale-105 duration-200 text-gray-400'>{link}</li>
            ))}
        </ul>

        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-600 text-gray-500'>
            {links.map(({id, link}) => (
                <li key={id} className='cursor-pointer py-6 px-4 text-4xl'>{link}</li>
            ))}
        </ul>

        )}

        


    </div>
  )
}

export default Navbar;