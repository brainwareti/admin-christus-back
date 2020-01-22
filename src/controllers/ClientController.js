const Client = require("../models/Client");

module.exports = {
  async index(req, res) {
    const clients = await Client.find({}).sort("name");

    return res.json(clients);
  },

  async store(req, res) {
    const findedClient = await Client.findOne({ cpf: req.body.cpf });

    if (!findedClient) {
      const {
        name,
        cpf,
        rg,
        birthDate,
        phone1,
        phone2,
        religion,
        socialMedias,
        street,
        numberStreet,
        district,
        cep,
        dependents
      } = req.body;

      let client = await Client.create({
        name,
        cpf,
        rg,
        birthDate,
        phone1,
        phone2,
        religion,
        socialMedias,
        street,
        numberStreet,
        district,
        cep,
        dependents
      });
      return res.json(client);
    }
    return res.json({});
  }
};
