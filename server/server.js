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

app.get('/db', async (req, res) => {
  db.query('SELECT * FROM employee', (err, results) => {
        if (err) {
            console.error('Query error:', err);
            return res.status(500).json({ message: 'Database query error' });
        }
        res.json(results);
    });
});

let itm = {todo:[]};

app.post('/items', (req, res) => {// This receave the data sent by the client/
    const { text } = req.body;
    console.log("📥 Received from client:", text);

    itm.todo.push(text);
    // Here you'd normally save to a DB
    res.json({ message: "Received successfully", receivedText: text });
});

app.get('/items', (req, res) => {// This displays the data as JSON on extension http:localhost:3000/items
  res.json(itm); 
});

app.listen(3000, () => {
    console.log('✅ Server running at http://localhost:3000');
});
