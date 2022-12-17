import React, { useState } from 'react'
import {FaBars , FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll'

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
            link: "About"
        },
        {   id : 5,
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
                 <Link 
                 to={link}
                 smooth
                 duration={500}
                 ><li key={id} className='px-4 cursor-pointer hover:text-black hover:bg-green-200 rounded-xl duration-200 h-16 w-28 flex justify-center items-center text-gray-400'>
                    {link}
                </li>
           </Link>
                
            ))}
        </ul>

        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-600 text-black'>
            {links.map(({id, link}) => (
                <Link 
                onClick={()=>setNav(false)}
                to={link}
                smooth
                duration={500}
                >
                <li key={id} className='cursor-pointer my-6 w-64 text-center py-6 px-4 bg-transparent text-white hover:bg-green-200 hover:text-black duration-300 rounded-lg text-3xl'>{link}</li>
                </Link>
            ))}
        </ul>

        )}

        


    </div>
  )
}

export default Navbar;