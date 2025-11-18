export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i, duration: 0.5 } })
}

export const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
}

export const cardPress = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -6 },
  tap: { scale: 0.99 }
}
