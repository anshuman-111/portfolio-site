import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='bg-gradient-to-b p-4 from-black to-slate-600 w-full h-screen text-white'>
        <div className='max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-3/4 h-full rounded-2xl text-white bg-transparent'>
        <div className='pb-8 text-center'>
            <p className='text-4xl mt-4 border-b-4 border-gray-500 font-bold inline'> Contact </p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="" className='flex flex-col w-full md:w-1/2'>
            <input 
                type="text" 
                required 
                placeholder='Enter your name'
                name="name" 
                id="name" 
                className='p-2 bg-transparent border-2 rounded-md text-white foucs:outline-none'
                />
                <input 
                type="text" 
                required 
                placeholder='Enter your email'
                name="email" 
                id="email" 
                className='p-2 my-5 bg-transparent border-2 rounded-md text-white foucs:outline-none'
                />
                <textarea 
                placeholder="Enter your message" 
                type="text" 
                name="message" 
                id="message"
                rows="10"
                className='p-2 bg-transparent border-2 rounded-md text-white foucs:outline-none'
                />
                <button className='bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg px-8 py-3 mt-6 mb-0 mx-auto flex items-center hover:scale-110 duration-300 hover:text-black' type="submit" name="submit"> Submit </button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact