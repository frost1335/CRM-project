const { Router } = require("express");
const router = Router();
const { register } = require("../controllers/suitor");

router.route("/").get();
router.route("/agree").post();
router.route("/disagree").post();
router.route("/register").post(register);

module.exports = router;
