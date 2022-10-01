const express = require("express");
const goalsRoute = require("./routes/goals/goals.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
  res.send("Hello from express");
});
app.use("/api/goals", goalsRoute);

module.exports = app;
