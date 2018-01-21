import React from 'react'
import styled from 'styled-components'
import GridBlock from '../GridBlock'
import { grid, spacing } from '../../utils/constants.js'
import { H2 } from '../Type'

// styled components
const Container = GridBlock.extend`
  display: flex;
  overflow-x: scroll;
`

const Text = styled.p`
`

const ProjectContainer = styled.div`
  width: calc(${grid.columns[0] + grid.columns[1]}% - 2px);
  height: 100%;
  flex-shrink: 0;
  border-right: 1px solid ${props => props.theme.fg};
  padding: ${ spacing.padding.normal };
`

const ProjectTitle = H2.extend`
  opacity: ${props => props.disabled ? "0.5" : "1"};
`

function Project(props) {
  return(
    <ProjectContainer {...props}>
      <ProjectTitle {...props}>Introductions</ProjectTitle>
    </ProjectContainer>
  )
}

// component
export default class ContentPreview extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Project disabled={true}/>
        <Project disabled={true}/>
      </Container>
    )
  }
}
