import React from 'react';
import './TodoListItem.css'; 
import { AiOutlineDelete } from 'react-icons/ai';
import { createTheme, styled } from '@stitches/react';

const TodoText = styled('span', {
    fontSize: '24px',
    padding: '8px',
})

const IconStyle = styled('span', {
    fontSize: '24px',
    '&:hover': {
        cursor: 'pointer',
        color: '#fff',
    },
})

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
            <label className={todo.complete? "complete" : undefined}>
                <input type="checkbox" checked={todo.complete } onChange={() => toggleTodo(todo)} /> 
                <TodoText>{todo.text}</TodoText>
            </label>
        <IconStyle>
                <AiOutlineDelete onClick={onDelete} />
        </IconStyle>
        </LiStyled>
    )
}