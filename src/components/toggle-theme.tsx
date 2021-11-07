import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ToggleTheme = () => {
  const { toggleColorMode } = useColorMode()
  
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{display: "inline-block"}}
        exit={{y: 20, opacity: 0}}
        key={useColorModeValue('light', 'dark')}
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .2}}
      >
        <IconButton
          aria-label="toggle theme"
          colorScheme={useColorModeValue("purple", "orange")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ToggleTheme