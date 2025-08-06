import React from 'react'

const GeneralCont = ({title, component}) => {
  return (
    <div className='w-full py-10 sm:py-30 text-[1.5rem] sm:max-w-[60rem] sm:mx-auto'>
        <div className='text-sky-300 font-bold sm:grid sm:grid-cols-[1fr_2fr] sm:text-center'>
            <h1 className='pb-5 underline decoration-wavy decoration-yellow-500 underline-offset-8'>{title}</h1>
            {component}
        </div>
    </div>
  )
}

export default GeneralCont