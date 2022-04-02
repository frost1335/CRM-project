const { Router } = require("express");
const router = Router();
const { register, getAll, agreeById } = require("../controllers/suitor");

router.route("/").get(getAll);
router.route("/agree/:id").post(agreeById);
router.route("/disagree/:id").post();
router.route("/register").post(register);

module.exports = router;
