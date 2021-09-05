import { ChakraProvider } from "@chakra-ui/react"
import theme from "../themes/theme"
import GlobalStyles from '../styles/GlobalStyles'
import Menu from "../components/Menu"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <Menu />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
