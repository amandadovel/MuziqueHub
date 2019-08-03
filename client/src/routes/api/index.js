const router = require("express").Router();
const bookRoutes = require("./songs");

// Book routes
router.use("/songs", songRoutes);

module.exports = router;
