const router = require("express").Router();
const loginController = require("../../controllers/loginController")

// Matches with "/api/login"
router.route("/")
    .get(loginController.findById);

// Matches with "/api/login/:id"
router.route("/:id")
    .post(loginController.findById);

module.exports = router;