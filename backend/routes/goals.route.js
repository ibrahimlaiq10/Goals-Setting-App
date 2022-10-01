const express = require("express");
const goalsConstoller = require("../controllers/goals.controller");

const goalsRoute = express.Router();
goalsRoute.get("/", goalsConstoller.getGoals);
goalsRoute.post("/", goalsConstoller.addGoal);

goalsRoute.put("/:id", goalsConstoller.updateGoal);

goalsRoute.delete("/:id", goalsConstoller.deleteGoal);

module.exports = goalsRoute;
