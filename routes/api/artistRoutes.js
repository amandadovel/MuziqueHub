const router = require("express").Router();
const axios = require("axios");
require('dotenv').config();
const db = require("../../models/Favorites")
const apiKey = process.env.REACT_APP_AUDIODB_APIKEY;

// Matches with "/api/artist/search"
router.get("/search", (req, res) => {
    // const artistName = req.query.artistName.replace(/\s/g, "+");
    axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=coldplay`)
        .then(results =>
            results.data.artists.filter(result =>
                result.idArtist &&
                result.strArtist
            )
        )
        .then(filteredResults => res.json(filteredResults))
        .catch(err => res.status(422).json(err));
});

router.get("/videos", (req, res) => {
    // const artistName = req.query.artistName.replace(/\s/g, "+");
    axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=coldplay`)
        .then(results => results.data.artists
            .map(artist =>
                artist.idArtist
            )
        )
        .then(mappedResults => {
            let artistId = mappedResults[0]; 
            axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/mvid.php?i=${artistId}`)
            .then(results => results.data.mvids
                .map(videos => 
                    videos.strMusicVid)
                )
                .then(mappedResults => res.send(mappedResults))
        })
        .catch(err => res.status(422).json(err));
})


module.exports = router;