import { ChakraProvider } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import { AnimatePresence } from "framer-motion"
import { AppProps } from "next/app"
import Fonts from "../components/fonts"
import Main from "../components/main"
import MDXComponents from "../components/MDXComponents"
import NavBar from "../components/navbar"
import theme from "../lib/chakra-theme"
import GlobalStyles from "../styles/GlobalStyles"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <NavBar />
        <Main>
          <GlobalStyles />
          <Component {...pageProps} key={router.route} />
        </Main>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
