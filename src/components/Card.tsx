import { Heading, Text, Link, Image } from '@chakra-ui/react'
import React from 'react'
import ProjectType from '../types/ProjectType'

interface CardProps {
  content: ProjectType
}

const Card: React.FC<CardProps> = ({ content }, rest) => {
  return (
    <Link
      href={`/projects/${content.slug}`}
      w={{
        lg: "20rem",
        sm: "18rem",
        md: "20rem",
        xl: "25rem",
        base: "15rem"
      }}
      h="22rem"
      _hover={{}}
      role="link"
      border="1px solid currentcolor"
      borderRadius="md"
      p="1rem"
      display="flex"
      justifyContent="space-between"
      alignItems="left"
      flexDir="column"
      {...rest}
    >
      <div>
        <Heading fontSize="xl">{content.title}</Heading>
        <Text
          opacity=".7"
          fontSize="sm"
        >
          {content.excerpt}
        </Text>
      </div>
      <Image src={`/${content.image}`} />
      <Text
        _hover={{
          color: "#ff0080"
        }}
      >
        Veja mais
      </Text>
     </Link>
  )
}

export default React.memo(Card)