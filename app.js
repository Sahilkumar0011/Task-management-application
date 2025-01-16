const express = require("express");
const bodyParser = require("body-parser");
const tasksRoutes = require("./routes/tasks");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
require("dotenv").config();

const app = express();


app.use(bodyParser.json());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", tasksRoutes);


connectDB();

module.exports = app;
