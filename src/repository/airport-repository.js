const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/index");

class AirportRepostitory extends CrudRepository{
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepostitory;