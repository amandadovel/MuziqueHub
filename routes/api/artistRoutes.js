const router = require("express").Router();
const axios = require("axios");

// Matches with "/api/artist"
router.get("/", (req, res) => {
    axios.get("https://www.theaudiodb.com/api/v1/json/195003/search.php?s=coldplay")

    .then(results => {
        console.log(results.data);
        res.send(results.data)
    })
    .catch(err => res.status(422).json(err))
});

module.exports = router;
