import React from 'react';
import { TodoListItem } from './TodoListItem';
import {styled} from '@stitches/react';

const UlStyled = styled('ul', {
    width: '571px',
    padding: '0px',
    marginTop: '40x',
    minHeight: '31px',
    listStyle: 'none',
})

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
    onRemoveTodo: RemoveTodo,
}

export const TodoList: React.FC<TodoListProps> = ({ todos,toggleTodo, onRemoveTodo}) => {
    return (
        <UlStyled>
            {todos.map((todo, id) => {
                return <TodoListItem toggleTodo={toggleTodo} todo={todo} onRemoveTodo={onRemoveTodo} key={id} >{ todo.text }</TodoListItem>
            })}
        </UlStyled>
    )

} 