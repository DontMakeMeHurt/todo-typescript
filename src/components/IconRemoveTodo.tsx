import React from 'react';
import { styled } from '@stitches/react';
import { AiOutlineDelete } from 'react-icons/ai';

export type Icon = {
    onClick: () => void;
}

const IconStyle = styled('span', {
    fontSize: '24px',
    '&:hover': {
        cursor: 'pointer',
        color: '#c6455b',
    },
})

export const IconTodo: React.FC<Icon> = ({onClick}) => {
    return (
        <IconStyle>
                <AiOutlineDelete onClick={onClick} />
        </IconStyle>
    )
}