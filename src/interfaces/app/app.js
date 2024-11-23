const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

const Database = require("../../infrastructure/database/db");

app.use(express.json());

//* DB
Database.connect();

//* Routes
app.use("/api/ticket", require("../../interfaces/routes/ticket.routes"));
app.use("/api/user", require("../../interfaces/routes/user.routes"));

module.exports = app;
