const { Router } = require("express");
const router = Router();

const { getAllUsers, editUser } = require("../controllers/admin");

router.route("/permission/:id").get(getAllUsers);
router.route("/permission/:id").put(editUser);
router.route("/permission/:id").delete();

module.exports = router;
