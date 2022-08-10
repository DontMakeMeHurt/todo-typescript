import React from 'react';
import {styled} from '@stitches/react';

const StyleHeading = styled('h1', {
  color: 'pink',
  fontSize: '40px',
  fontWeight: 'bold',
  display: 'flex'
  }
)

export const Heading = () => {
  return (
    <StyleHeading>Todo App</StyleHeading>
  )
}

