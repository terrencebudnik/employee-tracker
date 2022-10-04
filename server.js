const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'office_db'
  },
  console.log(`Connected to the office_db database.`)
);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
