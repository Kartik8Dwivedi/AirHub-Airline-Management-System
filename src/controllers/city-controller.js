const { CityService } = require("../services/index");

const cityService = new CityService();

// POST -> /city
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error creating a city",
      err: error,
    });
  }
};
// DELETE -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error in deleting a city",
      err: error,
    });
  }
};
// GET -> /city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully retrieved a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error in retrieving a city",
      err: error,
    });
  }
};
// PATCH -> /city/:id -> req.body
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error in retrieving a city",
      err: error,
    });
  }
};

// GET -> /city
const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully added all the cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error in retrieving a city",
      err: error,
    });
  }
};

// PUT -> /city
const bulkCreate = async (req, res) => {
  try {
    const cities = await cityService.bulkCreateCities(req.body);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched all cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error in retrieving a city",
      err: error,
    });
  }
};

// GET -> /airports
const getAirports = async (req, res) => {
  try {
    const airports = await cityService.getAirports(req.params);
    return res.status(200).json({
      data: airports,
      success: true,
      message: "Successfully fetched all airports",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error in retrieving a city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
  bulkCreate,
  getAirports,
};
