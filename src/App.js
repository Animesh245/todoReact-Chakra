import { Box, VStack } from '@chakra-ui/react';
import './App.css';
import { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

// const initialTodos = [
// 	{
// 		id: 12,
// 		text: 'HelloFromSixbee'
// 	},

// 	{
// 		id: 22,
// 		text: 'HiFromOneE'
// 	}
// ];

function App() {
	const [ todos, setTodos ] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

	useEffect(
		() => {
			localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ]
	);

	const deleteTodo = (id) => {
		const updatedTodo = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodo);
	};

	return (
		<VStack>
			<Header />
			<Box w="100%" maxW={{ base: '80vw', sm: '80vw', lg: '50vw', xl: '40vw' }}>
				<AddTodo todos={todos} setTodos={setTodos} />
				<Todos todos={todos} deleteTodo={deleteTodo} />
			</Box>
		</VStack>
	);
}

export default App;
