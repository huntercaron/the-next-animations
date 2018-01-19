import React from 'react'
import styled from 'styled-components'

import animation from './animation'
import Grid from '../../components/Grid'

const Container = styled.div`
  padding: 0.75rem;
  height: 100%;
`

const InnerContainer = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 100%;
  position: relative;
`

const StatementContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-right: 1px solid black;
  height: 100%;
  width: 40%;
  position: relative;
  padding: 0 0.25rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 250ms ease-out;

  ${Container}:hover & {
    width: calc( 100% + 2px );
  }
`

const StatementText = styled.h1`
  text-transform: uppercase;
  line-height: 1;

  text-align: ${props => props.right ? "right" : "left"}
`

function Statement() {
  return (
    <StatementContainer>
        <StatementText>
          Announcing
        </StatementText>

        <StatementText right>
          The Next
        </StatementText>

        <StatementText>
          Gradshow
        </StatementText>
    </StatementContainer>
  )
}

export default class IntroCSS extends React.Component {
  render() {
    return (
      <Container>
        <InnerContainer>
          <Statement/>

        </InnerContainer>
      </Container>
    )
  }
}
