const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db'); // Chemin vers db.js
const constellationRoutes = require('./src/router/constellationRoute'); // Chemin vers starRoutes.js
const starRoutes = require('./src/router/starRoute'); // Chemin vers starRoutes.js

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connexion à la base de données
connectDB();

app.use('/api', constellationRoutes, starRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
