const express = require("express");
const userConstoller = require("../controllers/users.controller");
const {authorizeUser} = require('../middlerware/authMidleware');

const userRoute = express.Router();
userRoute.post("/", userConstoller.registerUser);
userRoute.get("/", userConstoller.getUsers);

userRoute.post("/login", userConstoller.loginUser);

userRoute.get("/me",authorizeUser, userConstoller.getMe);


module.exports = userRoute;
