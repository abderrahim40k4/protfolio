import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Portfolio } from "./Protfolio"
import { Skils} from "./skils"
import Exprience from "./Exprience"
export function Tab() {

    return (
      <>
          <div className="w-full flex flex-row justify-evenly items-center p-5">
          <Tabs defaultValue="Portfolio" className="w-full py-4">
  <TabsList>
    <TabsTrigger value="Portfolio">Portfolio</TabsTrigger>
    <TabsTrigger value="Skills">Skills</TabsTrigger>
    <TabsTrigger value="Exprience">exprienc</TabsTrigger>   
  </TabsList>
  <TabsContent value="Portfolio">
    <Portfolio/>
  </TabsContent>

  <TabsContent value="Skills"> <Skils/> </TabsContent>
  <TabsContent value="Exprience"> <Exprience/></TabsContent>

</Tabs>
          </div>
      </>
    )
  }
  