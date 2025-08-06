import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";

const Projects = () => {
  return (
    <div className='w-full py-10 sm:py-30 sm:max-w-[60rem] sm:mx-auto'>
        <div className='text-sky-300 font-bold text-[.8rem] sm:grid sm:grid-cols-[1fr_2fr] sm:text-center'>
            <h1 className='text-[1.5rem] pb-5 underline decoration-wavy decoration-yellow-500 underline-offset-8'>PROJECTS</h1>
            <div className='text-[1.3rem] flex flex-col gap-15'>

                <div className='gap-5 sm:grid sm:grid-cols-[1fr_2fr] backdrop-blur-xl bg-white/2 p-10 rounded-2xl shadow-lg '>
                    <img className='w-45 h-55 rounded-xl'src="src/assets/learnwise.png" alt="" />
                    <div className='text-left'>
                        <h1 className='flex justify-between py-2'>
                            LearnWise
                            <BsBoxArrowUpRight />
                        </h1>
                        <p className='font-thin text-sky-100 text-justify'>
                            An Android application for learning efficiency featuring rich-text notes, Pomodoro timers, flashcards, quiz and review modes, and a discussion forum. 
                        </p>
                    </div>
                </div>

                <div className='gap-5 sm:grid sm:grid-cols-[1fr_2fr] backdrop-blur-xl bg-white/2 p-10 rounded-2xl shadow-lg'>
                    <img className='w-45 h-55 rounded-xl'src="src/assets/harimuhan.png" alt="" />
                    <div className='text-left'>
                        <h1 className='flex justify-between py-2'>
                            Harimuhan
                            <BsBoxArrowUpRight />
                        </h1>
                        <p className='font-thin text-sky-100 text-justify'>A full-stack coffee shop site with an online menu and custom queuing system</p>
                    </div>
                </div>

                <div className='gap-5 sm:grid sm:grid-cols-[1fr_2fr] backdrop-blur-xl bg-white/2 p-10 rounded-2xl shadow-lg'>
                    <img className='w-45 h-55 rounded-xl'src="src/assets/tutok.png" alt="" />
                    <div className='text-left'>
                        <h1 className='flex justify-between py-2'>
                            Tutok: Customer Reservation System
                            <BsBoxArrowUpRight />
                        </h1>
                        <p className='font-thin text-sky-100 text-justify'> A reservation system prototype for a company to track customer preferences, schedule slots, and table availability. </p>
                    </div>
                </div>

                <div className='gap-5 sm:grid sm:grid-cols-[1fr_2fr] backdrop-blur-xl bg-white/2 p-10 rounded-2xl shadow-lg'>
                    <img className='w-45 h-55 rounded-xl'src="src/assets/ml.png" alt="" />
                    <div className='text-left'>
                        <h1 className='flex justify-between py-2'>
                            Handwritten Digit Recognition
                            <BsBoxArrowUpRight />
                        </h1>
                        <p className='font-thin text-sky-100 text-justify'> Created a CNN-based digit recognition model using Python and TensorFlow, trained on MNIST. Processed pre-recorded video of handwritten digits by extracting frames and predicting the final digit shown</p>
                    </div>
                </div>

                <h1 className='font-thin'>-Other projects to be posted-</h1>

            </div>
        </div>
    </div>
  )
}

export default Projects