const router = require("express").Router();
const userRoutes = require("./userRoutes");
const concertRoutes = require("./concertRoutes");
const youtubeRoutes = require("./youtubeRoutes");

router.use("/users", userRoutes);
router.use("/concerts", concertRoutes);
router.use("/youtube", youtubeRoutes);

module.exports = router;