const express = require('express');
const mysql = require('mysql');
const app = express();

// 🚩 TEST 1: Hardcoded Secret
const API_KEY = "sk_live_51MzX9pL0W2vR8qY7z"; 

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123', // 🚩 TEST 2: Hardcoded Password
  database: 'test_db'
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  // 🚩 TEST 3: SQL Injection (Direct string concatenation)
  const sql = "SELECT * FROM products WHERE name = '" + query + "'";
  
  db.query(sql, (err, result) => {
    if (err) res.status(500).send(err);
    res.send(result);
  });
});

app.listen(3000);