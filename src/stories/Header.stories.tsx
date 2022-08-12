import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {Heading}  from '../components/Header';

export default {
  title: 'UI/MyHeader/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args: any) => <Heading {...args} />

export const Default = Template.bind({});

Default.args = {
}
