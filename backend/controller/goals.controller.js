const asyncHandler = require("express-async-handler");
const getGoals = asyncHandler(async (req, res) => {
  res.send("all goals");
});
const addGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error("text is required");
  }
  res.send("goal added");
});
const updateGoal = asyncHandler(async (req, res) => {});
const deleteGoal = asyncHandler(async (req, res) => {});

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
