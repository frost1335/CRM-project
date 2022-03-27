const Suitor = require("../models/Suitor");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
console.log(password); 
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

exports.getAll = async (req, res, next) => {
  try {
    const suitors = await Suitor.find();

    if (!suitors) {
      res.status(200).json({ success: true, message: "Not found any suitor" });
    }

    res.status(200).json({ success: 200, data: suitors });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
