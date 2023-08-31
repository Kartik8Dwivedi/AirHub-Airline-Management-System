const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')

const setupAndStartserver = async () => {
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(3000, async () => {
      console.log(`Server started at ${process.env.PORT}`);
      /**
       * DIRECT DB ACCESS CALLS
       *        Create a new city
            const { City } = require('./models/index')
             await City.create({
                  name: "New Delhi"
             })
       * 
       * FOR REPORITORY CALLS
            const CityRepository = require('./repository/city-repository')
            const repo = new CityRepository()
            await repo.createCity({name: "New Delhi"})
       */
    })
}
setupAndStartserver()