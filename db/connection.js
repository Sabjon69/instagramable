const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "suad1234567M",
    database: "projet"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL connecté");
});

module.exports = db;
