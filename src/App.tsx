import { useState } from 'react'
import { Button } from "./components/ui/button"
import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from './components/mode-toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>
    </ThemeProvider>

  )
}

export default App
