import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TodoList} from '../components/TodoList';

export default {
    title: 'UI/MyTodoList',
    component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />

export const Default = Template.bind({});
