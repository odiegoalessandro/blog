import styled from '@emotion/styled'

export default styled.div`
  h1, h2, h3{
    border-left: 4px solid #ff0080;
    padding-left: .7rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
    font-weight: 700;
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