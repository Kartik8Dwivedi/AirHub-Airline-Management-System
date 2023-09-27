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

// DELETE -> /airport/:id
const deleteAirport = async (req, res) => {
  try {
    const airport = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully deleted an airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error deleting an airport",
      err: error,
    });
  }
}

// GET -> /airport/:id
const getAirport = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully retrieved an airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error retrieving an airport",
      err: error,
    });
  }
}

// PATCH -> /airport/:id
const updateAirport = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully updated an airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error updating an airport",
      err: error,
    });
  }
}

module.exports = {
  createAirport,
  getAirport,
  deleteAirport,
  updateAirport,
};