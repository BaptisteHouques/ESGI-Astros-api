const { getPlanete } = require("../controller/planetes/getPlanete");

// Récupérer toutes les planètes
const getPlanetes = async () => {
  try {
    const response = await getPlanete();
    return response;
  } catch (error) {
    console.error(error);
  }
};
