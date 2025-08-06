import React from 'react'

const Tech = (props) => {
  return (
    props.tech.map((item => 
      <div key={item} className='rounded-xl border border-sky-300 w-fit py-1 px-2 text-[1rem]'>{item}</div>
    ))
  )
}

export default Tech