const Suitor = require("../models/Suitor");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await Suitor.create({
      username,
      email,
      password,
    });

    res.status(201).json({ success: true, data: "User has been recorded" });
  } catch (error) {
    next(error);
  }
};
