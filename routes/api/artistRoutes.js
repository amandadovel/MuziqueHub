const router = require("express").Router();

// Matches with "/api/concerts"
router.get("/", (req, res) => {
    console.log(req.body);
});

module.exports = router;
