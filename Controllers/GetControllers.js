const Multipolygon = require("../Models/MultiPolygon");
const Multipoint = require("../Models/MultiPoint");
const MonthlyData = require("../Models/NoGeometry");
const getPolygonFeatures = async (req, res) => {
  const DF_UID = parseInt(req.params.id);
  try {
    const multiPolygon = await Multipolygon.find({
      "properties.DF_UID": DF_UID,
    }); 
    res.status(200).json(multiPolygon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching data." });
  }
};
const getPointFeatures = async (req, res) => {
  const DF_UID = parseInt(req.params.id);
  try {
    const multipoint = await Multipoint.find({
      "properties.DF_UID": DF_UID,
    }); 
    res.status(200).json(multipoint);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching data." });
  }
};
const getMonthlyData = async (req, res) => {
  const DF_UID = parseInt(req.params.id);
  try {
    const monthlyData = await MonthlyData.find({
      "properties.DF_UID": DF_UID,
    }); 
    res.status(200).json(monthlyData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching data." });
  }
}
module.exports = { getPolygonFeatures, getPointFeatures, getMonthlyData};
