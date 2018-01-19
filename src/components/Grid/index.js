import React from 'react'
import styled from 'styled-components'

// working on implementing the doppler grid with CSS grids


// styled components
const Container = styled.div`
	height: ${props => props.height};
  width: ${props => props.width};
	margin: auto;
	display: grid;
	grid-template-columns: ${props => props.doppler(props.cols, "BACKWARD", 1)};
	grid-template-rows: ${props => props.doppler(props.rows, "FORWARD", 1)};
  min-height: 0;
  min-width: 0;

	height: 100%;
	width: 100%;
`


// component
export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    if (typeof window !== `undefined`) {
      this.rows = Math.floor(window.innerHeight/120);
      this.cols = Math.floor(window.innerWidth/120);
    } else {
      this.rows = this.cols = 8;
    }
  }

  doppler = (num, direction, basis) => {
    let base = "";
		let basisString = ` ${basis}fr `;

    switch (direction) {
      case 'FORWARD':
        for (let i = basis; i < num; i++) {
          base += Math.pow(1.6, i).toFixed(2) + "fr "
        }
        return basisString + base;
      case 'BACKWARD':
        for (let i = num; i > basis; i--) {
          base += Math.pow(1.6, i).toFixed(2) + "fr "
        }
        return base + basisString;
      default:
        return base;
    }
  }

  render() {
    return (
			<Container
        innerRef={container => {this.componentContainer = container}}
        doppler={this.doppler}
        rows={this.rows}
        cols={this.cols}>

        {this.props.children}

			</Container>
		)
  }
}
