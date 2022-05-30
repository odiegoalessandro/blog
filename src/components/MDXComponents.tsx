import NextImage from "next/image"
import { Heading, Link as _Link } from "@chakra-ui/react"
import Link from "next/link"

const h1 = (props: any) => <Heading size="2xl" my="0.5rem" {...props} />
const h2 = (props: any) => <Heading size="xl" my="0.5rem" {...props} />
const h3 = (props: any) => <Heading size="lg" my="0.5rem" {...props} />
const h4 = (props: any) => <Heading size="sm" my="0.5rem" {...props} />
const Image = (props: any) => <NextImage {...props} />
const CustomLink = (props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <_Link color="link" {...props} fontWeight="bold" className="mdx">
          {props.children}
        </_Link>
      </Link>
    )
  }

  return (
    <_Link
      target="_blank"
      rel="noopener noreferrer"
      color="link"
      className="mdx"
      fontWeight="bold"
      {...props}
    >
      {props.children}
    </_Link>
  )
}

const MDXComponents = {
  h1,
  h2,
  h3,
  h4,
  Image,
  a: CustomLink
}

export default MDXComponents
