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
    height: 1000px;
    margin-bottom: ${spacing.padding.smaller};
    border-left: none;
    border-right: none;
  }
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

  &:disabled, &:disabled:hover {
    border-right: 1px solid ${props => props.theme.fg};
    color: ${props => props.theme.fg};
    background-color: ${props => props.theme.bg};
    text-decoration: none;
  }

`

const EmailInput = styled.input`
  width: 100%;
  outline: none;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  border: none;
  font-size: ${ type.smaller };

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
        theme: lightTheme
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

  toggleTheme = () => {
    if (this.state.theme.dark === false)
      this.setState({ theme: darkTheme });
    else
      this.setState({ theme: lightTheme });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Container>
          <InnerContainer>
            <Statement/>

            <Grid onToggleTheme={this.toggleTheme}>

              <GridBlock rowStart={0} rowEnd={3} colStart={0} colEnd={4} wAdjust={-3} pad>
                <H2>
                  Graduate Design Show by<br/>
                  York University/Sheridan College
                </H2>
              </GridBlock>

              <GridBlock rowStart={3} rowEnd={5} colStart={0} colEnd={2} mColEnd={4} wAdjust={-1} mWAjust={1} pad>
                <P>Adapt to change and become the future. The Next Graduate Design Show brought to you by York/Sheridan Design is an encapsulation of the milestones by the students within the past four years. Bringing together the students, industry and the public, this showcase is an opportunity to celebrate our graduating class and highlight our growth and ambition, with no foreseeable end.</P>
              </GridBlock>

              <Timer
                rowStart={3}
                rowEnd={5}
                colStart={4}
                colEnd={6}
                wAdjust={5}
                countdownDate = "2018-04-11 8:00" />

              <ContentPreview rowStart={5} rowEnd={6} colStart={0} colEnd={6} wAdjust={1} />

              <form onSubmit={this.handleSubmit}>
                <FooterContainer rowStart={6} rowEnd={7} colStart={0} colEnd={2} wAdjust={1}>

                  <Map theme={this.state.theme}/>

                  <EmailContainer>
                    <EmailInput onChange={this.handleChange} disabled={this.state.formSubmitted} type="email" name="email" placeholder="Enter Email…"/>
                  </EmailContainer>

                </FooterContainer>


                <FooterContainer rowStart={6} rowEnd={7} colStart={2} colEnd={6} wAdjust={3}>

                  <FooterInnerContainer>
                    <H2>
                      April 11—13, 2018 <br/>
                      Gladstone Hotel <br/>
                      Toronto <br/>
                    </H2>
                  </FooterInnerContainer>

                  <SocialContainer>

                    <EmailButton disabled={this.state.formSubmitted} type="submit">
                      {this.state.formSubmitted ? 'We\'ll Update You ✔' : 'Get Updates'}
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
