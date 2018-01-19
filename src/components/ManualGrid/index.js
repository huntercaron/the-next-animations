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
  margin-top: -1px;
`

const Cell = styled.div`
  width: ${props => props.width}%;
  height: 100%;
  border-left: 1px solid black;
  margin-right: -1px;
`

function Cells() {
  let cellColumns = [];

  for (let col of columns) {
    cellColumns.push(
      <Cell key={col} width={col}/>
    )
  }

  return (
    <CellsContainer>
      {rows.map( (row, i) => (
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
    </Container>
  )
}
