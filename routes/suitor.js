const { Router } = require("express");
const router = Router();
const {
  register,
  getAll,
  agreeById,
  disagreeById,
} = require("../controllers/suitor");

router.route("/").get(getAll);
router.route("/agree/:id").post(agreeById);
router.route("/disagree/:id").post(disagreeById);
router.route("/register").post(register);

module.exports = router;
