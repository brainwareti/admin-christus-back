const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  rg: String,
  birthDate: {
    type: String
  },
  address: String,
  numberStreet: Number,
  district: String,
  cep: String,
  phone1: String,
  phone2: String,
  plan: String,
  occupation: String,
  dependents: [
    {
      name: String,
      cpf: String,
      relationship: String
    }
  ],
  socialMedia: [String]
});

module.exports = mongoose.model("Client", ClientSchema);
