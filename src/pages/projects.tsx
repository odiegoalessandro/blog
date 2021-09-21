import { GetStaticProps } from "next"
import ProjectType from "../types/ProjectType"
import { getAllProjects } from "../utils/projects"
import Head from 'next/head'
import React from "react"
import { Box, Center, Heading, Text, List, ListItem, ListProps, ListItemProps } from "@chakra-ui/react"
import Card from "../components/Card"
import { motion, Variants } from "framer-motion"
interface ProjectsProps {
  projects: ProjectType[]
}

const MotionList = motion<ListProps>(List)
const MotionListItem = motion<ListItemProps>(ListItem)

const ListVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const ListItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Center
        minH="100vh"
        alignItems="flex-start"
        px={{
          base: "1.5rem",
          sm: "5rem",
          md: "10rem",
          lg: "15rem",
          xl: "20rem"
        }}
      >
        <Box w="full">
          <Heading 
            marginTop="8rem"
            fontSize={{
              base: "3xl",
              xl: "5xl",
              lg: "4xl",
              md: "4xl",
              sm: "4xl"
            }}
          >
            Meus projetos
          </Heading>
          <Text opacity=".7" marginTop=".5rem">
            Alguns projetos feitos por mim
          </Text>
          <Center>
            <MotionList
              marginTop="4rem"
              display="grid"
              initial="hidden"
              animate="visible"
              variants={ListVariants}
              gridTemplateColumns={{
                xl: "1fr 1fr",
                lg: "1fr 1fr",
                md: "1f 1fr",
                sm: "1fr",
                base: "1fr"
              }}
              justifyItems="center"
              gridGap=".7rem"
            >
              {
                projects.map((project, index) => (
                  <MotionListItem
                    key={index}
                    variants={ListItemVariants}
                  >
                    <Card content={project} />
                  </MotionListItem>
                ))
              }
            </MotionList>
          </Center>
        </Box>
      </Center>
    </>
  )
}

export default Projects

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects()
  
  return {
    props: {
      projects
    }
  }
}