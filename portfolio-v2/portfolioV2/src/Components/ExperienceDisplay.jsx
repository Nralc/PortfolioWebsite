import React from 'react'

const ExperienceDisplay = (props) => {
  return (
    props.data.map((item, index) =>(
        <div key={index} className='sm:grid sm:grid-cols-[2fr_5fr] backdrop-blur-xl bg-white/2 p-10 rounded-2xl shadow-lg'>
            <h1 className='text-left font-thin text-sky-100'>{item.date}</h1>
            <div>
                <h1 className='text-left pb-5'>{item.position}<span> @ {item.company}</span></h1>
                <p className='text-justify font-thin text-sky-100'>
                    {item.description}
                </p>
            </div>
        </div>
    ))
  )
}

export default ExperienceDisplay