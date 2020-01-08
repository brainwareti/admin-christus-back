const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  rg: String,
  birthDate: {
    type: Date,
    default: Date.now()
  },
  address: String,
  numberAddress: Number,
  district: String,
  cep: String,
  phone: [String],
  occupation: String
});

module.exports = mongoose.model("Client", ClientSchema);
