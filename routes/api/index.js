const router = require("express").Router();
const path = require("path");
const userRoutes = require("./userRoutes");
const artistRoutes = require("./artistRoutes");
const youtubeRoutes = require("./youtubeRoutes");

router.use("/users", userRoutes);
router.use("/artist", artistRoutes);
router.use("/youtube", youtubeRoutes);

// If no API routes are hit, send main page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;