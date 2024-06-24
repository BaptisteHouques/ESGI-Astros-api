import mongoose from "mongoose";

export const getPlanete = async (req, res) => {
  try {
    const Astros = mongoose.model("astros");
    const planete = await Astros.findById(req.params.id);
    res.status(200).json(planete);
    console.log("Planete trouvé : ", planete);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
