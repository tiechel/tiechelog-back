const path = require("path");
const package = require("../../package.json");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: package.name,
      version: package.version,
    },
  },
  explorer: true,
  apis: [path.join(__dirname, "api/*.js")],
};

module.exports = [swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options))];
