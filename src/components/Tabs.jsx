import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Tab() {

    return (
      <>
          <div className="w-full flex flex-row justify-evenly items-center p-5">
          <Tabs defaultValue="Portfolio" className="w-full py-4">
  <TabsList>
    <TabsTrigger value="Portfolio">Portfolio</TabsTrigger>
    <TabsTrigger value="Skills">Skills</TabsTrigger>
  </TabsList>

</Tabs>
          </div>
      </>
    )
  }
  