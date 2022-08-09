import React from 'react';
import './TodoListItem.css'; 
import {AiOutlineDelete} from 'react-icons/ai';


interface TodoListItemProps {
    todo: Todo,
    toggleTodo: ToggleTodo;
    onRemoveTodo: RemoveTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, onRemoveTodo }) => {
    
    const onDelete = () => {
        onRemoveTodo(todo);
    }
    
    return (
        <li>
            <label className={todo.complete? "complete" : undefined}>
                <input type="checkbox" checked={todo.complete } onChange={() => toggleTodo(todo)} /> 
                {todo.text}
            </label>
            <AiOutlineDelete className="todo-icon" onClick={onDelete} />
        </li>
    )
}