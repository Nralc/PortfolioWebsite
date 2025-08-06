import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";
import ProjectDisplay from '../Components/ProjectDisplay';
import { projects } from '../Data';

const Projects = () => {
  return (
    <div className='text-[1.3rem] flex flex-col gap-15'>
      <ProjectDisplay data={projects}/>
      <h1 className='font-thin italic'>-Other projects to be posted-</h1>
    </div>
  )
}

export default Projects