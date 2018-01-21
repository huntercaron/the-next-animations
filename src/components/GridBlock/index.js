import React from 'react'
import styled from 'styled-components'
import { grid, animations, spacing } from '../../utils/constants.js'


/*
** Base GridBlock component that will figure out all sizing, theming, etc
** Used styledcomponents extend to create other com
*/

// styled components
const GridBlock = styled.div`

  overflow: hidden;
  min-width: 0;
  background-color: ${props => props.theme.bg};
  position: absolute;
  margin: -1px;
  color: ${props => props.theme.fg};

  opacity: 0;
  transform-origin: right;
  animation: ${animations.fadeIn} 0.6s 2s ease-in-out forwards;

  > div, > h2, > p {
    transition: opacity 250ms ease-out;
    opacity: 0;
    transform: scaleX(1);
    animation: ${animations.fadeIn} 0.8s 3s ease-out forwards;
  }

  &:hover {
  }

  border: 1px solid ${props => props.theme.fg};
  ${props => props.borderNo && 'border-' + props.borderNo + ': none;'}
  ${props => props.pad && 'padding: ' + spacing.padding.normal + ';'}

  left: calc(${props => {
    let distance = 0;
    let colStart = props.colStart || 0;
    let colEnd = props.colEnd || colStart;
    for (let i = 0; i < colStart; i++) {
      distance += grid.columns[i];
    }
    return distance;
  }}% - ${props => (props.colStart - 1 || 0)}px);

  width: calc(${props => {
    let width = 0;
    let colStart = props.colStart;
    let colEnd = props.colEnd || colStart + 1;
    for (let i = colStart; i < colEnd; i++) {
      width += grid.columns[i];
    }
    return width;
  }}% + ${props => props.wAdjust || 0}px);

  top: calc(${props => {
    let distance = 0;
    let rowStart = props.rowStart || 0;
    let rowEnd = props.rowEnd || rowStart;
    for (let i = 0; i < rowStart; i++) {
      distance += grid.rows[i];
    }
    return distance;
  }}% - ${props => props.rowStart || 0}px);

  height: calc(${props => {
    let height = 0;
    let rowStart = props.rowStart || 0;
    let rowEnd = props.rowEnd || rowStart + 1;
    for (let i = rowStart; i < rowEnd; i++) {
      height += grid.rows[i];
    }
    return height;
  }}% + ${props => -1 * (props.rowEnd - props.rowStart - 1 || 0) + (props.hAdjust || 0)}px);
`

export default GridBlock;
