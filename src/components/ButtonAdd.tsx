import React, { FormEvent } from 'react';
import { styled } from '@stitches/react';

const ButtonStyle = styled('button', {
	marginLeft: '16px',
	height: '56px',
    color: 'rgb(9, 9, 9)',
    padding: '0.7em 1.7em',
    fontSize: '18px',
    borderRadius: '0.5em',
    background: 'rgb(232, 232, 232)',
    border: '1px solid rgb(232, 232, 232)',
    transition: 'all 0.3s ease 0s',
    boxShadow: 'pink 4px 4px 4px 0px',
		'&:hover': {
		border: '1px solid white',
		},
		'&:active' : {
		boxShadow: '4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff',
		}
})

export interface ButtonAddTodoProps {
    onClick?: () => void;
}

export const Button: React.FC<ButtonAddTodoProps> = ({ onClick }) => {
    
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick?.()
    };
    
    return (
        <ButtonStyle type="submit" onClick={handleSubmit}>Add Todo</ButtonStyle>
    )
}