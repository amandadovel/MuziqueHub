const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

// API routes
router.use("/api", apiRoutes);

// If no API routes hit, send main page
router.use((res, req) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;