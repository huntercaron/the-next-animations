import React from 'react'
import styled from 'styled-components'
import GridBlock from '../GridBlock'
import Timer from '../Timer'
import moment from 'moment'
import { grid, spacing, animations, breakpoints, type } from '../../utils/constants.js'
import { H2 } from '../Type'
import Img from 'gatsby-image'

// styled components
const ContentContainer = GridBlock.extend`
  overflow-x: hidden;
  border-right: none;
  margin-bottom: -15px;

  @media (max-width: ${breakpoints.mobile}) {
    border-right: 1px solid ${props => props.theme.fg};
  }
`

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  padding-right: -${grid.columns[5] + grid.columns[4]};
  padding-bottom: 15px !important; /*This would hide the scroll bar of the bottom if there is one*/
`

const Text = styled.p`
`

const ProjectContainer = styled.a`
  position: relative;
  width: calc(${props => grid.columns[0] + grid.columns[1] + (props.extra || 0)}% - 2px);
  height: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: space-between;
  border-right: 1px solid ${props => props.theme.fg};
  padding: ${ spacing.padding.normal };
  color: ${props => props.theme.fg};
  text-decoration: none;

  p {
    transition: 200ms ease-out;
    opacity: 0;
    line-height: 1;
    margin-top: -1px;
    margin-right: 4px;

    ${'' /* font-size: ${type.smaller}; */}
  }

  h2 {
    transition: 200ms ease-out;
  }

  &:hover {
    p {
      opacity: 1;
    }
    h2 {
      opacity: 0;
    }
  }

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

const TimerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -1.8rem;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

  @media (hover:none), (hover:on-demand) {
    &:hover {
      background-color: ${props => props.theme.bg};
      color: ${props => props.theme.fg};
    }
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
  border-left: none;
  border-right: 1px solid ${props => props.theme.fg};
  margin-left: 1px;

  width: calc(${grid.columns[5] + grid.columns[4]}% + 5px);
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
  width: 100%;
`

const IntroImage = styled.div`
  .image {
    position: absolute !important;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
  }


    opacity: 0;
    animation: ${animations.fadeIn};
    animation-duration: 0s;
    animation-delay: ${props => props.index * 0.12}s;
    /* animation-iteration-count: infinite; */
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-timing-function: step-end;


`

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

function Project(props) {
  return(
    <ProjectContainer {...props}>
      <ProjectTitle {...props}>{props.title}</ProjectTitle>

      {props.disabled && (
        <TimerContainer>
          <Timer endDate={props.endDate} />
        </TimerContainer>
      )}

      {props.children}
      
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

  scrollTo = (element, to, duration) =>  {
      var start = element.scrollLeft,
          change = to - start,
          currentTime = 0,
          increment = 20;

      var animateScroll = function(){
          currentTime += increment;
          var val = Math.easeInOutQuad(currentTime, start, change, duration);
          element.scrollLeft = val;
          if(currentTime < duration) {
              setTimeout(animateScroll, increment);
          }
      };
      animateScroll();
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
        // this.hScroll.children[0].scrollLeft = this.hScroll.children[0].scrollLeft + this.project.offsetWidth - this.arrow.offsetWidth + 1;
        this.scrollTo(this.hScroll.children[0], this.hScroll.children[0].scrollLeft + this.project.offsetWidth - this.arrow.offsetWidth + 1, 200);
        break;
      case 'BACKWARDS':
        this.scrollTo(this.hScroll.children[0], this.hScroll.children[0].scrollLeft - this.project.offsetWidth + this.arrow.offsetWidth - 20, 200);
        break;
    }
  }

  render() {
    return (
      <Container>
        <ArrowGridContainerLeft scroll={this.state.scroll} rowStart={5} rowEnd={6}>
          <NavArrow left onClick={() => this.handleNavArrows('BACKWARDS')}/>
        </ArrowGridContainerLeft>


        <ContentContainer {...this.props} innerRef={(scroll) => { this.hScroll = scroll; }}>

          <InnerContainer onScroll={this.handleScroll}>
            <Project
              href="http://scrolling.thenext.website/"
              target="_blank"
              innerRef={(project) => { this.project = project; }}
              title="Introducing The Next Graduates"
            >
              
              {/* {this.props.introductionImages.map( ({node: image}, i) => (
                <IntroImage key={i} index={i}>
                  <Img sizes={image.sizes} outerWrapperClassName='image' className="inner-image"/>
                </IntroImage>
              ))} */}
            
            </Project>

            <Project
              disabled={true}
              title="?&thinsp;?&thinsp;?"
              endDate={moment("2018-03-09 12:00")}
            />

            <Project
              disabled={true}
              title="?&thinsp;?&thinsp;?"
              extra={grid.columns[5] + grid.columns[4]}
              endDate={moment("2018-03-27 08:00")}
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
