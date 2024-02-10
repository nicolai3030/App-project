import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-black text-4xl font-bold cursor-pointer'>Adjacent-technologies</h1>
        <div>
            <button className='text-black pr-4'>Sign In</button>
            <button className='bg-black px-6 py-4 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar