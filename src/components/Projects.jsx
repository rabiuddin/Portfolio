import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className='bg-primary'>
      <div className='flex flex-col pb-4'>
        <p className='text-secondary uppercase text-center font-poppins font-medium text-2xl p-6 my-4'>Projects</p>
        <div >
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}

export default Projects