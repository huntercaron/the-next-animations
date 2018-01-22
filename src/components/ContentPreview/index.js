import React from 'react'
import styled from 'styled-components'
import GridBlock from '../GridBlock'
import Timer from '../Timer'
import moment from 'moment'
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
  padding-right: -${grid.columns[5] + grid.columns[4]};
  padding-bottom: 15px !important; /*This would hide the scroll bar of the bottom if there is one*/
`

const Text = styled.p`
`

const ProjectContainer = styled.div`
  width: calc(${props => grid.columns[0] + grid.columns[1] + (props.extra || 0)}% - 2px);
  height: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  border-right: 1px solid ${props => props.theme.fg};
  padding: ${ spacing.padding.normal };

  ${'' /* @media (max-width: 1209px) {
    width: calc(${grid.columns[0] + grid.columns[1]}% - 1px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: calc(${grid.columns[0] + grid.columns[1]}% - 3px);
  }

  @media (max-width: 360px) {
    width: calc(${grid.columns[0] + grid.columns[1]}% - 2px);
  } */}


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

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: ${props => props.theme.fg};
    color: ${props => props.theme.bg};
  }
`

const ArrowGridContainer = GridBlock.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ArrowGridContainerLeft = GridBlock.extend`
  animation: none;
  transition: opacity 200ms ease-in-out;
  opacity: ${props => (props.scroll > 0) ? "1" : "0"} !important;
  pointer-events: ${props => (props.scroll > 0) ? "auto" : "none"};
  cursor: ${props => (props.scroll > 0) ? "pointer" : "auto"} !important;

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
      <Timer endDate={moment("2018-04-11 08:00")}/>
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
  state = {
    scroll: 0,
    projectWidth: 200
  }

  handleScroll = (e) => {
    this.setState({
      scroll: this.hScroll.children[0].scrollLeft
    })
  }

  onComponentDidMount() {
    this.setState({
      scroll: this.hScroll.children[0].scrollLeft,
      projectWidth: this.project.offsetWidth,
      arrowWidth: this.arrow.offsetWidth
    })
  }

  handleNavArrows = (direction) => {
    switch (direction) {
      case 'FORWARDS':
        this.hScroll.children[0].scrollLeft = this.hScroll.children[0].scrollLeft + this.project.offsetWidth - this.arrow.offsetWidth + 1;
        break;
      case 'BACKWARDS':
      this.hScroll.children[0].scrollLeft = this.hScroll.children[0].scrollLeft - this.project.offsetWidth - this.arrow.offsetWidth;
        break;
    }
  }

  render() {
    return (
      <Container>
        <ArrowGridContainerLeft scroll={this.state.scroll} rowStart={5} rowEnd={6} colStart={4} colEnd={6} wAdjust={5}>
          <NavArrow left onClick={() => this.handleNavArrows('BACKWARDS')}/>
        </ArrowGridContainerLeft>


        <ContentContainer {...this.props} innerRef={(scroll) => { this.hScroll = scroll; }}>

          <InnerContainer onScroll={this.handleScroll}>
            <Project
              innerRef={(project) => { this.project = project; }}
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
              extra={grid.columns[5] + grid.columns[4]}
            />

          </InnerContainer>
        </ContentContainer>

        <ArrowGridContainer  innerRef={(arrow) => { this.arrow = arrow; }}  rowStart={5} rowEnd={6} colStart={4} colEnd={6} wAdjust={5}>
          <NavArrow onClick={() => this.handleNavArrows('FORWARDS')}/>
        </ArrowGridContainer>
      </Container>
    )
  }
}
