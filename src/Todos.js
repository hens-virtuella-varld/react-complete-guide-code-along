import Todo from "./Todo";

const Todos = (props) => {
	console.log(props.todos);
	return props.todos.map((todo) => <Todo text={todo} />);
};

export default Todos;
