import React from 'react'
import styled from 'styled-components'
import GridBlock from '../GridBlock'

// styled components
const Container = GridBlock.extend`

`

const Text = styled.p`
`

// component
export default function ContentPreview(props) {
  return (
    <Container {...props}>
      <Text>{props.text}</Text>
    </Container>
  )
}
