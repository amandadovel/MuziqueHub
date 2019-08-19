const router = require("express").Router();
const axios = require("axios");
const moment = require('moment');
require("dotenv").config();
const apiKey = process.env.REACT_APP_SONGKICK_KEY;


// Function to parse SongKick response data
songkickParse = (results) => {
    return results.data.resultsPage.results.event.map(result => {
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
            date: moment(result.start.date, "YYYY-MM-DD").format("L"), // format date w/ moment.js
            venue: result.venue.displayName,
            location: result.location.city,
            performance: performance
        };
    })
}

// Macthes with /api/songkick/search
router.get("/search" , (req, res) => {
    const artistName = req.query.artistName.replace(/\s/g, "+");
    axios.get(`https://api.songkick.com/api/3.0/events.json?artist_name=${artistName}&per_page=10&apikey=${apiKey}`)
        .then(results => songkickParse(results))
        .then(mappedResults => res.json(mappedResults))
        .catch(err => res.status(422).json(err));
});

// Macthes with /api/songkick/location
router.get("/location" , (req, res) => {
    const location = req.query.location.replace(/\s/g, "+");
    axios.get(`https://api.songkick.com/api/3.0/search/locations.json?query=${location}&apikey=${apiKey}`)
        .then(results => {
            return results.data.resultsPage.results.location[0].metroArea.id
        })
        .then(result => {
            let locationId = result
            axios.get(`https://api.songkick.com/api/3.0/events.json?location=sk:${locationId}&per_page=10&apikey=${apiKey}`)
                .then(results => songkickParse(results))
                .then(mappedResults => res.json(mappedResults))
        })
        .catch(err => res.status(422).json(err));
});

module.exports = router;