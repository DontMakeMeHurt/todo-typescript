import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TodoListItem ,type TodoListItemProps} from '../components/TodoListItem';

export default {
    title: 'UI/MyTodoItem/TodoItem',
    component: TodoListItem,
} as ComponentMeta<typeof TodoListItem>;

const Template: ComponentStory<typeof TodoListItem> = (args) => <TodoListItem {...args} />

export const Primary = Template.bind({});
Primary.argTypes = {
    isComplete: {
        'control': {type: 'boolean'}
    },
}
Primary.args = {
    isComplete: false,
    children: 'Test'
};

export const Secondary = Template.bind({})
Primary.storyName = 'Todo Item';