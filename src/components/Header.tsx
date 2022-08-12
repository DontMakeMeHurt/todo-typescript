import React from 'react';
import {styled} from '@stitches/react';

const StyleHeading = styled('h1', {
  color: 'pink',
  fontSize: '40px',
  fontWeight: 'bold',
  display: 'flex'
  }
)

type Heading = {
  label: string;
}

export const Heading: React.FC<Heading> = ({label}) => {
  return (
    <StyleHeading>{label}</StyleHeading>
  )
}


