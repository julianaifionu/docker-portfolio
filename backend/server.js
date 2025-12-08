import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let todos = [{ id: 1, text: 'Learn Docker' }];

app.get('/api/todos', (req, res) => {
	res.json(todos);
});

app.post('/api/todos', (req, res) => {
	const newTodo = { id: Date.now(), text: req.body.text };
	todos.push(newTodo);
	res.json(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
	const id = parseInt(req.params.id);
	todos = todos.filter((t) => t.id !== id);
	res.json({ success: true });
});

app.listen(3000, () => console.log('Backend running on 3000'));
