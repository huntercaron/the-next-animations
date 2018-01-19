import React from 'react'
import styled from 'styled-components'

/*
  Base component
  Copy this directory and rename to your choosing
*/


// styled components
const TitleLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`

const HeaderContainer = styled.div`

`


// components
export default function Header () {
  return (
    <HeaderContainer>
      <TitleLink to="/">
          <h1>Boiled</h1>
      </TitleLink>
    </HeaderContainer>
  )
}
