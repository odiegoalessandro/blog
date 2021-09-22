import { Heading, Text, Link, Image } from '@chakra-ui/react'
import React from 'react'
import useInView from 'react-cool-inview'
import PostType from '../types/PostType'

interface CardProps {
  content: PostType
  type: "project" | "post"
}

const Card: React.FC<CardProps> = ({ content, type }, rest) => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "-60px 0px",
  })

  switch(type){
    case "project":
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
    case "post":
      const months = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
      ]
    
      const date = new Date(content.date)
      const postingDate = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`

      return (
        <Link
          ref={observe}
          href={`/posts/${content.slug}`}
          w="full"
          h="7rem"
          display="flex"
          flexDir="column"
          justifyContent="space-evenly"
          p="0 1rem"
          borderRadius="lg"
          aria-label="Card de postagens"
          role="article"
          border="1px solid currentcolor"
          _hover={{}}
        >
          <Heading
            fontSize="3xl"
          >
            {content.title}
          </Heading>
          <Text fontSize="sm">
            <b>{postingDate}</b> • {content.duration}min de leitura
          </Text>
          <Text
            opacity=".7"
            fontSize="sm"
          >
            {content.excerpt}
          </Text>
        </Link>
      )
  }
}

export default React.memo(Card)