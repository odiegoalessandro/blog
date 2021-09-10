import { ChakraProvider } from "@chakra-ui/react"
import theme from "../themes/theme"
import GlobalStyles from '../styles/GlobalStyles'
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import LoadText from "../animations/LoadText"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <Menu />
      <LoadText>
        <Component {...pageProps} />
      </LoadText>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
