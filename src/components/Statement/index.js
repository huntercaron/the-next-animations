import React from 'react'
import styled from 'styled-components'
import { grid, spacing, animations, breakpoints } from '../../utils/constants.js'

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

  @media (max-width: ${breakpoints.mobile}) {
    border-left: 1px solid ${props => props.theme.fg};
    border-right: 1px solid ${props => props.theme.fg};
    height: calc(95vh - ${spacing.padding.bigger});
    animation: ${animations.growUp} 0.8s 1s ease-in-out forwards;
    border-bottom: 1px solid ${props => props.theme.fg};
  }
`

const StatementText = styled.h1`
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3.5rem;
  text-align: left;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 3rem;
  }
`

const TheNext = styled.h1`
  position: absolute;
  text-transform: uppercase;
  font-size: 3.5rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  right: ${ spacing.padding.smaller };
  top: calc(${ grid.rows[0] + grid.rows[1] + grid.rows[2] + grid.rows[4] + 5.3 }% - 0.4rem);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 3rem;
    text-align: right;
    position: relative;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0;
    top: auto;
  }
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
