import React from 'react'
import { FaCss3, FaGit, FaHtml5, FaPython } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'



/* import react_logo from '../assets/reactlogo.png'
import css_logo from '../assets/css_logo.png'
import js_logo from '../assets/js_logo.png'
import docker_logo from '../assets/docker_logo.png'
import git_logo from '../assets/git_logo.png'
import tailwind_logo from '../assets/tailwind_logo.png'
import html_logo from '../assets/html_logo.png'
import python_logo from '../assets/python_logo.png'
import sql_logo from '../assets/sql_logo.png'
import linux_logo from '../assets/linux_logo.png'
 */

const Tech = () => {

    const techs = [
        {
            id: 1,
            src: <FaPython size={50}/>,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 2,
            src: <SiMysql size={50}/>,
            title: 'SQL',
            style: 'shadow-sky-500'
        },
        {
            id: 3,
            src: <SiJavascript size={50}/>,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: <SiTailwindcss size={50}/>,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 5,
            src: <FaHtml5 size={50}/>,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: <FaCss3 size={50}/>,
            title: 'CSS',
            style: 'shadow-sky-500'
        },
        {
            id: 7,
            src: <FaGit size={50}/>,
            title: 'Git',
            style: 'shadow-orange-600'
        },
        {
            id: 8,
            src: <FaReact size={50}/>,
            title: 'React',
            style: 'shadow-blue-200'
        },
    ]




  return (
    <div name="Skills" 
    className=' bg-gradient-to-b p-4 from-black to-slate-600 w-full h-screen'>
        <div className='max-w-screen-lg my-12 mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className=''>
                <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
            </div>




            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {techs.map(({id, src, title,style}) => (
            <div key={id} 
            className={`shadow-md hover:scale-105 py-2 duration-500 rounded-lg ${style}`}>
                    <p className='justify-center items-center inline-block'>{src}</p>
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Tech