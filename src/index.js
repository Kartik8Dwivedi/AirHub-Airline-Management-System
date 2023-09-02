const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')
const ApiRoutes = require('./routes/index')

const {Airport, City} = require('./models')

const setupAndStartserver = async () => {
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api', ApiRoutes)

    app.listen(3000, async () => {
      console.log(`Server started at ${process.env.PORT}`);
      // const airports = await Airport.findAll({
      //   include: [{
      //     model: City,
      //   }]
      // });
      // console.log(airports)
    })
}
setupAndStartserver()