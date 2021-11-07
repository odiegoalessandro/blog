import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import { AppProps } from "next/app"
import theme from "../lib/chakra-theme"
import Fonts from "../components/fonts"
import Main from "../components/main"
import GlobalStyles from "../styles/GlobalStyles"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <GlobalStyles />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  )
}

export default MyApp