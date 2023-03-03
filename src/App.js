import React from "react";

import Todos from "./Todos";
import "./App.css";

export default function App() {
	const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];
	return (
		<ul>
			<Todos todos={DUMMY_TODOS} />
		</ul>
	);
}
