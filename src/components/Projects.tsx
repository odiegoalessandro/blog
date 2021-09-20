import { Box, Heading, Center, Button, Link, VStack } from "@chakra-ui/react"
import useInView from "react-cool-inview"
import Card from '../components/Card'
import { motion, Variants } from 'framer-motion'

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: "-200px"
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: .5,
      duration: .6,
    }
  }
}

export default function Projects({ projects }){
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "-60px 0px",
  })

  return(

    <Box ref={observe}>
      { inView && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <Heading 
            marginTop="5rem"
            fontSize={{
              xl: "3xl",
              lg: "3xl",
              md: "3xl",
              sm: "xl"
            }}
          >
            Projetos em destaque
          </Heading>
          <VStack spacing="1rem" p="1.5rem 0">
            {
              projects.map((card, index) => {
                return (
                  <Card content={card} key={index} />
                )
              })
            }
          </VStack>
          <Center>
            <Link
              _hover={{}}
              href="/projects"
            >
              <Button>
                Ver mais
              </Button>
            </Link>
          </Center>
        </motion.div>
      ) }
    </Box>
  )
}