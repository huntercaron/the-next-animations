import React from 'react'
import styled from 'styled-components'

// styled components
const Container = styled.div`
  height: 70px;
  width: 70px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${props => props.theme.fg};
`

const Text = styled.p`
`

// component
export default function Base(props) {
  return (
    <Container>
      <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="instagram" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-788.000000, -693.000000)">
              <g id="Group-4" transform="translate(788.000000, 693.000000)" stroke="#FFFFFF">
                  <rect id="Rectangle-2" x="0.5" y="0.5" width="19" height="19" rx="2"></rect>
                  <rect id="Rectangle-2-Copy" x="5.5" y="5.5" width="9" height="9" rx="4.5"></rect>
              </g>
          </g>
      </svg>
    </Container>
  )
}
