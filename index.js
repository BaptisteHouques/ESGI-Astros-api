const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const getPlanetes = require("./src/route/planeteRoute");

// Charger les routes
getPlanetes();

// Charger les variables d'environnement
dotenv.config();

// Connecter à MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
