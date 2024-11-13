const express = require("express");
const app = express();

const Database = require("../../infrastructure/database/db");

app.use(express.json());

//* DB
Database.connect();

module.exports = app;
