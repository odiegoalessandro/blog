import { ColorModeScript, extendTheme, ThemeConfig } from '@chakra-ui/react'
import { BaseBreakpointConfig, createBreakpoints } from '@chakra-ui/theme-tools'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const breakpoints: BaseBreakpointConfig = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const theme = extendTheme({config, breakpoints})

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
          <meta name="robots" content="all" />
          <meta name="description" content="Olá meu nome é Diego e esse é meu site pessoal" />
          <meta name="theme-color" content="#1A202C" />
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument