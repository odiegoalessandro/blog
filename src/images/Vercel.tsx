import { Box } from "@chakra-ui/react";
import Tooltip from "../components/Tooltip";

export default function Vercel(){
  return(
    <Tooltip label="Vercel SWR,Muito util quando se trabalha
                    com Next.js pois otimiza codigos, requisições
                    e etc."
    >
      <Box
        as="svg"
        role="img"
        stroke="currentColor"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="0"
        viewBox="0 0 512 512"
        h="50px"
        w="50px"
        transition=".3s"
        _hover={{
          fill: "#FF0080"
        }}
      >
        <path  d="M256 48l240 416H16z"></path>
      </Box>
    </Tooltip>
  )
}