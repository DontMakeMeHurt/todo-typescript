import React, { ReactNode, useState } from 'react';
import { styled } from '@stitches/react';
import { IconTodo } from './IconRemoveTodo';

const TodoText = styled('span', {
    fontSize: '24px',
    padding: '8px',
    variants: {
        complete: {
            true: {
                textDecoration: 'line-through'
            }
        }
    }
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

export type TodoListItemProps = {
    isComplete?: boolean
    children: ReactNode | string;
    toggleTodo: ToggleTodo;
    onRemoveTodo: RemoveTodo;
    id?: number,
    todo: Todo,
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ children, todo, onRemoveTodo, isComplete, id }) => {

    const [isDone, setIsDone] = useState(isComplete);

    const onDelete = () => {
        onRemoveTodo(todo);
    }

    const onDone = () => {
        setIsDone(!isDone);
    }


    return (
        <LiStyled key={id}>
            <input type="checkbox" checked={isDone} onChange={onDone} />
            {isDone && <TodoText complete>{children}</TodoText>}
            {!isDone && <TodoText>{children}</TodoText>}
            <IconTodo onClick={() => onDelete()} />
        </LiStyled>
    )
}