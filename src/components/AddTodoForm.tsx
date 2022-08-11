import React, { ChangeEvent, FormEvent, useState } from 'react';
// import { Button } from './ButtonAdd';
import { Input } from './Input';
import { Button } from './ButtonAdd';

interface AddTodoFormProps {
	addTodo: AddTodo;
}

type Input = {
	disabled?: boolean, 
	placeholder?: string,
	type?: string
	onChange?: (e: string) => void
	value: string
}

type Button = {
	onClick?: () => void;
    label: string
}


const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
	const [newTodo, setNewTodo] = useState('');

	const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	}

	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		addTodo(newTodo)
		setNewTodo('')
		console.log(newTodo)
	};

	return (
		<form>
			{/* <InputStyle type="text" onChange={handleChange} value={newTodo} /> */}
			<Input type='text' disabled={false} placeholder="Add new Todo..." value={newTodo} onChange={onChangeInput} />
			<Button label='Add Todo' onClick={handleSubmit}  />
		</form>
	)
}

export default AddTodoForm;
