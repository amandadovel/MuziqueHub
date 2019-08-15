const router = require("express").Router();
const userRoutes = require("./userRoutes");
const artistRoutes = require("./artistRoutes");
const songKickRoutes = require("./songKickRoutes");
const imageRoutes = require("./imageRoutes");

router.use("/users", userRoutes);
router.use("/artist", artistRoutes);
router.use("/songkick", songKickRoutes);
router.use("/image", imageRoutes);


module.exports = router;