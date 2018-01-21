import React from 'react'
import styled from 'styled-components'
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// styled components
const Container = styled.div`
  .mapboxgl-control-container {
    display: none !important;
  }

  width: 100%;
  height: 100%;
  overflow: hidden;
  animation-delay: 0s !important;
  ${props => props.transitioned && 'animation-delay: 0s !important;'}
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
`

function stylePick(theme) {
  return theme.dark ? 'mapbox://styles/zilindeng/cjcmddh221baf2rmv7i700vye' : 'mapbox://styles/zilindeng/cjcjdmhoqa0d72sqj8fw5xvo3';
}

// component
export default class Map extends React.Component {
  state = {
    viewport: {
      width: 800,
      height: 600,
      latitude: 43.638880,
      longitude: -79.434236,
      mapStyle: this.props.theme,
      zoom: 15,
      transitioned: false
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      transitioned: true
    })
  }


  render() {
    console.log(this.props);
    return (
      <Container transitioned={this.state.transitioned}>
        <InnerContainer>
          {(process.env.MAP === 'true') &&
            <ReactMapGL
              {...this.state.viewport}
              onViewportChange={(viewport) => {
                viewport.mapStyle = this.props.theme;
                this.setState({viewport});
              }}>
              <Marker latitude={43.642690} longitude={-79.427036} offsetLeft={-18} offsetTop={-24}>
              </Marker>
            </ReactMapGL>
          }
        </InnerContainer>
      </Container>
    )
  }
}

// mapbox://styles/zilindeng/cjcjdmhoqa0d72sqj8fw5xvo3
