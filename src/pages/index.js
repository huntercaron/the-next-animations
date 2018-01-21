import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Grid from '../components/Grid'
import GridBlock from '../components/GridBlock'
import Statement from '../components/Statement'
import Timer from '../components/Timer'
import ContentPreview from '../components/ContentPreview'
import Map from '../components/Map'
import Instagram from '../components/Instagram'
import { P, H2, H3, Link } from '../components/Type'
import { type, spacing, animations } from '../utils/constants.js'

const Container = styled.div`
  padding: 0.75rem;
  height: 100%;
  background-color: ${props => props.theme.bg};
`

const InnerContainer = styled.div`
  border: 1px solid ${props => props.theme.fg};
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
`

const FooterContainer = GridBlock.extend`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FooterInnerContainer = styled.div`
  padding: 0.5rem;
`

const EmailContainer = styled.div`
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  border-top: 1px solid ${props => props.theme.fg};
  display: flex;
  padding-left: ${ spacing.padding.bigger };
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

  &:hover {
    border-right: 1px solid ${props => props.theme.bg};
    color: ${props => props.theme.bg};
    background-color: ${props => props.theme.fg};
  }

  &:active {
    color: ${props => props.theme.fg};
    background-color: ${props => props.theme.bg};
  }
`

const EmailInput = styled.input`
  width: 100%;
  outline: none;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  border: none;
  font-size: ${ type.smaller };
`

const SocialContainer = styled.div`
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  display: flex;
  border-top: 1px solid ${props => props.theme.fg};
`
const theme = {
  fg: 'black',
  bg: 'white'
};

const darkTheme = {
  fg: 'white',
  bg: 'black'
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
        formSubmitted: false
      };
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

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <Container>
          <InnerContainer>
            <Statement/>

            <Grid>

              <GridBlock rowStart={0} rowEnd={3} colStart={0} colEnd={4} wAdjust={-3} pad>
                <H2>
                  Graduate Showcase<br/>
                  of York University/Sheridan College<br/>
                  Joint Program in Design<br/>
                </H2>
              </GridBlock>

              <GridBlock rowStart={3} rowEnd={5} colStart={0} colEnd={2} wAdjust={-1} pad>
                <P>Any way you frame it, we’re generators and synthesizers. We invent, create, and shape the world surrounding us. Design in this way unites us as makers, but it also differentiates us through process.</P>
              </GridBlock>

              <Timer
                rowStart={3}
                rowEnd={5}
                colStart={4}
                colEnd={6}
                wAdjust={5}
                countdownDate = "2018-01-22 12:00" />

              <ContentPreview rowStart={5} rowEnd={6} colStart={0} colEnd={6} wAdjust={1} />

              <form onSubmit={this.handleSubmit}>
                <FooterContainer rowStart={6} colStart={0} colEnd={2} wAdjust={1}>

                  <Map />

                  <EmailContainer>
                    <EmailInput onChange={this.handleChange} type="email" name="email" placeholder="Enter Email…"/>
                  </EmailContainer>

                </FooterContainer>


                <FooterContainer rowStart={6} colStart={2} colEnd={6} wAdjust={3}>

                  <FooterInnerContainer>
                    <H2>
                      April 11—13, 2018 <br/>
                      Gladstone Hotel <br/>
                      Toronto <br/>
                    </H2>
                  </FooterInnerContainer>

                  <SocialContainer>

                    <EmailButton type="submit">
                      {this.state.formSubmitted ? '&#10003;' : 'Keep in Touch'}
                    </EmailButton>

                    <Instagram />

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
