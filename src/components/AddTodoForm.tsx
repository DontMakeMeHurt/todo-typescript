import React from 'react';
import { styled } from '@stitches/react';
// import { Button } from './ButtonAdd';
import { Input } from './Input';
import { Button, type ButtonAddTodoProps  } from './ButtonAdd';

// const InputStyle = styled('input', {
// 	outline: 'none',
// 	width: '400px',
// 	height: '40px',
// 	fontWeight: '500',
// 	fontSize: '1.5em',
// 	color: 'pink',
// 	backgroundColor: 'rgb(28,28,30)',
// 	boxShadow: '0 0 .4vw rgba(0,0,0,0.5), 0 0 0 .15vw transparent',
// 	borderRadius: '0.4vw',
// 	border: 'none',
// 	padding: '8px',
// 	transition: '.4s'
// })

// const ButtonStyle = styled('button', {
// 	marginLeft: '16px',
// 	height: '56px',
//     color: 'rgb(9, 9, 9)',
//     padding: '0.7em 1.7em',
//     fontSize: '18px',
//     borderRadius: '0.5em',
//     background: 'rgb(232, 232, 232)',
//     border: '1px solid rgb(232, 232, 232)',
//     transition: 'all 0.3s ease 0s',
//     boxShadow: 'pink 4px 4px 4px 0px',
// 		'&:hover': {
// 		border: '1px solid white',
// 		},
// 		'&:active' : {
// 		boxShadow: '4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff',
// 		}
// })

interface AddTodoFormProps {
	addTodo: AddTodo;
}


export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
	// const [newTodo, setNewTodo] = useState('');

	// const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
	// 	e.preventDefault();
	// 	addTodo(newTodo)
	// 	setNewTodo('')
	// };

	return (
		<form>
			{/* <InputStyle type="text" onChange={handleChange} value={newTodo} /> */}
			<Input />
			<Button onClick={} />
		</form>
	);
};
