const User = require("../models/User");

const filteredUsers = async (id) => {
  const users = await User.find();

  const filterUsers = users.filter(
    (user) => user._id.toString() !== id.toString()
  );

  return filterUsers;
};

exports.getAllUsers = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, data: await filteredUsers(req.params.id) });
  } catch (error) {
    next(error);
  }
};

exports.editUser = async (req, res, next) => {
  const { id, status } = req.body;
  try {
    await User.findByIdAndUpdate(id, { status });

    res.status(200).json({ success: true, data: await filteredUsers(req.params.id) });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.body;
  try {
    await User.findByIdAndRemove(id);

    res.status(201).json({ success: true, data: await filteredUsers(req.params.id) });
  } catch (error) {
    next(error);
  }
};
