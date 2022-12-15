/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {TfiEmail} from "react-icons/tfi";
import { CgFileDocument } from 'react-icons/cg';

const Social = () => {

    const links = [ 
        { 
            id: 1,
            child: (<>
                LinkedIn <FaLinkedin size={30}/>
                </>),
                href: "https://www.linkedin.com/in/anshumangupta1997/",
                style: 'rounded-tr-md'
        },
        { 
            id: 2,
            child: (<>
                Github <FaGithub size={30}/>
                </>),
                href: "https://github.com/anshuman-111",
        },
        { 
            id: 3,
            child: (<>
                Email <TfiEmail size={30}/>
                </>),
                href: "mailto:anshuman11197@gmail.com",
        },
        { 
            id: 4,
            child: (<>
                Resume <CgFileDocument size={30}/>
                </>),
                href: "/resume.pdf",
                style: 'rounded-br-md'
        },
    ]
  return (
    <div className='flex-col top-[35%] left-0 fixed hidden lg:flex'>
        <ul className=''>
            {links.map(({id, child, href, style, download})=> (
                // eslint-disable-next-line no-useless-concat
                <li className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-green-500 to-green-800" + " " + style}>
                    <a href={href} without rel="noreferrer noopener" className="flex justify-between items-center w-full text-white" target="_blank">{child}
                    </a>
                </li>
            ) )}
            
        </ul>
    </div>
  )
}

export default Social