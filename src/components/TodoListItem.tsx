import React from 'react';
import { styled } from '@stitches/react';
import { IconTodo } from './IconRemoveTodo';

const TodoText = styled('span', {
    fontSize: '24px',
    padding: '8px',
})

const TodoTextCompleted = styled('span', {
    fontSize: '24px',
    padding: '8px',
    textDecoration: 'line-through'
})

type IconTodo = {
    onClick: () => void;
}

const LiStyled = styled('li', {
    width: '100%',
    borderRadius: '8px',
    boxSizing: 'border-box',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: '0 16px 0',
    marginBottom: '8px',
    justifyContent: 'space-between',
    variants: {
        icons: {
            styleIcon: {
                color: 'pink',
                fontSize: '16px'
            }
        }
    },
})

const LabelStyle = styled('label', {

})

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
        <LiStyled>
            {/* <LabelStyle style={todo.complete ? { textDecoration: 'line-through' } : undefined }>
                <TodoText>{todo.text}</TodoText>
            </LabelStyle> */}
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} /> 
        {todo.complete ? <TodoTextCompleted>{todo.text}</TodoTextCompleted> : <TodoText>{todo.text}</TodoText>}
        <IconTodo onClick= {onDelete} />
        </LiStyled>
    )
}