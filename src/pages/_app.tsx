import { ChakraProvider } from "@chakra-ui/react"
import theme from "../themes/theme"
import GlobalStyles from '../styles/GlobalStyles'
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import { AuthContextProvider } from "../contexts/AuthContext"

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <GlobalStyles />
        <Menu />
        <Component {...pageProps} />
        <Footer />   
      </ChakraProvider>
    </AuthContextProvider>
  )
}

export default MyApp
