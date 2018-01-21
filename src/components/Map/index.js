import React from 'react'
import styled from 'styled-components'
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// styled components
const Container = styled.div`
  .mapboxgl-control-container {
    display: none !important;
  }

  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Text = styled.p`
`

// component
export default class Map extends React.Component {
  state = {
    viewport: {
      width: 1000,
      height: 300,
      latitude: 43.642690,
      longitude: -79.427036,
      mapStyle: 'mapbox://styles/zilindeng/cjcmddh221baf2rmv7i700vye',
      zoom: 14
    }
  };

  render() {
    return (
      <Container>
        {(process.env.MAP === 'true') &&
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => {
              viewport.mapStyle = 'mapbox://styles/zilindeng/cjcmddh221baf2rmv7i700vye';
              this.setState({viewport});
            }}>
            <Marker latitude={43.642690} longitude={-79.427036} offsetLeft={-20} offsetTop={-10}>
              <div>GLADSTONE</div>
            </Marker>
          </ReactMapGL>
        }
      </Container>
    )
  }
}
