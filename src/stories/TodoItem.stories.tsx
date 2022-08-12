import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TodoListItem } from '../components/TodoListItem';

export default {
    title: 'UI/MyTodoItem/TodoItem',
    component: TodoListItem,
} as ComponentMeta<typeof TodoListItem>;

const Template: ComponentStory<typeof TodoListItem> = (args) => <TodoListItem {...args} />

export const Default = Template.bind({});
Default.storyName = 'Todo Item';