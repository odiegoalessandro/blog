import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { NextRouter } from 'next/router'
import NavBar from './navbar'

interface MainProps {
  children: ReactNode
  router: NextRouter
}

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="description" content="Olá bem vindo ao meu site" />
        <meta name="author" content="Diego Alessandro" />
        <meta property="og:site_name" content="Diego Alessandro's Homepage" />
        <meta property="og:type" content="website" />
        <title>Diego Alessandro - Homepage</title>
      </Head>
      <NavBar path={router} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main