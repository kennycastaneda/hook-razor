const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const logger = require("./config/logger");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const orderRouter = require("./orders/orders.router");

const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());

app.use("/orders", orderRouter);
console.log("orders in app");

app.use(notFound);
app.use(errorHandler);

module.exports = app;
