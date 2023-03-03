import React from "react";

export default function Todo(props) {
	return props.todos.map((text) => <li>{text}</li>); // My solution.
}
