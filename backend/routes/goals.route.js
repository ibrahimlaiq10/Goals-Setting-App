const express = require("express");
const goalsConstoller = require("../controller/goals.controller");

const goalsRoute = express.Router();
goalsRoute.get("/", goalsConstoller.getGoals);
goalsRoute.post("/", goalsConstoller.addGoal);

goalsRoute.put("/:id", goalsConstoller.updateGoal);

goalsRoute.delete("/", goalsConstoller.deleteGoal);

module.exports = goalsRoute;
