import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconTodo } from '../components/IconRemoveTodo';

export default {
    title: 'UI/MyIcon/Icon',
    component: IconTodo
} as ComponentMeta<typeof IconTodo>;

const Template: ComponentStory<typeof IconTodo> = (args) => <IconTodo {...args} />

export const Default = Template.bind({});
Default.storyName = 'IconTodo';