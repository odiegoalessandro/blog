import styled from "@emotion/styled"
import { Link } from '@chakra-ui/react'

const LinkStyle = styled(Link)`
  position: relative;
  cursor: pointer;
  transition: .3s;
  &::after{
    content: '';
    height: 2px;
    background: #ff0080;
    position: absolute;
    left: 0;
    bottom: -3px;
    transition: .3s;
    width: 0;
  }
  &:hover{
    color: #ff0080;
    text-decoration: none;
  }
  &:hover::after{
    width: 100%;
  }
`

export default LinkStyle