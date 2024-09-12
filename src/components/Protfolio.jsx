import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from './ui/button'
import { PROJECTS } from '../constants'


export function Portfolio() {

  return (
    <>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-4 p-2 lg:p-4 rounded-xl lg:text-xl text-xs font-normal">
        {PROJECTS.map((project, index) => (
          <div className="w-full rounded-md bg-primary-foreground hover:bg-blue/55 cursor-pointer p-4" key={index}>
            <div key={index} className='mb-4 flex flex-wrap items-start gap-2'>
              <div className="w-1/4">
                <img src={project.image} alt={project.title} width={100} height={100} className='mb-2 rounded' />
              </div>

              <div className="w-3/4">
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                <h6 className='mb-4 text-neutral-500'>{project.description}</h6>
                <h6 className='mb-4 font-medium'>{

                }</h6>

              </div>
            </div>
            <div className="w-full">
            {
              
              project.technologies.map((tech, index) => (
                <Button default key={index} className='mr-2 mt-2 rounded py-1 px-2 text-xs lg:text-sm font-medium text-blue mb-2 bg-secondary hover:text-secondary hover:bg-primary-foreground'>
                {tech}
              </Button>
              ))
            }
            </div>
          </div>


        ))}
      </div>
    </>
  )
}
