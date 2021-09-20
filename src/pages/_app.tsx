import { ChakraProvider } from "@chakra-ui/react"
import theme from "../themes/theme"
import GlobalStyles from '../styles/GlobalStyles'
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import PageTrasition from "../animations/PageTrasition"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <Menu />
      <PageTrasition>
        <Component {...pageProps} />
      </PageTrasition>
      <Footer />   
    </ChakraProvider>
  )
}

export default MyApp
