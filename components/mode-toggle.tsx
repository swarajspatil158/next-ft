"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Only render component after first mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return (
        <div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full relative overflow-hidden mt-2"
          >
            
              <div className="absolute inset-0 flex items-center justify-center">
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
              </div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      )
  }

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full relative overflow-hidden mt-2"
      >
        {theme === 'dark' ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Moon className="h-[1.2rem] w-[1.2rem] text-purple-500" />
          </div>
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}