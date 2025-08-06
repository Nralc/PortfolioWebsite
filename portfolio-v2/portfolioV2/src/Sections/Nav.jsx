import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className='fixed top-0 fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-indigo-950/60 px-6 py-4 shadow-md flex justify-between items-center'>
        <img className='w-8 h-8' src="src/assets/logo.png" alt="" />
        <div>
            <button className='sm:hidden' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size="2.5rem" color="#6aa7d9" /> : <Menu color="#6aa7d9" size="2.5rem" />}
            </button>
            <ul className='hidden text-sky-300 font-bold flex gap-10 sm:flex sm:text-[1.4rem]'>
                <li className='hover:cursor-pointer hover:text-white'>About</li>
                <li className='hover:cursor-pointer hover:text-white'>Experience</li>
                <li className='hover:cursor-pointer hover:text-white'>Contacts</li>
            </ul>

            
            {isOpen && (
                <div  className='absolute bg-indigo-950/98 backdrop-blur-xl left-0 h-80 w-full mt-7 p-10 sm:hidden'>
                        <ul className='flex flex-col gap-10 text-center text-[1.8rem] text-sky-300 font-bold'>
                            <li className='hover:cursor-pointer hover:text-white'>About</li>
                            <li className='hover:cursor-pointer hover:text-white'>Experience</li>
                            <li className='hover:cursor-pointer hover:text-white'>Contacts</li>
                        </ul>
                </div>
            )}

        </div>
    </div>
  )
}

export default Nav