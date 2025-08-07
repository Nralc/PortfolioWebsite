import React from 'react'
import Marquee from "react-fast-marquee";

const Certs = () => {
  return (
    <div className='slide-up scroll-mt-24 w-full py-10 flex flex-col items-center sm:py-30 text-[1.5rem] sm:max-w-[60rem] sm:mx-auto'>
        <h1 className='text-sky-300 text-center text-[2rem] sm:text-[3rem] font-bold pb-5'>Where I Learned</h1>
        <p className='text-white text-center pb-10'>Institutions that helped sharpen my skills — each logo marks a chapter in my development journey.</p>
            <div className='flex flex-col gap-10'>
                <Marquee autofill>
                    <div className='flex gap-15'>
                        <img className='w-30 h-15 ml-10' src="assets/1.png" alt="" />
                        <img className='w-30 h-15' src="assets/2.png" alt="" />
                        <img className='w-55 h-15' src="assets/3.png" alt="" />
                        <img className='w-35 h-15' src="assets/4.png" alt="" />
                        <img className='w-30 h-15' src="assets/5.png" alt="" />
                    </div>
                </Marquee>
                <Marquee autofill direction='right'>
                    <div className='flex gap-15'>
                        <img className='w-30 h-15 ml-10' src="assets/6.png" alt="" />
                        <img className='w-15 h-15' src="assets/7.png" alt="" />
                        <img className='w-30 h-15' src="assets/8.png" alt="" />
                        <img className='w-40 h-15' src="assets/9.png" alt="" />
                        <img className='w-50 h-15' src="assets/10.png" alt="" />
                    </div>
                </Marquee>
            </div>
    </div>
  )
}

export default Certs