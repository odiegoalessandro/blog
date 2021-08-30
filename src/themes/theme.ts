import { theme, extendTheme } from "@chakra-ui/react"

const customTheme = {
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    mono: 'Inter, system-ui, sans-serif'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    bold: 700
  }
}

export default extendTheme(customTheme)