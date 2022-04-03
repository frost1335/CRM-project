const User = require("../models/User");
const Suitor = require("../models/Suitor");

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
  try {
    await User.findByIdAndUpdate(req.params.id, {
      email: req.body.email,
      username: req.body.username,
      status: req.body.status,
    });

    const users = await User.find();

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};
