import React, { ChangeEvent, useState } from 'react';
import { styled } from '@stitches/react';

const InputStyle = styled('input', {
	outline: 'none',
	width: '400px',
	height: '40px',
	fontWeight: '500',
	fontSize: '1.5em',
	color: 'pink',
	backgroundColor: 'rgb(28,28,30)',
	boxShadow: '0 0 .4vw rgba(0,0,0,0.5), 0 0 0 .15vw transparent',
	borderRadius: '0.4vw',
	border: 'none',
	padding: '8px',
	transition: '.4s'
})


export const Input: React.FC = () => {

    const [newTodo, setNewTodo] = useState('')
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
	};

    return (
        <InputStyle value={newTodo} type="text" onChange={handleChange} />
    )
} 