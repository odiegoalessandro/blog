import React from "react";
import LinkStyle from "../styles/Link";
import NextLink from "next/link"

export default function Link({href, color, fontWeight, children}){
  return(
    <NextLink href={href}>
      <LinkStyle color={color} fontWeight={fontWeight}>
        {children}
      </LinkStyle>
    </NextLink>
  )
}