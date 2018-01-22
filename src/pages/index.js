import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Grid from '../components/Grid'
import GridBlock from '../components/GridBlock'
import Statement from '../components/Statement'
import GridTimer from '../components/GridTimer'
import ContentPreview from '../components/ContentPreview'
import Map from '../components/Map'
import Instagram from '../components/Instagram'
import { P, H2, H3, Link } from '../components/Type'
import { type, spacing, animations, breakpoints } from '../utils/constants.js'

const Container = styled.div`
  padding: 0.75rem;
  height: 100%;
  background-color: ${props => props.theme.bg};

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
  }
`

const InnerContainer = styled.div`
  border: 1px solid ${props => props.theme.fg};
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    height: 1125px;
    margin-bottom: ${spacing.padding.smaller};
    border-left: none;
    border-right: none;
  }
`

const FooterContainer = GridBlock.extend`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const FooterInnerContainer = styled.div`
  height: 100%;
  padding: 0.5rem;
`

const EmailContainer = styled.div`
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  border-top: 1px solid ${props => props.theme.fg};
  display: flex;
  background-color: ${props => props.theme.bg};
  padding-left: ${ spacing.padding.bigger };
  z-index: 2;
`

const EmailButton = styled.button`
  display: flex;
  width: 100%;
  height: calc(100% - 2px);
  align-items: center;
  justify-content: center;
  padding-top: 0.25rem;
  border: none;
  text-decoration: underline;
  color: ${props => props.theme.fg};
  border-right: 1px solid ${props => props.theme.ftg};
  background-color: ${props => props.theme.bg};
  font-size: ${ type.smaller };
  cursor: pointer;
  flex: 2;

  &:hover {
    border-right: 1px solid ${props => props.theme.bg};
    color: ${props => props.theme.bg};
    background-color: ${props => props.theme.fg};
  }

  &:active {
    color: ${props => props.theme.fg};
    background-color: ${props => props.theme.bg};
  }

  &:disabled, &:disabled:hover {
    border-right: 1px solid ${props => props.theme.fg};
    color: ${props => props.theme.fg};
    background-color: ${props => props.theme.bg};
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
  }

`

const EmailInput = styled.input`
  width: 100%;
  outline: none;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  border: none;
  font-size: ${ type.smaller };
  position: relative;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
  }

  &:disabled, &:disabled:hover {
    opacity: 0.3;
  }
`

const SocialContainer = styled.div`
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  display: flex;
  border-top: 1px solid ${props => props.theme.fg};
`

const MapContainer = styled.div`
`

const lightTheme = {
  fg: 'black',
  bg: 'white',
  dark: false
};

const darkTheme = {
  fg: 'white',
  bg: 'black',
  dark: true
};

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

// page component
export default class IntroCSS extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      formSubmitted: false,
      theme: lightTheme,
      verb: 'Announcing',
      noun: 'Gradshow',
      hover: false,
      map: {
        dark: {
          width: 800,
          height: 600,
          latitude: 43.638880,
          longitude: -79.434236,
          zoom: 15,
          mapStyle: 'mapbox://styles/zilindeng/cjcmddh221baf2rmv7i700vye',
        },
        light: {
          width: 800,
          height: 600,
          latitude: 43.638880,
          longitude: -79.434236,
          zoom: 15,
          mapStyle: 'mapbox://styles/zilindeng/cjcjdmhoqa0d72sqj8fw5xvo3',
        }
      }
    };

    this.turnOnHovers();
  }

  turnOnHovers = () => {
    setTimeout(() => {
      this.setState({
        hover: true
      })
    }, 2500);
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
    .then(() => this.setState({
      formSubmitted: true
    }))
    .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleStatement = (verb, noun) => {
    if (this.state.hover)
      this.setState({ verb, noun });
  }

  resetStatement = () => this.setState({ verb: "Announcing", noun: "Gradshow" });

  updateMapData = (lat, long, zoom) => this.setState( prevState => ({
    map: {
      dark: {
        latitude: this.state.theme.dark ? lat : prevState.map.dark.latitude,
        longitude: this.state.theme.dark ? long : prevState.map.dark.longitude,
        zoom: this.state.theme.dark ? zoom : prevState.map.dark.zoom,
        width: 800,
        height: 600,
        mapStyle: prevState.map.dark.mapStyle
      },
      light: {
        latitude: !this.state.theme.dark ? lat : prevState.map.dark.latitude,
        longitude: !this.state.theme.dark ? long : prevState.map.dark.longitude,
        zoom: !this.state.theme.dark ? zoom : prevState.map.dark.zoom,
        width: 800,
        height: 600,
        mapStyle: prevState.map.light.mapStyle
      }
    }
  }));

  toggleTheme = () => {
    if (this.state.theme.dark === false)
      this.setState( prevState => ({
        theme: darkTheme,
        map: {
          dark: {
            latitude: prevState.map.light.latitude,
            longitude: prevState.map.light.longitude,
            zoom: prevState.map.light.zoom,
            width: 800,
            height: 600,
            mapStyle: prevState.map.dark.mapStyle
          },
          light: {
            latitude: prevState.map.light.latitude,
            longitude: prevState.map.light.longitude,
            zoom: prevState.map.light.zoom,
            width: 800,
            height: 600,
            mapStyle: prevState.map.light.mapStyle
          }
        }
      }));
    else
      this.setState( prevState => ({
        theme: lightTheme,
        map: {
          dark: {
            latitude: prevState.map.dark.latitude,
            longitude: prevState.map.dark.longitude,
            zoom: prevState.map.dark.zoom,
            width: 800,
            height: 600,
            mapStyle: prevState.map.dark.mapStyle
          },
          light: {
            latitude: prevState.map.dark.latitude,
            longitude: prevState.map.dark.longitude,
            zoom: prevState.map.dark.zoom,
            width: 800,
            height: 600,
            mapStyle: prevState.map.light.mapStyle
          }
        }
      }));
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Container>
          <InnerContainer>
            <Statement verb={this.state.verb} noun={this.state.noun} imageSizes={this.props.data.file.childImageSharp.sizes}/>

            <Grid onToggleTheme={this.toggleTheme} hoverOn={this.state.hover}>

              <GridBlock rowStart={0} rowEnd={3} colStart={0} colEnd={4} wAdjust={-3} pad onMouseEnter={() => this.handleStatement(" ", " ")} onMouseLeave={() => this.resetStatement()}>
                <H2>
                  Design Grad Show by<br/>
                  York University/Sheridan College
                </H2>
              </GridBlock>

              <GridBlock rowStart={3} rowEnd={5} colStart={0} colEnd={2} mColEnd={4} wAdjust={-1} mWAjust={1} pad  onMouseEnter={() => this.handleStatement("About", "Graduates")} onMouseLeave={() => this.resetStatement()}>
                <P>Adapt to change and become the future. The Next Design Grad Show captures the milestones and achievements of students over the course of their undergraduate degree. Bringing together the students, industry and public, this showcase is an opportunity to celebrate our graduating class and highlight our continuous growth and ambition.</P>
              </GridBlock>

              <GridTimer
                onMouseEnter={() => this.handleStatement("Until", "Gradshow")}
                onMouseLeave={() => this.resetStatement()}
                rowStart={3}
                rowEnd={5}
                colStart={4}
                colEnd={6}
                wAdjust={5}
                vertical
                countdownDate = "2018-04-11 08:00" />

              <ContentPreview
                hAdjust={30}
                onMouseEnter={() => this.handleStatement("Until", "Experience")}
                onMouseLeave={() => this.resetStatement()}
                rowStart={5}
                rowEnd={6}
                colStart={0}
                colEnd={6}
                wAdjust={1}
              />

              <form onSubmit={this.handleSubmit}>
                <FooterContainer rowStart={6} rowEnd={7} colStart={0} colEnd={2} wAdjust={1}>

                    <Map
                      onMouseEnter={() => this.handleStatement("Find", "Gradshow")}
                      onMouseLeave={() => this.resetStatement()}
                      displayMap={!this.state.theme.dark}
                      onViewportChange={this.updateMapData}
                      viewport={this.state.map.light}
                    />

                    <Map
                      onMouseEnter={() => this.handleStatement("Find", "Gradshow")}
                      onMouseLeave={() => this.resetStatement()}
                      displayMap={this.state.theme.dark}
                      onViewportChange={this.updateMapData}
                      viewport={this.state.map.dark}
                    />

                  <EmailContainer onMouseEnter={() => this.handleStatement("Get", "Updates")} onMouseLeave={() => this.resetStatement()}>
                    <EmailInput minlength="4" onChange={this.handleChange} disabled={this.state.formSubmitted} type="email" name="email" placeholder="Enter Email…"/>
                  </EmailContainer>

                </FooterContainer>


                <FooterContainer rowStart={6} rowEnd={7} colStart={2} colEnd={6} wAdjust={3}>

                  <FooterInnerContainer onMouseEnter={() => this.handleStatement("Find", "Gradshow")} onMouseLeave={() => this.resetStatement()}>
                    <H2>
                      April 11—13, 2018 <br/>
                      Gladstone Hotel <br/>
                      Toronto <br/>
                    </H2>
                  </FooterInnerContainer>

                  <SocialContainer>

                    <EmailButton disabled={this.state.formSubmitted} type="submit"  onMouseEnter={() => this.handleStatement("Get", "Updates")} onMouseLeave={() => this.resetStatement()}>
                      {this.state.formSubmitted ? 'Got It ✔' : 'Get Updates'}
                    </EmailButton>

                    <Instagram onMouseEnter={() => this.handleStatement("Follow", "Instagram")} onMouseLeave={() => this.resetStatement()}/>

                  </SocialContainer>

                </FooterContainer>
              </form>

            </Grid>


          </InnerContainer>
        </Container>
      </ThemeProvider>
    )
  }
}

export const query = graphql`
  query ImageQuery {
    file(relativePath: { eq: "assets/images/the-next-star-yellow.png" }) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
  }
`;
