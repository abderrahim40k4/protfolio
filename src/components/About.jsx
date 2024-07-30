import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button"
import { ArrowDownToDot} from 'lucide-react';

export function About() {

    return (
      <>
          <div className="w-full flex flex-row justify-evenly items-center p-10 rounded-xl text-2xl font-semibold">
            <Button className="w-5/12 md:p-8 p-4 text-lg md:text-xl bg-blue/100">Download CV <ArrowDownToDot size={26} className="mx-4" /></Button>
            <Button className="w-5/12 md:p-8 p-4 text-lg md:text-xl bg-primary-foreground text-primary hover:text-secondary hover:bg-secondary-foreground">Contact me</Button>
          </div>
      </>
    )
  }
  