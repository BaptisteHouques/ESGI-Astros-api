const connectDB = require('../../../db');

// Récupérer la constellation d'une étoile
exports.getConstellationByStar = async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection('astros');
        const star = await collection.findOne({ id: parseInt(req.params.id) });

        if (!star) {
            return res.status(404).json({ message: 'Star not found' });
        }

        // Récupérer toutes les étoiles de la même constellation
        const starsInSameConstellation = await collection.find({ con: star.con }).toArray();
        res.status(200).json({ constellation: star.con, stars: starsInSameConstellation });
    } catch (error) {
        console.error('Error retrieving constellation:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

