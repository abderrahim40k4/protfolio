import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button"
import { ArrowDownToDot } from 'lucide-react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { CONTACT } from "@/constants";

export function About() {

  return (
    <>
      <div className="w-full flex flex-row justify-evenly items-center p-10 rounded-xl text-2xl font-semibold">
        <Button className="w-5/12 md:p-8 p-2 text-sm md:text-xl bg-blue/100">Download CV <ArrowDownToDot size={26} className="mx-4" /></Button>
        
          <Button className="w-5/12 md:p-8 p-2 text-sm md:text-xl bg-primary-foreground text-primary hover:text-secondary hover:bg-secondary-foreground">
          <HoverCard>
          <HoverCardTrigger>
            Get in Touch
          </HoverCardTrigger>
          <HoverCardContent>
          <div className="text-center tracking-tight text-sm font-medium">
                <p className="my-4">Address: { CONTACT.address}</p>
                <p className="my-4">Phone: { CONTACT.phoneNo}</p>
                <p className="my-4 border-b border-blue">Email: { CONTACT.email}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
          </Button>
       
      </div>
    </>
  )
}
