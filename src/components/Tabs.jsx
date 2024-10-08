import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Portfolio } from "./Protfolio"
import { Skils } from "./skils"
import Exprience from "./Exprience"
export function Tab() {

  return (
    <>
      <div className="w-full flex flex-row justify-evenly items-center p-5">
        <Tabs defaultValue="Portfolio" className="w-full py-4">
          <TabsList>
            <TabsTrigger value="Portfolio" className="clip py-2 md:py-4">Portfolio</TabsTrigger>
            <TabsTrigger value="Skills" className="clip py-2 md:py-4">Skills</TabsTrigger>
            <TabsTrigger value="Exprience" className="clip py-2 md:py-4">Exprience</TabsTrigger>
          </TabsList>
          <TabsContent value="Portfolio">
            <Portfolio />
          </TabsContent>

          <TabsContent value="Skills">
            <Skils />
          </TabsContent>
          <TabsContent value="Exprience">
            <Exprience />
          </TabsContent>

        </Tabs>
      </div>
    </>
  )
}
