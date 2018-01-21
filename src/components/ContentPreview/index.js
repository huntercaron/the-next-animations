import React from 'react'
import styled from 'styled-components'
import GridBlock from '../GridBlock'
import Timer from '../Timer'
import { grid, spacing, breakpoints } from '../../utils/constants.js'
import { H2 } from '../Type'

// styled components
const Container = GridBlock.extend`
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  border-right: none;

  @media (max-width: ${breakpoints.mobile}) {
    border-right: 1px solid ${props => props.theme.fg};
  }
`

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: auto;
  padding-bottom: 15px !important; /*This would hide the scroll bar of the bottom if there is one*/
`

const Text = styled.p`
`

const ProjectContainer = styled.div`
  width: calc(${grid.columns[0] + grid.columns[1]}% - 2px);
  height: 100%;
  flex-shrink: 0;
  border-right: 1px solid ${props => props.theme.fg};
  padding: ${ spacing.padding.normal };

  @media (max-width: 1209px) {
    width: calc(${grid.columns[0] + grid.columns[1]}% - 1px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: calc(${grid.columns[0] + grid.columns[1]}% - 3px);
  }

  @media (max-width: 360px) {
    width: calc(${grid.columns[0] + grid.columns[1]}% - 2px);
  }


`

const ProjectTitle = H2.extend`
  opacity: ${props => props.disabled ? "0.5" : "1"};
`

const ArrowContainer = styled.div`
  width: calc(${grid.columns[0] + grid.columns[1]}% - 1px);
  height: 100%;
  border-left: 1px solid ${props => props.theme.fg};
  position: absolute;
  background-color: pink;
  right: 0;
  top: 0;
`

function Project(props) {
  return(
    <ProjectContainer {...props}>
      <ProjectTitle {...props}>{props.title}</ProjectTitle>
    </ProjectContainer>
  )
}

function NavArrow(props) {
  return(
    <ArrowContainer>

    </ArrowContainer>
  )
}

// component
export default class ContentPreview extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <InnerContainer>
          <Project
            disabled={true}
            title="?&thinsp;?&thinsp;?"
          />

          <Project
            disabled={true}
            title="?&thinsp;?&thinsp;?"
          />

          <Project
            disabled={true}
            title="?&thinsp;?&thinsp;?"
          />


        </InnerContainer>
      </Container>
    )
  }
}
