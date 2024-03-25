const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const {
  getPolygonFeatures,
  getPointFeatures,
  getMonthlyData,
} = require("./Controllers/GetControllers");
const app = express();
const cors = require("cors");
const { CheckKey } = require("./Middleware/CheckKey");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api/getPolygonFeatures/:id", CheckKey, getPolygonFeatures);
app.get("/api/getPointFeatures/:id", CheckKey, getPointFeatures);
app.get("/api/getMonthlyData/:id", CheckKey, getMonthlyData);
mongoose.connect(process.env.URI).then(() => {
  const PORT = 443;
  app.listen(PORT, () => {
    console.log(
      "connected to the db and listening at port : ",
      PORT
    );
  });
});
