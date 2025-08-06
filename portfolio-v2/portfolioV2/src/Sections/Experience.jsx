import React from 'react'
import { workHistory } from '../Data'
import ExperienceDisplay from '../Components/ExperienceDisplay'

const Experience = () => {
  return (
      <div id='experience' className='text-[1.3rem] flex flex-col gap-10'>
          <ExperienceDisplay data={workHistory} />                
      </div>
  )
}

export default Experience