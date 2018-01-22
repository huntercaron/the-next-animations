import React from 'react'
import styled from 'styled-components'
import GridBlock from '../GridBlock'
import Timer from '../Timer'
import { grid, spacing, breakpoints } from '../../utils/constants.js'
import { H2 } from '../Type'

// styled components
const ContentContainer = GridBlock.extend`
  overflow-x: hidden;
  border-right: none;
  height: 100%;

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
  background-color: ${props => props.theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.fg};
    color: ${props => props.theme.bg};
  }
`

const ArrowGridContainer = GridBlock.extend`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ArrowGridContainerLeft = GridBlock.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 0;
  border-right: 1px solid ${props => props.theme.fg};

  left: 2px;
  width: ${grid.columns[5] + grid.columns[4]};
  z-index: 2;
`

// const ArrowListContainer = styled.div`
//   position: absolute;
//   height: 100%;
//   display: flex;
//   background-color: pink;
//   z-index: 1;
//   width: ${grid.columns[5] + grid.columns[4]};
// `

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    <ArrowContainer {...props}>
      {props.left ? <p>&larr;</p> : <p>&rarr;</p>}
    </ArrowContainer>
  )
}


// component
export default class ContentPreview extends React.Component {
  handleScroll = (e) => {

  }

  render() {
    return (
      <Container>
        <ArrowGridContainerLeft rowStart={5} rowEnd={6} colStart={4} colEnd={6} wAdjust={5}>
          <NavArrow left/>
        </ArrowGridContainerLeft>


        <ContentContainer {...this.props} onScroll={this.handleScroll}>

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
        </ContentContainer>

        <ArrowGridContainer rowStart={5} rowEnd={6} colStart={4} colEnd={6} wAdjust={5}>
          <NavArrow />
        </ArrowGridContainer>
      </Container>
    )
  }
}
