import React from 'react'
import GeneralCont from './Components/GeneralCont'
import Background from './Sections/background'
import Stack from './Sections/Stack'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'

const Sec = () => {
  return (
    <div className='slide-up scroll-mt-24'>
        <GeneralCont title="BACKGROUND" component={<Background />}/>
        <GeneralCont title="STACK" component={<Stack />}/>
        <GeneralCont title="EXPERIENCE" component={<Experience />}/>
        <GeneralCont title="PROJECTS" component={<Projects />}/>
    </div>
  )
}

export default Sec