import { ChakraProvider } from "@chakra-ui/react"
import theme from "../themes/theme"
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ChakraProvider>
  )
}

export default MyApp
