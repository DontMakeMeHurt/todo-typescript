import React from 'react';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
    onRemoveTodo: RemoveTodo
}

export const TodoList: React.FC<TodoListProps> = ({ todos,toggleTodo, onRemoveTodo }) => {
    return (
        <ul>
            {todos.map(todo => {
                return <TodoListItem todo={todo} key={todo.text} toggleTodo={toggleTodo} onRemoveTodo={onRemoveTodo} />
            })}
        </ul>
    )

} 