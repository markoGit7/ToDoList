import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Back-End Connected!✅");
});

app.get('/api/todos', (req, res) => {
    db.query('SELECT 1+1+1 AS `Calculation`', (err, results) => {
        if (err) {
            console.error('❌ Error fetching todos:', err.message);
            return res.status(500).send('Server error');
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('✅ Server running at http://localhost:3000');
});
