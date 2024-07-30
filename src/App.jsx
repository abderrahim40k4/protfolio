import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle"
import {Navbar} from "./components/Navbar"
import { Facts } from "./components/factsAbout"
import { Tab } from "./components/Tabs"
import { About } from "./components/About"

function App() {

  return (
    <>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="w-full inline-flex justify-center items-center flex-col md:pt-16 p-8">
           <div className="md:w-4/6 w-full">
           <div className="w-full m-auto inline-flex justify-center items-center">
            <ModeToggle>dark</ModeToggle>
           </div>
           <div className="w-full flex flex-col justify-center items-center mt-[65px]">
            <Navbar/>
           </div>
           <div className="w-full flex flex-col justify-center items-center mt-[65px]">
            <Facts/>
           </div>
           <div className="w-full flex flex-col justify-center items-center mt-[65px]">
            <About/>
           </div>
           <div className="w-full flex flex-col justify-center items-center mt-[65px]">
            <Tab/>
           </div>
           </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
