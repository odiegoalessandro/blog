import { Heading, Text, Link, Image } from '@chakra-ui/react'
import React from 'react'
import useInView from 'react-cool-inview'
import ProjectType from '../types/ProjectType'

interface CardProps {
  content: ProjectType
}

const Card: React.FC<CardProps> = ({ content }, rest) => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "-60px 0px",
  })

  return (
    <Link
      ref={observe}
      href={`/projects/${content.slug}`}
      w={{
        lg: "18rem",
        sm: "18rem",
        md: "18rem",
        xl: "25rem",
        base: "15rem"
      }}
      h="22rem"
      _hover={{}}
      border="1px solid currentcolor"
      borderRadius="md"
      p="1rem"
      display="flex"
      justifyContent="space-between"
      alignItems="left"
      flexDir="column"
      role="article"
      aria-label="Card de projetos"
      {...rest}
    >
      {
        inView && (
          <>
            <div>
              <Heading fontSize="xl">
                {content.title}
              </Heading>
              <Text
                opacity=".7"
                fontSize="sm"
              >
                {content.excerpt}
              </Text>
            </div>
            <Image src={`./${content.image}`} alt={content.title}  />
            <Text
              _hover={{
                color: "#ff0080"
              }}
            >
              Veja mais
            </Text>
          </>
        )
      }
     </Link>
  )
}

export default React.memo(Card)