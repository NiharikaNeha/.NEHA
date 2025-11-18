import React from 'react'
import { useTheme } from './context/ThemeContext'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const toggle = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex items-center gap-2 px-3 py-1 rounded focus:outline-none focus:ring"
    >
      <motion.span
        layout
        initial={false}
        animate={{ x: isDark ? 16 : 0 }}
        className="w-9 h-5 bg-gray-300 rounded-full relative"
      >
        <motion.span
          layout
          className="block w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow"
          style={{ translateX: isDark ? '14px' : '0px' }}
        />
      </motion.span>

      <span className="hidden sm:inline text-sm text-gray-500">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  )
}

export default ThemeToggle
