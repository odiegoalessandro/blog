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
    margin: 1rem 0;
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
  li{
    margin: .5rem 0 .5rem 1rem;
  }
  blockquote{
    border-left: 4px solid #ff0080;
    padding: .3rem 0 .3rem .7rem;
    margin: 1rem 0;
    font-weight: bold;
  }
`