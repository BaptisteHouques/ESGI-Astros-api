const connectDB = require('../../../db');

// Obtenez toutes les étoiles (existant déjà)
exports.getAllStars = async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection('astros');
        const stars = await collection.find().toArray();
        res.status(200).json(stars);
    } catch (error) {
        console.error('Error retrieving stars:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};