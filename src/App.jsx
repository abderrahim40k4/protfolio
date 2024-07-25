import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle"

function App() {

  return (
    <>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="w-full inline-flex justify-center items-center flex-col pt-16">
           <div className="w-4/6">
           <div className="w-full m-auto inline-flex justify-center items-center">
            <ModeToggle>dark</ModeToggle>
           </div>
           <p>tets</p>
           </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
