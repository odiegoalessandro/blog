
import { Box, Text, Heading, Link, Image, Code, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import useInView from 'react-cool-inview'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula"


const theme: any = {
  h1: (props) => {
    const {children} = props
    return (
      <Heading
        as="h1"
        fontSize="2.25rem"
        m="3rem 0 .7rem 0"
      >
        {children}
      </Heading>
    )
  },
  h2: (props) => {
    const {children} = props
    return (
      <Heading
        as="h2"
        fontSize="1.825rem"
        m="3rem 0 .7rem 0"
      >
        {children}
      </Heading>
    )
  },
  h3: (props) => {
    const {children} = props
    return (
      <Heading
        as="h3"
        fontSize="1.5rem"
        m="3rem 0 .7rem 0"
      >
        {children}
      </Heading>
    )
  },
  p: (props) => {
    const {children} = props
    return (
      <Text
        textAlign="left"
        margin="1rem 0"
      >
        {children}
      </Text>

    )
  },
  a: (props) => {
    const {children, href} = props
    return (
      <Link
        color={useColorModeValue("#3d7aed", "#ff63c3")}
        href={href}
      >
        {children}
      </Link>
    )
  },
  blockquote: (props) => {
    const {children} = props
    return(
      <blockquote style={{
        borderLeft: useColorModeValue("4px solid #3d7aed", "4px solid #ff63c3"),
        padding: ".3rem 0 .3rem .7rem",
        margin: "1rem 0",
        fontWeight: "bold"
      }}>
        {children}
      </blockquote>
    )
  },
  img: (props) => {
    const { observe, inView } = useInView({
      unobserveOnEnter: true,
      rootMargin: "100px"
    })
    const {src, alt} = props
    return(
      <Box ref={observe}>
        { inView && <Image src={src} alt={alt} /> }
      </Box>
    )
  },
  code: (props) => {
    const { children, className } = props
    const language = className?.replace('language-', '')
    return (
      <>
        {language ? (
          <SyntaxHighlighter
            language={language}
            style={style}
            children={children}
            customStyle={{
              display: "flex",
              maxWidth: "510px",
              width: "100vw"
            }}
          />
        ) : (
          <Code children={children} />
        )}
      </>
    )
  }
}

export default theme