const express = require("express");
const color = require("colors");
const goalsRoute = require("./routes/goals.route");
const usersRoute = require("./routes/users.route");
const path = require('path');

const { errorHandler } = require("./middlerware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalsRoute);
app.use("/api/users", usersRoute);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}
app.use(errorHandler);

module.exports = app;
