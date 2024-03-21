const mongoose = require("mongoose");

// Define schema
const monthlyDataSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, default: "Feature" },
    properties: {
      DF_UID: { type: Number, required: true },
      DF_NUMMER: { type: Number, required: true },
      SB_UUID: { type: String, required: true },
      MONAT: { type: Number, required: true },
      MSTRAHLUNG_MONAT: { type: Number, required: true },
      A_PARAM: { type: Number, required: true },
      B_PARAM: { type: Number, required: true },
      C_PARAM: { type: Number, required: true },
      HEIZGRADTAGE: { type: Number, required: true },
      MTEMP_MONAT: { type: Number, required: true },
      STROMERTRAG_MONAT: { type: Number, required: true },
    },
    geometry: { type: String, default: null },
  },
  { collection: "dach-info-month" }
);
// Indexing
monthlyDataSchema.index({ "properties.DF_UID": 1 });
// Create model
const MonthlyData = mongoose.model("NoGeometry", monthlyDataSchema);

module.exports = MonthlyData;
