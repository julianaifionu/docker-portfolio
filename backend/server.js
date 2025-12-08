import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
	host: 'mysql', // docker service name
	user: 'user',
	password: 'userpass',
	database: 'todos_db',
});

async function initDB() {
	try {
		await pool.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        text VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
		console.log("MySQL table 'todos' is ready");
	} catch (err) {
		console.error('Failed to set up database:', err);
		process.exit(1);
	}
}

initDB();

app.get('/api/todos', async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT * FROM todos ORDER BY id DESC');
		res.json(rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'DB error' });
	}
});

app.post('/api/todos', async (req, res) => {
	try {
		const text = req.body.text;

		const [result] = await pool.query('INSERT INTO todos (text) VALUES (?)', [
			text,
		]);

		res.json({ id: result.insertId, text });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'DB error' });
	}
});

app.delete('/api/todos/:id', async (req, res) => {
	try {
		const id = parseInt(req.params.id);

		await pool.query('DELETE FROM todos WHERE id = ?', [id]);

		res.json({ success: true });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'DB error' });
	}
});

app.listen(3000, () => console.log('Backend running on 3000'));
