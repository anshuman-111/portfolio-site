import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {TfiEmail} from "react-icons/tfi";
import { CgFileDocument } from 'react-icons/cg';

const Contact = () => {

  const links = [ 
    { 
        id: 1,
        child: (<>
           <FaLinkedin size={30}/>LinkedIn 
            </>),
            href: "https://www.linkedin.com/in/anshumangupta1997/",
 
    },
    { 
        id: 2,
        child: (<>
            <FaGithub size={30}/>Github 
            </>),
            href: "https://github.com/anshuman-111",
    },
    { 
        id: 3,
        child: (<>
           <TfiEmail size={30}/>Email 
            </>),
            href: "mailto:anshuman11197@gmail.com",
    },
    { 
        id: 4,
        child: (<>
            <CgFileDocument size={30}/>Resume 
            </>),
            href: "/resume.pdf",
    },
]

  return (
    <div name="Contact" className='bg-gradient-to-b p-4 from-black to-slate-600 w-full h-screen text-white'>
        <div className='max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-3/4 h-full rounded-2xl text-white bg-transparent'>
        <div className='pb-8 text-center sm:mt-0 mt-56'>
            <p className='text-4xl mt-4 border-b-4 border-gray-500 font-bold inline'> Contact </p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/cc6aa525-099d-4c91-9491-8005bd7f7012" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input 
                type="text" 
                required 
                placeholder='Enter your name'
                name="name" 
                id="name" 
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <input 
                type="text" 
                required 
                placeholder='Enter your email'
                name="email" 
                id="email" 
                className='p-2 my-5 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <textarea 
                placeholder="Enter your message" 
                type="text" 
                name="message" 
                id="message"
                rows="7"
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />
                <button className='bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg px-8 py-3 mt-2 mx-auto flex items-center hover:scale-110 duration-300 hover:text-black' type="submit"> Submit </button>
            </form>
        </div>
       
        </div>
    </div>
  )
}

export default Contact