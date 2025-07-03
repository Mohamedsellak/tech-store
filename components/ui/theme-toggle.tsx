"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { FiSun } from "react-icons/fi"
import { BsMoon } from "react-icons/bs"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-xl border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm"
      >
        <FiSun className="h-4 w-4 text-amber-500" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 rounded-xl border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "dark" ? 0 : 180,
          scale: theme === "dark" ? 1.1 : 1 
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        {theme === "light" ? (
          <FiSun className="h-4 w-4 text-amber-500 dark:text-gray-300" />
        ) : (
          <BsMoon className="h-4 w-4 text-blue-400 dark:text-blue-300" />
        )}
      </motion.div>
      <span className="sr-only">Basculer le thème</span>
    </Button>
  )
}