import React from 'react'
import styled from 'styled-components'

// styled components
const StatementContainer = styled.div`
  ${'' /* border-right: 1px solid black; */}
  height: 100%;
  width: 40%;
  position: relative;
  padding: 0 0.25rem;
  overflow: hidden;
  color: ${props => props.theme.fg};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 250ms ease-out;
`

const StatementText = styled.h1`
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;

  text-align: ${props => props.right ? "right" : "left"}
`

export default function Statement(props) {
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
