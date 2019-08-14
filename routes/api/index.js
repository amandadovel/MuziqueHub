const router = require("express").Router();
const userRoutes = require("./userRoutes");
const artistRoutes = require("./artistRoutes");
const favoriteRoutes = require("./favoriteRoutes");
const songKickRoutes = require("./songKickRoutes");

router.use("/users", userRoutes);
router.use("/artist", artistRoutes);
router.use("/favorites", favoriteRoutes);
router.use("/songkick", songKickRoutes);

module.exports = router;