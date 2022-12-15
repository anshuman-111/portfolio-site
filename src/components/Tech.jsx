import React from 'react'
import { FaCss3, FaGit, FaHtml5, FaPython } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { ImHtmlFive } from 'react-icons/im'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { FaDocker } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa'
import { DiGit } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { DiLinux } from 'react-icons/di'


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
            src: <FaDocker size={50}/>,
            title: 'Docker',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: <DiLinux size={50}/>,
            title: 'Linux',
            style: 'shadow-yellow-600'
        },
        {
            id: 5,
            src: <SiTailwindcss size={50}/>,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: <FaHtml5 size={50}/>,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: <FaCss3 size={50}/>,
            title: 'CSS',
            style: 'shadow-sky-500'
        },
        {
            id: 8,
            src: <FaGit size={50}/>,
            title: 'Git',
            style: 'shadow-orange-600'
        },
        {
            id: 9,
            src: <FaReact size={50}/>,
            title: 'React',
            style: 'shadow-blue-800'
        },
    ]




  return (
    <div name="tech" 
    className=' bg-gradient-to-b from-black to-slate-600 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='mt-40'>
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