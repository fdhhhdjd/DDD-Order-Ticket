const express = require("express");
const app = express();

const Database = require("../../infrastructure/database/db");

app.use(express.json());

//* DB
Database.connect();

//* Routes
app.use("/api/ticket", require("../../interfaces/routes/ticket.routes"));
app.use("/api/user", require("../../interfaces/routes/user.routes"));

module.exports = app;
