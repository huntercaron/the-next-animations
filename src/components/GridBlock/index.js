import React from 'react'
import styled from 'styled-components'

// trying to figure out a base grid block component that we can extend

// styled components
const GridBlock = styled.div`
  overflow: hidden;
  min-width: 0;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
`

export default GridBlock;
