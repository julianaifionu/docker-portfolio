import { useState, useEffect } from 'react';

export default function App() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState('');
	const API_URL = 'http://localhost:3000/api/todos';

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then(setTodos);
	}, []);

	function addTodo() {
		fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ text }),
		})
			.then((res) => res.json())
			.then((todo) => setTodos([...todos, todo]));
	}

	function deleteTodo(todo_id) {
		fetch(`${API_URL}/${todo_id}`, {
			method: 'DELETE',
		})
			.then(() => {
				setTodos(todos.filter((t) => t.id !== todo_id));
			})
			.catch((err) => console.error(err));
	}

	return (
		<div className="todo-wrapper">
			<h1>Todos</h1>

			<div className="todo-input-row">
				<input
					className="todo-input"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button className="todo-btn" onClick={addTodo}>
					Add
				</button>
			</div>

			<ul className="todo-list">
				{todos.map((t) => (
					<li className="todo-item" key={t.id}>
						{t.text}
						<button
							className="delete-todo-btn"
							onClick={() => deleteTodo(t.id)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
