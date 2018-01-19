import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../components/Button'


// styled components
const Container = styled.div`

`

const Subtitle = styled.div`
  text-align: left;
`

const List = styled.ul`
  list-style:
`

const LinkContainer = styled.li`

`

const LinkText = styled(Link)`
  font-style: italic;
  color: black;

  &:hover {
    text-decoration: none;
  }
`


// components
function PageLink(props) {
  return (
    <LinkContainer>
      <LinkText to={props.to}>
        {props.children}
      </LinkText>
    </LinkContainer>
  )
}


// page component
export default function IndexPage() {
  return (
    <Container>
      <Subtitle>Testing Animations for the next:</Subtitle>
      <PageLink to="/intro-css-2">intro using css (2)</PageLink>
    </Container>
  )
}
