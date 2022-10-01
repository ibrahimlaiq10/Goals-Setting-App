const asyncHandler = require("express-async-handler");
const goalsModel = require("../models/goals.model");
const getGoals = asyncHandler(async (req, res) => {
  const goals = await goalsModel.find({});

  res.json(goals);
});
const addGoal = asyncHandler(async (req, res) => {
  const text = req.body.text;
  if (!text) {
    throw new Error("text is required");
  }
  const goal = await goalsModel.create({ text });
  res.send({ message: "goal added", data: goal, status: "OK" });
});
const updateGoal = asyncHandler(async (req, res) => {
const id = req.params.id;
const text = req.body.text;
const goal = await goalsModel.find({_id:id});
if(!goal){
  throw new Error("goal not found");
}
  await goalsModel.updateOne({_id:id},{text},{upsert:true});
res.send({ message: "goal updated", status: "OK" });


});
const deleteGoal = asyncHandler(async (req, res) => {

  const id = req.params.id;
  const goal = await goalsModel.findById(id);

  await goal.remove();

res.send({ message: "goal deleted", status: "OK" });

});

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
