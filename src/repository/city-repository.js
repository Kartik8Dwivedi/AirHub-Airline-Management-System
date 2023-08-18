const { City } = require('../models/index');

class CityRepository {
    // create city function
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }
    // delete cities function
  async deleteCity(cityId) {
    try {
      await City.destroy({ where: { id: cityId } });
    } catch (error) {
        throw { error };
    }
  }
}

module.exports = CityRepository;