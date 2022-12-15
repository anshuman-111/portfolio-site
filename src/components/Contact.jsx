import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black to-slate-600 w-full h-screen p-4 text-white'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8'>
            <p className='text-4xl border-b-4 border-gray-500 font-bold inline'> Contact </p>
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
                <button className='bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg px-8 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300 hover:text-black' type="submit" name="submit"> Submit </button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact