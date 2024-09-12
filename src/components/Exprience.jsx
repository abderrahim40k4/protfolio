import React from 'react'
import { EXPERIENCES } from '../constants'
const Exprience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className="my-20 text-4xl text-center">Work History</h2>
        <div className="">
           {EXPERIENCES.map((exprience, index) => (
             <div className='flex flex-wrap items-center lg:justify-center mb-4' key={index}> 
             <div className="w-full lg:w-1/2">
                 <p className='mb-4 text-neutral-400 text-sm'>{exprience.year}</p>
             </div>
             <div className="w-full max-w-xl lg:w-3/4">
                <h6 className='mb-2 font-semibold'>
                        {exprience.role} -
                        <span className='text-blue text-sm'>
                            {exprience.company}
                        </span>
                </h6>
                <p className='mb-4 text-neutral-600'>
                    {exprience.description}
                </p>
                {
                    exprience.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-blue mb-2'>
                            {tech}
                        </span>
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