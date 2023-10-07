const {FlightService} = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes')

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
        return res.status(SuccessCodes.CREATED).json({
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
        return res.status(SuccessCodes.OK).json({
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
const get = async (req,res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: "Flight fetched succesfully",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to get flight",
            error: error
        });
    }
}

const update = async (req,res) => {
    try{
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success: true,
            err: {},
            message: 'Successfully updated the flight'
        })
    } catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the flight',
            err: error
        })
    }
}

module.exports = {
    create,
    getAll,
    get,
    update,
}