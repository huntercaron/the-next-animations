import React from 'react'
import styled from 'styled-components'

// styled components
const Container = styled.div`

`

const Text = styled.p`
`

// component
export default function ContentPreview(props) {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  )
}
