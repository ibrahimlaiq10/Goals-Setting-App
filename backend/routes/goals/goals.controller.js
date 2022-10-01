function getGoals(req, res) {
    res.send("all goals")
}
function addGoal(req, res) {
    if(!req.body.text){
        throw new Error("text is required")
    }
    res.send("goal added")

}
function updateGoal(req, res) {}
function deleteGoal(req, res) {}

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
