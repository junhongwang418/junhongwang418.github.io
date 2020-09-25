import React from "react"
import Spacing from "./Spacing"
import styled from "../styled/index"
/** @jsx jsx */
import { jsx } from "theme-ui"

const Root = styled.div`
  display: flex;
  align-items: center;
`

const LogoRoot = styled.h1`
  font-family: "Bungee Shade";
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`

const NavigationItemRoot = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: bold;
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
`

export default function Header() {
  return (
    <Root>
      <LogoRoot>
        <a href="/">
          <img src="/icon.svg" />
        </a>
      </LogoRoot>
      <Spacing flex={32} />
      <NavigationItemRoot href="/resume.pdf">📜 Resume</NavigationItemRoot>
    </Root>
  )
}
