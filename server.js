const express = require("express");
const app = express();
const captureRoutes = require("./routes/capture");
PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rendre le dossier public accessible
app.use(express.static("public"));

// route pour recevoir les données
app.use("/capture", captureRoutes);

app.listen(3000, () => console.log("Serveur lancé sur http://localhost:3000/instagram.html"));
