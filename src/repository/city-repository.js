const { City } = require('../models/index');

class CityRepository {
    // create city function
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer")
      throw { error };
    }
  }
    // delete cities function
  async deleteCity(cityId) {
    try {
      await City.destroy({ where: { id: cityId } });
    } catch (error) {
      console.log("Something went wrong in the repository layer");
        throw { error };
    }
  }
    // get all cities function
  async getCity(cityID) {
    try {
      const city = await City.findByPk(cityID);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
    // update city function
  async updateCity(cityID, data) {
      const city = await City.update(data, {
        where: {
          id: cityID
        }
      })
      return city;
  }
}

module.exports = CityRepository;