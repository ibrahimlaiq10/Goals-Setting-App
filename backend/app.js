const express = require("express");
const goalsRoute = require("./routes/goals/goals.route");
const {errorHandler} = require('./middlerware/errorMiddleware')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api/goals", goalsRoute);
app.use(errorHandler);

module.exports = app;
