const mongoose = require("mongoose");

let schemaInst = mongoose.Schema;

let model_utilisateur = new schemaInst({
  data: { type: String },
});

module.exports = mongoose.model('model_utilisateur', model_utilisateur);