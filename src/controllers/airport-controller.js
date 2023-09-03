const { AirportService } = require('../services/index');

const airportService = new AirportService();

// POST -> /airport
const createAirport = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created an airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error creating an airport",
      err: error,
    });
  }
};

module.exports = {
  createAirport,
};