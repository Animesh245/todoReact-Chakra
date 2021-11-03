import { VStack, StackDivider } from '@chakra-ui/react';
import Todo from './Todo';
import EmptyTodo from './EmptyTodo';

const Todos = ({ todos, deleteTodo }) => {
	return (
		<VStack borderWidth={todos.length > 0 ? '1px' : 'none'} alignItems="stretch" mt="8" divider={<StackDivider />}>
			{todos.length > 0 ? todos.map((todo) => <Todo todo={todo} deleteTodo={deleteTodo} />) : <EmptyTodo />}
		</VStack>
	);
};

export default Todos;
