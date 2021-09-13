import { Center, Box, Heading, VStack, Text } from "@chakra-ui/react"
import Tooltip from "../components/Tooltip"
import Head from 'next/head'

export default function About(){
  
  return (
    <>
      <Head>
        <title>Sobre mim</title>
      </Head>
      <Center 
        flexDir="column"
        px={{
          base: "2rem",
          sm: "5rem",
          md: "10rem",
          lg: "15rem",
          xl: "20rem"
        }}
      >
        <Box>
          <Heading
            marginTop="8rem"
            fontSize={{
              xl: "5xl", 
              lg: "5xl", 
              md: "5xl", 
              sm: "5xl", 
              base: "3xl"
            }}
          >
            Sobre
          </Heading>
          <Heading 
            fontSize={{
              xl: "5xl", 
              lg: "5xl", 
              md: "5xl", 
              sm: "5xl", 
              base: "3xl"
            }}
            color="#ff0080"
          >
            Diego Alessandro
          </Heading>
          <VStack spacing="1rem" marginTop="1rem">
            <Text as="p">
              Olá me chamo Diego e tenho 15 anos. Eu comecei a estudar desenvolvimento web em 2019,
              durante a pandemia fiz parte de varios eventos sobre os fundamentos basicos do desenvolvimento
              web especialmente desenvolvimento front-end.
            </Text>
            <Text as="p">
              Existem milhões de tecnologias para aprender no front-end e meu objetivo é dominar o maximo
              de tecnologias possivel. Gosto muito de aprender coisas novas e estou disposto a receber
              criticas para aprefeiçoar meus conhecimentos.
            </Text>
            <Text as="p">
              Neste site ainda não tenho um objetivo final, porém pretendo colocar dicas, side-projects, artigos,
              meus projetos em destaque e coisas do tipo para que possa armazenar e compartilhar meu conhecimento
              ao longo da minha jornada como desenvolvedor front-end. Então entre em contato comigo para que
              possamos evoluir juntos!
            </Text>
          </VStack>
          <Heading
            as="h2"
            marginTop="4rem"
            fontSize={{
              xl: "3xl", 
              lg: "3xl", 
              md: "3xl", 
              sm: "3xl", 
              base: "2xl"
            }}
          >
            Contato
          </Heading>
          <Text as="p" marginTop="1rem" marginBottom="4rem">
            Entre em contanto comigo se precisar de uma opinião em algum projeto ou coisa parecida especialmente
            em projetos front-end ou open-source. Fico feliz em ajudar! Entre em contaoto por esse {" "}
            <Tooltip label="diegoalessandrodacruzmartins@gmail.com">
              <b>email</b>
            </Tooltip>
          </Text>
        </Box>
      </Center>
    </>
  )
}