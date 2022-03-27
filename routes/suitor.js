const { Router } = require("express");
const router = Router();
const { register, getAll } = require("../controllers/suitor");

router.route("/").get(getAll);
router.route("/agree").post();
router.route("/disagree").post();
router.route("/register").post(register);

module.exports = router;
