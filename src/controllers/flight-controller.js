const {FlightService} = require('../services/index');

const flightService = new FlightService();  
const create = async (req,res) => {
    try {
        let flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price,
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Flight created succesfully",
            error: {}
        }); 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to create a flight",
            error: error
        })
    }
}
const getAll = async (req,res) => {
    try {
        const response = await flightService.getALlFlightData(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "All flights fetched succesfully",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to get all flights",
            error: error
        });
    }
}

module.exports = {
    create,
    getAll,
}