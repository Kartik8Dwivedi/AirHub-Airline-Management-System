const db = require('../models/index');
const { Airport } = db;
class AirportRepository {

    // Create a new Airport
    async createAirport(data){
        try{
            const airport = await Airport.create(data);
            return airport;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    // Delete an Airport
    async deleteAirport(airportId){
        try{
            await Airport.destroy({where: {id: airportId}});
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    // Get an Airport
    async getAirport(airportId){
        try{
            const airport = await Airport.findByPk(airportId);
            return airport;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    // Update an Airport
    async updateAirport(airportId, data){
        try{
            const airport = await Airport.findByPk(airportId);
            if(data.name) airport.name = data.name;
            if(data.cityId) airport.cityId = data.cityId;
            await airport.save();
            return airport;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
  
}

module.exports = AirportRepository;