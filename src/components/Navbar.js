import React, { useState } from 'react'
import { FaAlignJustify, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  return (
    <nav className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='flex items-center justify-between w-full h-full px-10 py-10'>
        <div className='flex items-center'>
          <h1 className='mr-4 text-3xl font-bold sm:text-4xl'>Chatty</h1>
          <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='w-full border-b-2 border-zinc-300'>Home</li>
            <li className='w-full border-b-2 border-zinc-300'>About</li>
            <li className='w-full border-b-2 border-zinc-300'>Support</li>
            <li className='w-full border-b-2 border-zinc-300'>Feature</li>
            <li className='w-full border-b-2 border-zinc-300'>Feedback</li>
          </ul>
        </div>
        <div className='hidden pr-4 md:flex'> 
          <button className='mr-4 text-slate-600 bg-transparent border-none'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='mr-4 md:hidden' onClick={() => setNav(!nav)}>
          {!nav ? <FaAlignJustify className='w-5' /> : <FaTimes className='w-5' /> }
        </div>
      </div>
    </nav>
  )
}

export default Navbar