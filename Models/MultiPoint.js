const mongoose = require("mongoose");

// Define schema
const featureSchema = new mongoose.Schema(
  {
    type: { type: String, default: "Feature" },
    properties: {
      OBJECTID: { type: Number },
      DF_UID: { type: Number },
      DF_NUMMER: { type: Number },
      DATUM_ERSTELLUNG: { type: Date },
      DATUM_AENDERUNG: { type: Date },
      SB_UUID: { type: String },
      SB_OBJEKTART: { type: Number },
      SB_DATUM_ERSTELLUNG: { type: Date },
      SB_DATUM_AENDERUNG: { type: Date },
      KLASSE: { type: Number },
      FLAECHE: { type: Number },
      AUSRICHTUNG: { type: Number },
      NEIGUNG: { type: Number },
      MSTRAHLUNG: { type: Number },
      GSTRAHLUNG: { type: Number },
      STROMERTRAG: { type: Number },
      STROMERTRAG_SOMMERHALBJAHR: { type: Number },
      STROMERTRAG_WINTERHALBJAHR: { type: Number },
      WAERMEERTRAG: { type: Number },
      DUSCHGAENGE: { type: Number },
      DG_HEIZUNG: { type: Number },
      DG_WAERMEBEDARF: { type: Number },
      BEDARF_WARMWASSER: { type: Number },
      BEDARF_HEIZUNG: { type: Number },
      FLAECHE_KOLLEKTOREN: { type: Number },
      VOLUMEN_SPEICHER: { type: Number },
      GWR_EGID: { type: Number },
    },
    geometry: {
      type: { type: String },
      coordinates: { type: [[Number]] },
    },
  },
  { collection: "dach-info-points" }
);
// Indexing
featureSchema.index({ "properties.DF_UID": 1 });
// Create model
const Feature = mongoose.model("Multipoint", featureSchema);

module.exports = Feature;
