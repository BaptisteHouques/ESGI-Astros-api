const express = require('express');
const connectDB = require('./db');

const app = express();
const port = process.env.PORT || 3000;

// Connecter à MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Importer les routes pour les planètes
const planetRoutes = require('./src/route/planeteRoute');
app.use('/api/planetes', planetRoutes);

app.listen(port, () => {
    console.log(`L'application écoute sur le port ${port}`);
});
