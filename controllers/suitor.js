const Suitor = require("../models/Suitor");
const User = require("../models/User");
const { isOwner } = require("../utils/isOwner");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const owner = await isOwner(next);
  try {
    if (owner) {
      await User.create({
        username,
        email,
        password,
        status: "admin",
      });

      return res
        .status(201)
        .json({ success: true, data: "User has been recorded" });
    }

    await Suitor.create({
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

    if (suitors) {
      res.status(200).json({ success: 200, data: suitors });
    }

    next();
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.agreeById = async (req, res, next) => {
  const { status } = req.body;
  console.log(status);
  try {
    const { username, email, password } = await Suitor.findById(req.params.id);

    await User.create({
      username,
      email,
      password,
      status
    });


    res.status(201).json({ success: true, data: "User has been recorded" });
  } catch (error) {
    next(error);
  }
};
