import Head from 'next/head'
import { CSSReset } from "@chakra-ui/css-reset";
import { css, Global } from "@emotion/react";
import React from 'react';

const GlobalStyles: React.FC = ({ children }) => {
  return(
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
        }
        ::-webkit-scrollbar-thumb {
          background: #ffffff20;
          backdrop-filter: blur(16px);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ffffff30;
        }
        ::-webkit-scrollbar:vertical {
          display: none;
        }
        ::-webkit-scrollbar:horizontal {
          height: 10px;
          
        }
      `}/>
      {children}
    </>
  )
}

export default GlobalStyles