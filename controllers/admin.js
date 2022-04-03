const User = require("../models/User");
const Suitor = require("../models/Suitor");
const mongoose = require('mongoose')

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    const filteredUsers = users.filter(
      (user) => user._id.toString() !== req.params.id.toString()
    );

    res.status(200).json({ success: true, data: filteredUsers });
  } catch (error) {
    next(error);
  }
};

exports.editUser = async (req, res, next) => {
  const { id, status } = req.body
  try {

    await User.findByIdAndUpdate(id, { status });

    const users = await User.find();

    const filteredUsers = users.filter((user) => user._id.toString() !== req.params.id.toString())

    res.status(200).json({ success: true, data: filteredUsers });
  } catch (error) {
    next(error);
  }
};
