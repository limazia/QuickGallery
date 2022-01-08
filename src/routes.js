const express = require("express");

const routes = express.Router();

// Controllers
const WebController = require("./controllers/WebController");

// Main
routes.get("/", WebController.renderHome);
routes.get("/:gallery", WebController.renderGallery);
routes.get("*", WebController.renderPageNotFound);

module.exports = routes;