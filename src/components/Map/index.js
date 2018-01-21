import React from 'react'
import styled from 'styled-components'
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { animations } from '../../utils/constants.js'

// styled components
const Container = styled.div`
  .mapboxgl-control-container {
    display: none !important;
  }

  position: absolute;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: ${animations.fadeIn} 0.3s 0s ease-in-out forwards;
  z-index: ${props => props.display ? "1" : "0"};
`

const Text = styled.p`
`

const MarkerCircle = styled.div`
  border: 2px solid ${props => props.theme.fg};
  width: ${props => props.w}px;
  height: ${props => props.h}px;
  border-radius: 50%;
  position: absolute;
`

const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  div {
    opacity: ${props => props.display ? "1" : "0"};
  }
`

// component
export default class Map extends React.Component {
  render() {
    return (
      <Container display={this.props.display}>
        <InnerContainer display={this.props.display}>
          {(process.env.MAP === 'true') &&
            <ReactMapGL
              {...this.props.viewport}
              onViewportChange={(viewport) => {
                viewport.mapStyle = this.props.theme;
                this.props.onViewportChange(viewport.latitude, viewport.longitude, viewport.zoom);
              }}>
            </ReactMapGL>
          }
        </InnerContainer>
      </Container>
    )
  }
}

// mapbox://styles/zilindeng/cjcjdmhoqa0d72sqj8fw5xvo3
