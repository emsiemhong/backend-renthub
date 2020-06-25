var express = require("express");
var buildingRouter = require("./building");

var app = express();

app.use("/buildings/", buildingRouter);

module.exports = app;