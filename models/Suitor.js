const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const SuitorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide an username"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: [6, "Password must be more than 6 characters"],
    // select: false,
  },
});

// SuitorSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

const Suitor = mongoose.model("Suitor", SuitorSchema);

module.exports = Suitor;
