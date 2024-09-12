import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle"
import {Navbar} from "./components/Navbar"
import { Facts } from "./components/factsAbout"
import { Tab } from "./components/Tabs"
import { About } from "./components/About"
import { Footer } from "./components/footer"

function App() {

  return (
    <>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="w-full inline-flex justify-center items-center flex-col md:pt-16 p-4">
           <div className="md:w-5/6 w-full">
           <div className="w-full m-auto inline-flex justify-center items-center">
            <ModeToggle>dark</ModeToggle>
           </div>
           <div className="w-full flex flex-col justify-center items-center mt-[32px]">
            <Navbar/>
           </div>
           <div className="w-full flex flex-col justify-center items-center mt-[32px]">
            <Facts/>
           </div>
           <div className="w-full flex flex-col justify-center items-center mt-[32px]">
            <About/>
           </div>
           <div className="w-full flex flex-col justify-center items-center mt-[32px]">
            <Tab/>
           </div>
           <Footer/>
           </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
