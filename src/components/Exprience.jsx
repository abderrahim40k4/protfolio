import React from 'react'
import { EXPERIENCES } from '../constants'
import { Button } from './ui/button'
const Exprience = () => {
  return (
   <div className='relative border-b border-neutral-900 pb-4'>
  <h2 className="my-20 text-4xl text-center">Work History</h2>
  
  {/* Neon rotating border */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="absolute w-full h-full border border-blue-500 rounded-xl animate-spin-slow" style={{ filter: 'blur(8px)' }}></div>
  </div>
  
  <div className="relative">
    {EXPERIENCES.map((experience, index) => (
      <div className='flex flex-wrap items-center lg:justify-center mb-4' key={index}> 
        <div className="w-full">
          <p className='mb-4 text-neutral-400 text-sm'>{experience.year}</p>
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h6 className='mb-2 font-semibold'>
            {experience.role} -
            <span className='text-blue text-sm'>
              {experience.company}
            </span>
          </h6>
          <p className='mb-4 text-neutral-600'>
            {experience.description}
          </p>
          {
            experience.technologies.map((tech, index) => (
              <Button default key={index} className='mr-2 mt-4 rounded py-1 px-2 text-xs lg:text-sm font-medium text-blue mb-2 bg-primary-foreground hover:text-secondary hover:bg-secondary-foreground'>
                {tech}
              </Button>
            ))
          }
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Exprience



