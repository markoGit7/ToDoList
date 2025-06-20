require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

mysql.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.use(express.json());

app.get('/', (req, res) => res.send('Server is live!'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});