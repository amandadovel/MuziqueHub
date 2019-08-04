const router = require("express").Router();
const signupController = require("../../controllers/signupController")

// Matches with "/api/signup"
router.route("/")
    .get(signupController.findOne)
    .post(signupController.create)

module.exports = router;