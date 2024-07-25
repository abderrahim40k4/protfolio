import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle"

function App() {

  return (
    <>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
           <ModeToggle>dark</ModeToggle>
      </ThemeProvider>
    </>
  )
}

export default App
