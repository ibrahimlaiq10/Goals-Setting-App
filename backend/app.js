const express = require("express");
const color = require("colors")
const goalsRoute = require("./routes/goals.route");
const usersRoute = require("./routes/users.route");

const {errorHandler} = require('./middlerware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/goals", goalsRoute);
app.use("/api/users", usersRoute);

app.use(errorHandler);

module.exports = app;
