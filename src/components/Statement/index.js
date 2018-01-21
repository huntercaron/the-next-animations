import React from 'react'
import styled from 'styled-components'
import { grid, spacing, animations } from '../../utils/constants.js'

// styled components
const StatementContainer = styled.div`
  ${'' /* border-right: 1px solid black; */}
  height: 100%;
  width: 100%;
  position: relative;
  padding: 0 ${ spacing.padding.smaller };
  overflow: hidden;
  color: ${props => props.theme.fg};

  animation: ${animations.growIn} 0.8s 1s ease-in-out forwards;

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
  font-size: 3.5rem;

  text-align: left;
`

const TheNext = styled.h1`
  position: absolute;
  text-transform: uppercase;
  font-size: 3.5rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  right: ${ spacing.padding.smaller };
  top: calc(${ grid.rows[0] + grid.rows[1] + grid.rows[2] + grid.rows[4] + 7 }% - 0.45rem);
`

export default function Statement(props) {
  return (
    <StatementContainer>
        <StatementText>
          Announcing
        </StatementText>

        <TheNext right>
          The Next
        </TheNext>

        <StatementText>
          Gradshow
        </StatementText>
    </StatementContainer>
  )
}
