const router = require("express").Router();
const axios = require("axios");
require('dotenv').config();
const db = require("../../models/Artist")

// Matches with "/api/artist/search"
router.get("/search", (req, res) => {
    const artistName = req.query.artistName.replace(/\s/g, "+");
    const apiKey = process.env.REACT_APP_AUDIODB_APIKEY;

    axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${artistName}`)
        .then(results =>
            results.data.artists.filter(result =>
                result.idArtist &&
                result.strArtist
            )
        )
        .then(filteredResults => res.json(filteredResults))
        .catch(err => res.status(422).json(err));
});

module.exports = router;