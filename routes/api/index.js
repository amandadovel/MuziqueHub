const router = require("express").Router();
const loginRoutes = require("./login")
const signupRoutes = require("./signup");
const path = require("path");

router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);

// If no API routes hit, send main page
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;