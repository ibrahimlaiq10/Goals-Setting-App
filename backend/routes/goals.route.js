const express = require("express");
const goalsConstoller = require("../controllers/goals.controller");

const {authorizeUser} = require('../middlerware/authMidleware');

const goalsRoute = express.Router();
goalsRoute.get("/", authorizeUser, goalsConstoller.getGoals);
goalsRoute.post("/",authorizeUser, goalsConstoller.addGoal);

goalsRoute.put("/:id",authorizeUser, goalsConstoller.updateGoal);

goalsRoute.delete("/:id", authorizeUser, goalsConstoller.deleteGoal);

module.exports = goalsRoute;
