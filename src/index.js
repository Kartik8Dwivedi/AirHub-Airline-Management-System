const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const db = require("./models");
const CityRepository = require("./repository/city-repository");
const CityService = require("./services/city-service");

const setupAndStartserver = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(3000, async () => {
    console.log(`Server started at ${process.env.PORT}`);
    if (process.env.SYNC_DB == "true") {
      await db.sequelize.sync({ alter: true });
      console.log("Database Synced");
    }
  });
};
setupAndStartserver();
