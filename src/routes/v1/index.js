const express = require("express");
const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);
router.put("/city", CityController.bulkCreate);
router.get("/airportsInCity/:id", CityController.getAirports);

router.post("/airport", AirportController.create);
// router.delete("/airport/:id", AirportController.deleteAirport);
// router.get("/airport/:id", AirportController.getAirport);
// router.patch("/airport/:id", AirportController.updateAirport);

router.post("/flights", FlightController.create);
router.get("/flights", FlightController.getAll);

module.exports = router;
