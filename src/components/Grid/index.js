import React from 'react'
import styled from 'styled-components'
import { grid } from '../../utils/constants.js'

// styled components
const Container = styled.div`
  height: 100%;
	width: 100%;
  flex: 1;
  position: relative;
`

const Text = styled.p`

`

// Cells Stuff
const CellsContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
`

const CellRow = styled.div`
  height: ${props => props.height}%;
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.fg};
  margin-top: -1px;
`

const Cell = styled.div`
  width: ${props => props.width}%;
  height: 100%;
  border-left: 1px solid ${props => props.theme.fg};
  margin-right: -1px;
`

function Cells() {
  let cellColumns = [];

  for (let col of grid.columns) {
    cellColumns.push(
      <Cell key={col} width={col}/>
    )
  }

  return (
    <CellsContainer>
      {grid.rows.map( (row, i) => (
        <CellRow key={i} height={row}>
          {cellColumns}
        </CellRow>
      ))}
    </CellsContainer>
  )
}


// component
export default function Grid(props) {
  return (
    <Container>
      <Cells/>
      {props.children}
    </Container>
  )
}
