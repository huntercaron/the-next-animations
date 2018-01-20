import React from 'react'
import styled from 'styled-components'
import GridBlock from '../GridBlock'
import { grid } from '../../utils/constants.js'

// styled components
const Container = GridBlock.extend`

`

const Text = styled.p`
`

const ProjectContainer = styled.div`
  width: calc(${grid.columns[0] + grid.columns[1]}% - 1px);
  height: 100%;
  border-right: 1px solid ${props => props.theme.fg};
`

function Project() {
  return(
    <ProjectContainer>

    </ProjectContainer>
  )
}

// component
export default class ContentPreview extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Project/>
      </Container>
    )
  }
}
