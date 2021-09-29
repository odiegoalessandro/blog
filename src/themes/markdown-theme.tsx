import { Box, Text, Heading, Link, Image, Code } from '@chakra-ui/react'
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
        transition=".3s"
        pos="relative"
        fontSize="1.2rem"
        _hover={{
          color: "#ff0080",
          _after: {
            w: "100%",
          }
        }}
        _after={{
          content: "''",
          height: "2px",
          bgColor: "#FF0080",
          position: "absolute",
          left: "0",
          bottom: "-3px",
          transition: ".3s",
          w: "0"
        }}
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
        borderLeft: "4px solid #ff0080",
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
            showLineNumbers={true}
          />
        ) : (
          <Code children={children} />
        )}
      </>
    )
  }
}

export default theme