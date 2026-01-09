const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.post("/", (req, res) => {
    const { email, password } = req.body;

    db.query(
        "INSERT INTO captures (email, password) VALUES (?, ?)",
        [email, password],
        (err) => {
            if (err) throw err;
            res.json({ message: "Données reçues" });
        }
    );
});

module.exports = router;
