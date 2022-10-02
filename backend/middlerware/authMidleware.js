const jwt = require("jsonwebtoken");
const errorHandler = require("express-async-handler");

const usersModel = require("../models/users.model");

const authorizeUser = errorHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from headers
      const token = req.headers.authorization.split(" ")[1];

      //   verify token
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);

      // get user from token

      req.user = await usersModel.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not Authorized");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized, no token provided");
  }
});

module.exports = {
  authorizeUser,
};
