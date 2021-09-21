import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Center, Button } from "@chakra-ui/react"

export default function PageDown(){
  function handlePageDown(event){
    const element = event.target
    element.scrollIntoView()
  }

  return (
    <Center>
      <Button
        bgColor="transparent"
        borderRadius="50%"
        marginTop="4rem"
        fontSize="30px"
        w="60px"
        h="60px"
        _hover={{
          color: "#FF0080"
        }}
        onClick={handlePageDown}
        display={{
          xl: "flex",
          lg: "flex",
          md: "none",
          sm: "none",
          base: "none"
        }}
        aria-label="Botão para rolar a pagina para baixo"   
      >
        <FontAwesomeIcon
          icon={faArrowDown}
          role="img"
        />
      </Button>
    </Center>
  )
}