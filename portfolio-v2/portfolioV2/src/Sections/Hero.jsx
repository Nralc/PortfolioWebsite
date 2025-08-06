import React from 'react'

const Hero = () => {
  return (
    <div className='slide-up scroll-mt-24 w-full py-20 sm:py-20 sm:px-10 text-[1.2rem] text-sky-300 sm:max-w-[60rem] sm:mx-auto'>
        <h3 className='text-[1.6rem]'>Hi, I'm</h3>
        <h1 className='text-[3rem] font-bold text-white sm:text-[4rem]'>Clarence Montano.</h1>
        <h1 className='text-[2.1rem] font-bold pb-7 sm:text-[4rem]'>Crafting impact with code</h1>
        <p className='text-[1.5rem] text-justify font-thin text-white max-w-80 sm:text-[1.6rem] sm:max-w-150'>I’m a developer blending smart systems and sleek design. With roots in <span className='font-bold text-sky-300'>full-stack development</span> and a growing passion for <span className='font-bold text-sky-300'>data science</span>.</p>
        
        <div className='flex gap-5'>
            <a href="Montaño, Clarence Robert - Resume 2025.pdf" download="Montaño, Clarence Robert - Resume 2025.pdf">
              <button className='text-[1.2rem] rounded-xl border bg-sky-300 text-black p-3 mt-10 hover:border-sky-300 hover:border-[.15rem] hover:cursor-pointer hover:bg-white/0 hover:text-sky-300 sm:text-[1.5rem]'>Download Resume</button>
            </a>
            <a href="Montaño, Clarence Robert - Resume 2025.pdf" target="_blank" rel="noopener noreferrer">
              <button className='text-[1.2rem] rounded-xl border border-sky-300 border-[.15rem] p-3 mt-10 hover:cursor-pointer hover:bg-sky-300 hover:text-black sm:text-[1.5rem]'>Preview Resume</button>
            </a>
        </div>

    </div>
  )
}

export default Hero