import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

export default styled(Box)`
  h1, h2, h3{
    font-weight: 700;
    margin: 3rem 0 .7rem 0 ;
  }
  h1{
    font-size: 2.25rem;
  }
  h2{
    font-size: 1.825rem;
  }
  h3{
    font-size: 1.5rem;
  }
  p{
    text-align: left;
  }
  a{
    transition: .3s;
    &:after{
      content: '';
      height: 2px;
      width: 0;
      position: absolute;
      left: 0;
      bottom: -10px;
    }
    &:hover:after{
      width: 100%;
    }
    &:hover{
      color: #ff0080;
    }
  }
  ol, ul{
    margin-left: 1rem;
  }
`