const User = require("../models/User");

exports.isOwner = async (next) => {
  try {
    const user = await User.findOne();

    if (!user) {
      return true;
    }
    return false;
  } catch (error) {
    next(error);
  }
};
