import React from "react";

import Todo from "./Todo";
import "./App.css";

export default function App() {
	const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

	return (
		<ul>
			<Todo todos={DUMMY_TODOS} />
			{/* My solution is in the line above. */}
		</ul>
	);
}
