import { GetStaticProps } from "next"
import ProjectType from "../types/ProjectType"
import { getAllProjects } from "../utils/projects"
import Head from 'next/head'
import React from "react"
import { Box, Center, Heading, Text, List, ListItem } from "@chakra-ui/react"
import Card from "../components/Card"

interface ProjectsProps {
  projects: ProjectType[]
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
          <List
            marginTop="4rem"
            display="grid"
            gridTemplateColumns={{
              xl: "1fr 1fr",
              lg: "1fr 1fr",
              md: "1fr",
              sm: "1fr",
              base: "1fr"
            }}
            justifyItems="center"
            gridGap=".7rem"
          >
            {
              projects.map((project, index) => (
                <ListItem key={index}>
                  <Card content={project} />
                </ListItem>
              ))
            }
          </List>
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