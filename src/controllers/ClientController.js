const Client = require("../models/Client");

module.exports = {
  async index(req, res) {
    const clients = await Client.find({}).sort("name");

    return res.json(clients);
  },

  async store(req, res) {
    const client = await Client.create(req.body);
    return res.json(client);
  }
};
