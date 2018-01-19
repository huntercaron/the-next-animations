import React from 'react'
import styled from 'styled-components'
import Grid from '../components/Grid'
import GridBlock from '../components/GridBlock'
import Statement from '../components/Statement'

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

`


export default class IntroCSS extends React.Component {
  render() {
    return (
      <Container>
        <InnerContainer>
          <Statement/>

          <Grid>

            <GridBlock rowStart={0} rowEnd={3} colStart={0} colEnd={4} wAdjust={-3}>
              fuck
            </GridBlock>

            <GridBlock rowStart={3} rowEnd={5} colStart={0} colEnd={2} wAdjust={-1}>
              fuck
            </GridBlock>

            <GridBlock rowStart={3} rowEnd={5} colStart={4} colEnd={6} wAdjust={5}>
              fuck
            </GridBlock>

            <GridBlock rowStart={5} rowEnd={6} colStart={0} colEnd={6} wAdjust={1}>
              fuck
            </GridBlock>

            <FooterContainer rowStart={6} colStart={0} colEnd={2} wAdjust={1}>

            </FooterContainer>

            <FooterContainer rowStart={6} colStart={2} colEnd={6} wAdjust={3}>

            </FooterContainer>



          </Grid>


        </InnerContainer>
      </Container>
    )
  }
}
