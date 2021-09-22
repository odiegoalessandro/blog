import { Box, Heading, Center, Link, HStack, useColorModeValue } from "@chakra-ui/react"
import Card from '../components/Card'
import { motion, Variants } from 'framer-motion'
import PostType from "../types/PostType"
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
  projects: PostType[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return(

    <Box>
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
          role="feed"
          as="section"
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
                <Card 
                  content={card}
                  key={index}
                  type="project"
                />
              )
            })
          }
        </HStack>
        <Center marginTop="1rem">
          <Link
            _hover={{
              bgColor: useColorModeValue("gray.300", "gray.600")
            }}
            href="/projects"
            w="100px"
            h="40px"
            bgColor={useColorModeValue("gray.100", "gray.700")}
            fontWeight="bold"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="sm"
          >
            Ver mais
          </Link>
        </Center>
      </motion.div>
    </Box>
  )
}

export default Projects