"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black/20 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/20 transition-colors text-black dark:text-white"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5 text-black dark:text-white" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
