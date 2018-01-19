import React from 'react'
import styled from 'styled-components'
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// styled components
const Container = styled.div`

`

const Text = styled.p`
`

// component
export default class Map extends React.Component {
  state = {
    viewport: {
      width: 400,
      height: 200,
      latitude: 43.63683,
      longitude: -79.40841,
      zoom: 8
    }
  };

  render() {
    return (
      <Container>
        <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        />
      </Container>
    )
  }
}
