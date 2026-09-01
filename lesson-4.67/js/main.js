"use strict";

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

const getNewTodoId = (todos) => {
	const startId = 1;

	if (!todos.length) return startId;

	return (
		todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1
	);
};

const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
	};

	todos.push(newTodo);

	return newTodo;
};

const changeTodoStatusById = (todos, todoId) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
	if (!todo) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
	if (todoIndex == -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}

	todos.splice(todoIndex, 1);
	return todos;
};

// const deleteTodoById = (todos, todoId) => {
//  return todos.filter(todo => todo[todoKeys.id] !== todoId)
// };

console.log(todos);

createTodo(todos, "Новая задача1");
createTodo(todos, "Новая задача2");
createTodo(todos, "Новая задача3");
createTodo(todos, "Новая задача4");

changeTodoStatusById(todos, 2);
changeTodoStatusById(todos, 1);
changeTodoStatusById(todos, 10);

deleteTodoById(todos, 3);
deleteTodoById(todos, 56);
// deleteTodoById(todos, 1)
// deleteTodoById(todos, 4)
// deleteTodoById(todos, 2)
// deleteTodoById(todos, 2)
