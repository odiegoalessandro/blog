import { Tooltip as ChakraTooltip, useColorModeValue } from "@chakra-ui/react"

export default function Tooltip({ label, children }){
  return (
    <ChakraTooltip 
      placement="auto"
      aria-haspopup="true"
      label={label}
      bgColor={useColorModeValue("gray.300", "gray.700")}
      color="currentcolor"
      p=".5rem"
      fontWeight="medium"
      fontSize="1rem"
      borderRadius="md"
      border="2px solid"
      borderColor="gray.600"
    >
      {children}
    </ChakraTooltip>
  )
}