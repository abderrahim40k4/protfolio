import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button"
import { ArrowDownToDot } from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CONTACT } from "@/constants";

export function About() {

  return (
    <>
      <div className="w-full flex flex-wrap justify-evenly items-center p-10 rounded-xl text-sm lg:text-2xl font-semibold gap-4">
        <Button className="w-full lg:w-5/12 md:p-8 p-2 text-sm md:text-xl buttonHover clip">Download CV <ArrowDownToDot size={16} className="mx-4" /></Button>
        
          <Button className="w-full lg:w-5/12 md:p-8 p-2 text-sm md:text-xl bg-primary-foreground text-primary hover:text-secondary hover:bg-secondary-foreground clip">
          <Popover>
          <PopoverTrigger>
            Get in Touch
          </PopoverTrigger>
          <PopoverContent className="clip">
          <div className="text-center tracking-tight text-xs lg:text-sm font-medium">
                <p className="my-4">Address: { CONTACT.address}</p>
                <p className="my-4">Phone: { CONTACT.phoneNo}</p>
                <p className="my-4 border-b border-blue">Email: { CONTACT.email}</p>
            </div>
          </PopoverContent>
        </Popover>
          </Button>
       
      </div>
    </>
  )
}
