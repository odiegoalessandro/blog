import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {}

const components = {}

const fonts = {
  heading: "Roboto, sans-serif",
  body: "Roboto, sans-serif"
}

const colors = {}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true
}

export default extendTheme({ config, styles, components, fonts, colors })
