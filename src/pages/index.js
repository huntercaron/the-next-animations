import React from 'react'
import styled from 'styled-components'
import Grid from '../components/Grid'
import GridBlock from '../components/GridBlock'
import Statement from '../components/Statement'
import Timer from '../components/Timer'
import ContentPreview from '../components/ContentPreview'
import { P, H2, H3 } from '../components/Type'

const Container = styled.div`
  padding: 0.75rem;
  height: 100%;
`

const InnerContainer = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
`

const FooterContainer = GridBlock.extend`
  display: flex;
  flex-direction: column;
`

const EmailContainer = styled.div`

`

// page component
export default class IntroCSS extends React.Component {
  render() {
    return (
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
              countdownDate = "Jan 22, 2018 12:00:00" />

            <ContentPreview rowStart={5} rowEnd={6} colStart={0} colEnd={6} wAdjust={1} />

            <FooterContainer rowStart={6} colStart={0} colEnd={2} wAdjust={1}>
              <EmailContainer>

              </EmailContainer>
            </FooterContainer>


            <FooterContainer rowStart={6} colStart={2} colEnd={6} wAdjust={3}>

            </FooterContainer>

          </Grid>


        </InnerContainer>
      </Container>
    )
  }
}
