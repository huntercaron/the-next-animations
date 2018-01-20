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
`

const EmailButton = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
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

// page component
export default class IntroCSS extends React.Component {
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

              <FooterContainer rowStart={6} colStart={0} colEnd={2} wAdjust={1}>

                <Map />

                <EmailContainer>
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

                  <EmailButton>
                    <Link>Keep In Touch</Link>
                  </EmailButton>

                  <Instagram />

                </SocialContainer>

              </FooterContainer>

            </Grid>


          </InnerContainer>
        </Container>
      </ThemeProvider>
    )
  }
}
