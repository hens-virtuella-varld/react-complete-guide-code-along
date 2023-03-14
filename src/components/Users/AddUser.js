import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim() === 0 || enteredAge.trim() === 0) {
			return;
		} else if (+enteredAge < 1 || !Number.isInteger(+enteredAge)) {
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					onChange={usernameChangeHandler}
					value={enteredUsername}
				/>
				<label htmlFor="age">Age (Years) </label>
				<input
					type="number"
					id="age"
					onChange={ageChangeHandler}
					value={enteredAge}
				/>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
