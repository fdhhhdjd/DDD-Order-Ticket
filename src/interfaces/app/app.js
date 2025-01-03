const express = require("express");
const morgan = require("morgan");

const { getProd } = require("../../shared/utils");

const app = express();
app.use(morgan(getProd() ? "combined" : "dev"));
app.use(express.json());

const Database = require("../../infrastructure/database/db");

//* DB
Database.connect();

//* Routes
app.use("/api/ticket", require("../../interfaces/routes/ticket.routes"));
app.use("/api/user", require("../../interfaces/routes/user.routes"));

module.exports = app;
