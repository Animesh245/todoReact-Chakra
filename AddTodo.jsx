import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const AddTodo = ({ todos, setTodos }) => {
	const [ todo, setTodo ] = useState('');
	const toast = useToast();
	const handleChange = (e) => {
		setTodo(e.target.value);
	};
	const addTodo = () => {
		if (!todo) {
			toast({
				title: 'No Todo Item to Add',
				status: 'error',
				duration: '3000',
				isClosable: true
			});
		}

		const newTodo = {
			id: nanoid(),
			text: todo
		};

		setTodos([ ...todos, newTodo ]);
		setTodo('');
	};
	return (
		<HStack>
			<Input placeholder="Add Todo item...." variant="filled" value={todo} onChange={(e) => handleChange(e)} />
			<Button colorScheme="blue" px="8" onClick={() => addTodo()}>
				AddTodo
			</Button>
		</HStack>
	);
};

export default AddTodo;
