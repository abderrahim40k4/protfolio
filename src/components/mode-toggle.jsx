import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [theme, setThemes] =  useState("dark")
  const toggaleHandeller = ()=>{
    if (theme === "dark") {
      setThemes("light")
      setTheme("light")
      
    }
    if (theme === "light") {
      setThemes("dark")
      setTheme("dark")
    }
  }


  return (
    <div>
      <Button variant="outline" size="icon" onClick={toggaleHandeller}>
        {
          theme == "dark" ? <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> : <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        }
          
          <span className="sr-only">Toggle theme</span>
        </Button>
    </div>
  )
}
