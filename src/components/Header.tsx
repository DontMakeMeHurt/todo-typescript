import React from 'react';
import {styled} from '@stitches/react';

const StyleHeading = styled('h1', {
  color: 'pink',
  fontSize: '40px',
  fontWeight: 'bold',
  display: 'flex'
  }
)

function Heading() {
  return (
    <StyleHeading>Todo App</StyleHeading>
  )
}
export default Heading;

