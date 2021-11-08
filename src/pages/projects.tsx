import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Article from "../components/article"
import Card from "../components/card"
import Section from "../components/section"
import { getAllProjects } from "../lib/projects"

interface Projects {
  title: string
  excerpt: string
  slug: string
  duration: string
  date: string
  image: string
}

interface ProjectsProps {
  projects: Projects[]
}

export default function Projects({projects}: ProjectsProps){
  return (
    <Article title="Portfolio">
      <Container>
        <Heading as="h3" mt={10} size="md">Portfolio</Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={8}>
            {
              projects.map((project, index) => (
                <Section delay={Number(`0.${index}`)}>
                  <Card 
                    slug={`/projects/${project.slug}`}
                    thumbnail={`/images/projects/${project.image}`}
                    title={project.title}
                    key={project.slug}
                  >
                    {project.excerpt}
                  </Card>
                </Section>
              ))
            }
        </SimpleGrid>
      </Container>
    </Article>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const projects = getAllProjects()
  
  return {
    props: {
      projects
    }
  }
}