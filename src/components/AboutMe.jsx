import React from 'react'

const AboutMe = () => {
  return (
    <section id='aboutme' className='bg-secondary w-full sm:px-36 xs:px-10 px-4'>
        <p className='font-poppins font-semibold text-xl text-primary px-4 pt-7'>About Me</p>
        <div className='bg-gradient-to-r from-cyan-400 to-blue-700 h-[2px] w-[95px] ml-4 mb-5'/>
        <p className='font-poppins text-[18px] ml-4 leading-8 pb-4'>I am currently pursuing a Bachelor's degree in <span className='text-primary'>Software Engineering</span> from <span className='text-primary'>FAST NUCES, </span>one of the most prestigious IT universities in Pakistan. With a keen interest in learning new technologies and a passion for solving complex problems, I have developed expertise in frontend development, particularly with <span className='text-primary'>React.</span> Utilizing my skills, I have created several dynamic projects. Additionally, I have a growing interest in Django and am eager to expand my knowledge in this area.</p>
    </section>
  )
}

export default AboutMe