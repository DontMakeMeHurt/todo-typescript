import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading  from '../components/Header';

export default {
  title: 'UI/MyHeader/Heading',
  component: Heading,
}

const Template = () => {
  return (
    <Heading />
  )
}

export const Default = Template.bind({});
