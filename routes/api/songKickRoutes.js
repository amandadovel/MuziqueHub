const router = require("express").Router();
const axios = require("axios");
const moment = require('moment');
require("dotenv").config();

// Macthes with /api/songkick/search
router.get("/search" , (req, res) => {
    const artistName = req.query.artistName.replace(/\s/g, "+");
    const apiKey = process.env.REACT_APP_SONGKICK_KEY;
    axios.get(`https://api.songkick.com/api/3.0/events.json?artist_name=${artistName}&per_page=10&apikey=${apiKey}`)
        .then(results => 
            results.data.resultsPage.results.event.map(result => {
                let performance = [];
                result.performance.map(item => {
                    let performer = {
                        artistId: item.artist.id,
                        artistName: item.artist.displayName,
                        artistLink: item.artist.uri
                    }
                    performance.push(performer);
                })
                return { 
                    eventId: result.id,
                    event: result.displayName, 
                    type: result.type,
                    eventLink: result.uri,
                    date: moment(result.start.date, "YYYY-MM-DD").format("L"),
                    venue: result.venue.displayName,
                    location: result.location.city,
                    performance: performance
                };
            })
        )
        .then(mappedResults => res.json(mappedResults))
        .catch(err => res.status(422).json(err));
});

module.exports = router;