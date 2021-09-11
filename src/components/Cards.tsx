import Card from "./Card"
import { VStack } from "@chakra-ui/react"

export default function Cards({ cards }){
  return (
    <VStack spacing="1rem" p="1.5rem 0">
      {
        cards.map((card, index) => {
          return (
            <Card content={card} key={index} />
          )
        })
      }
    </VStack>
  )
}