import React from 'react'
import { motion } from 'framer-motion'

const Loader = ({ size = 48, text = 'Loading...' }) => {
  const circleStyle = { width: size, height: size }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/70 dark:bg-black/60">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        className="rounded-full border-4 border-t-accent border-gray-200"
        style={circleStyle}
      />
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">{text}</div>
    </div>
  )
}

export default Loader
    