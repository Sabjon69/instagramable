const express = require("express");
const app = express();
const captureRoutes = require("./routes/capture");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rendre le dossier public accessible
app.use(express.static("public"));

// route pour recevoir les données
app.use("/capture", captureRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Serveur lancé sur le port " + PORT);
});
