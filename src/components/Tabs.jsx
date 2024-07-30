import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button"

export function Tab() {

    return (
      <>
          <div className="w-full flex flex-row justify-evenly items-center px-5 py-5 bg-primary-foreground/55 rounded-xl">
            <Button className="w-5/12 bg-primary-foreground text-primary hover:text-secondary ">Download</Button>
            <Button className="w-5/12 bg-primary-foreground text-primary hover:text-secondary">Download</Button>
          </div>
      </>
    )
  }
  