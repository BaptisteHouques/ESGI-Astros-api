const mongoose = require('mongoose');

// Fonction pour obtenir une planète par ID
const getPlanete = async (req, res) => {
    try {
        const planete = await Astros.findById(req.params.id);
        res.status(200).json(planete);
        console.log('Planète trouvée : ', planete);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    getPlanete,
};
