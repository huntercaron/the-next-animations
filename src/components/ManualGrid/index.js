import React from 'react'
import styled from 'styled-components'

const columns = [37,24,16,11,7,5];
const rows = [3,5,7,10,16,24,36];

// styled components
const Container = styled.div`
  height: 100%;
	width: 100%;
  flex: 1;

`

const Text = styled.p`

`





// Cells Stuff
const CellsContainer = styled.div`
  height: 100%;
  width: 100%;
`

const CellRow = styled.div`
  height: ${props => props.height}%;
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;
`

const Cell = styled.div`
  width: ${props => props.width}%;
  height: 100%;
  border-left: 1px solid black;
`

function Cells() {
  let cellColumns = [];
  let cellRows = [];

  for (let col of columns) {
    cellColumns.push(
      <Cell width={col}/>
    )
  }

  for (let row of rows) {
    cellRows.push(
      <CellRow height={row}>
        {cellColumns}
      </CellRow>
    )
  }

  return (
    <CellsContainer>
      {cellRows}
    </CellsContainer>
  )
}


// component
export default function ManualGrid(props) {
  return (
    <Container>
      <Cells/>
    </Container>
  )
}
