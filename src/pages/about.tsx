import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import NextImage from "next/image"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout title="about">
      <Box mt="3.5rem">
        <NextImage
          width="1000px"
          height="400px"
          src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80"
          alt="plants"
          objectFit="cover"
          style={{
            borderRadius: "15px",
            filter: "grayscale(100%)",
          }}
          loading="eager"
        />

        <Heading as="h1" mt="2rem" size="md">
          Sobre mim
        </Heading>
        <Text as="p" mt="2rem" color="whiteAlpha.600">
          Diego Alessandro da Cruz Martins, nascido em 25 de setembro de 2006 em
          Sorocaba, São Paulo, Brasil, é uma pessoa comunicativa, curiosa, leal,
          independente e sempre aberto a criticas ou novas ideias.
        </Text>
        <Text as="p" mt="2rem" color="whiteAlpha.600">
          Meu interesse começou em um dia quando estava na escola e um colega
          meu veio e me disse "meu pai me colocou em um curso de programação e é
          super legal", sinceramente eu nem sabia oque era programação mas
          fiquei uma certa inveja do meu amigo saber coisas que eu nem fazia
          ideia de que existiam, nesse mesmo dia eu cheguei em casa e fui
          pesquisar "como aprender a programar", acabei caindo em um video
          chamado "Curso de Python 01: Seja um programador" obviamente assisti a
          esse video e fiquei maravilhado com tudo aquilo e eu sendo curioso do
          jeito que sou acessei aquele canal no youtube e vi todo conteudo de
          python que eles tinham(na epoca era cerca de uns 4 videos) após isso
          em um almoço de domingo qualquer eu cheguei na mesa todo orgulhoso e
          disse "eu fiz uma calculadora querem ver?", e depois desse dia eu
          nunca mais parei desde dos meus 11 anos até agora.
        </Text>
        <Text as="p" mt="2rem" color="whiteAlpha.600">
          Por algum tempo meu sonho foi ser desenvolvedor de games, mas por não
          ter como investir em bons conteudos e não possuir um bom computador
          foi uma ideia abandonada.
        </Text>
        <Text as="p" mt="2rem" color="whiteAlpha.600">
          Atualmente penso em finalizar a escola, iniciar uma falculdade em
          desenvolvimentos de sistemas, arrumar um emprego na aréa e aos poucos
          começar a migrar para desenvolvimento mobile.
        </Text>
        <Heading as="h1" mt="1rem" mb="2rem" size="md">
          Curiosidades
        </Heading>
        <UnorderedList color="whiteAlpha.600" spacing="1rem" mb="2rem">
          <ListItem>
            Comecei a aprender programação em um celular, na epoca um motorola
            g3 e śo fui ter meu primeiro computador cerca de 2 anos depois.
          </ListItem>
          <ListItem>
            Nunca fiz um curso pago ou presencial, meus maiores professores
            foram alguns devs proximos de mim e cursos gratuitos como "next
            level week", "imersão alura" e derivados.
          </ListItem>
          <ListItem>
            Meu primeiro projeto foi um "hello world" quando eu tinha 11 anos de
            idade.
          </ListItem>
          <ListItem>Eu escuto musica 24 horas por dia.</ListItem>
          <ListItem>
            Sempre tive muito interesse em artes marciais já tendo praticado
            judô, jiu-jitsu e atualmente pratico muay thai.
          </ListItem>
        </UnorderedList>
      </Box>
    </Layout>
  )
}
