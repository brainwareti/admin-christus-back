const express = require("express");

const routes = express.Router();

const ClientController = require("./controllers/ClientController");

routes.get("/clients", ClientController.index);
routes.post("/clients", ClientController.store);

module.exports = routes;
