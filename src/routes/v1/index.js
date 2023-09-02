const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);
router.put("/city", CityController.bulkCreate);
router.get("/airportsInCity/:id", CityController.getAirports);

module.exports = router;
