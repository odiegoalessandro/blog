import { Box, Heading, Center, Button, Link, HStack } from "@chakra-ui/react"
import useInView from "react-cool-inview"
import Card from '../components/Card'
import { motion, Variants } from 'framer-motion'
import ProjectType from "../types/ProjectType"
import React from "react"

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

interface ProjectsProps {
  projects: ProjectType[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
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
          <HStack
            marginTop="2rem"
            justify="space-evenly"
            align="center"
            spacing={{
              base: "0",
              sm: "0",
              md:"0",
              lg: "1rem",
              xl: "1rem"
            }}
            wrap={{
              base: "wrap",
              sm: "wrap",
              md:"wrap",
              lg: "nowrap",
              xl: "nowrap"
            }}
          >
            {
              projects.map((card, index) => {
                return (
                  <Card content={card} key={index} />
                )
              })
            }
          </HStack>
          <Center marginTop="1rem">
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

export default Projects