import React from 'react'
import { ChevronRight } from "lucide-react";

const StackDisplay = (props) => {
  return (
    props.data.map((item, index) =>(
        <div key={index}>
            <h1 className='text-[1.5rem] text-sky-300 pb-3'>{item.title}</h1>
            <ul className='text-[1.3rem] font-thin text-sky-100 flex flex-col gap-5'>
              {item.stacks.map((item, index)=> (
                <li key={index} className='flex items-center gap-2'><ChevronRight size="20px" color="#c5a32b" />{item}</li>
              ))}
            </ul>
        </div>
    ))
  )
}

export default StackDisplay