const { Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  // create city function
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
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
    // data will be a object like: {name: "Prayagraj"}
    // const city = await City.update(data, {
    //   where: {
    //     id: cityID
    //   },
    //   returning: true,
    //   plain: true
    // })
    // the above code will return an array like: [1] in mySQL and will return an object like: {name: "Prayagraj"} in postgres, for similar output we have changed the code to:
    const city = await City.findByPk(cityID);
    city.name = data.name;
    await city.save();
    return city;
  }
  // get all cities function
  async getAllCities(filter) {
    // filter can be empty
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  // bulk create cities function
  async bulkCreateCities(data) {
    try {
      const cities = await City.bulkCreate(data);
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
