import React from 'react';
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

interface InputProps {
	disabled?: boolean, 
	placeholder?: string,
	type?: string
	value?: string
	onChange?: (event: any) => void
}

export const Input= ({ disabled, placeholder, type, value, onChange}: InputProps) => {

	return (
		<InputStyle type={type} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled} />
    )
} 

