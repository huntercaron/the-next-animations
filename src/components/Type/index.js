import React from 'react'
import styled from 'styled-components'

// styled components
const H1 = styled.div`

`

const H2 = styled.h2`
  text-transform: uppercase;
  line-height: 1.2;
  font-size: 1.6rem;
  margin-top: -3px;
`

const H3 = styled.div`
  line-height: 1.2;
  margin-top: -3px;
  font-size: 1.6rem;
`

const P = styled.p`
  margin: 0 10% 0 0;
  font-size: 1.2rem;
  line-height: 1.3;
  margin-top: -3px;
`

const Link = styled.a`
  font-size: 1.2rem;
  line-height: 1.3;
  margin: auto;
  text-decoration: underline;
`
// component
export default { P, H1, H2, H3, Link }
