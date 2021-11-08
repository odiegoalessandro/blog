import { Box, LinkBox, LinkOverlay, Text, Heading } from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image" 

const Card = ({ children, slug, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={slug}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          width="250px"
          height="150px"
          className="grid-item-thumbnail"
        />
        <LinkOverlay href={slug}>
          <Heading mt={2} fontSize="16px">
            {title}
          </Heading>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export default Card