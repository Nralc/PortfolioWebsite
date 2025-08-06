import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";
import Tech from './Tech'

const ProjectDisplay = (props) => {
  return (
    props.data.map((item, index) => (
        <div key={index} className='gap-5 sm:grid sm:grid-cols-[1fr_2fr] backdrop-blur-xl bg-white/2 p-10 rounded-2xl shadow-lg '>
        <img className='w-45 h-55 rounded-xl'src={item.imgSrc} alt="" />
        <div className='text-left'>
            <h1 className='flex justify-between py-2'>
                {item.title}
                <BsBoxArrowUpRight />
            </h1>
            <div className='flex flex-col gap-3'>
                <p className='font-thin text-sky-100 text-justify'>
                    {item.desc}
                </p>
                <div className='flex flex-wrap gap-3'>
                    <Tech tech={item.tech}/>
                </div>
            </div>
        </div>
    </div>
    ))
  )
}

export default ProjectDisplay