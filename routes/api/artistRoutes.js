const router = require("express").Router();
const axios = require("axios");
require('dotenv').config();
const apiKey = process.env.REACT_APP_AUDIODB_APIKEY;

// Search TheAudioDB API for artist
router.get("/search", (req, res) => {
    const artistName = req.query.artistName.replace(/\s/g, "+");
    let artistData;
    axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${artistName}`)
        .then(results => results.data.artists.map(result => {
            // === create artist object with original api call data
            let artist = {
                artistId: result.idArtist,
                artistName: result.strArtist,
                label: result.strLabel,
                genre: result.strGenre,
                website: "http://" + result.strWebsite,
                facebook: "http://" + result.strFacebook,
                twitter: "http://" + result.strTwitter,
                biography: result.strBiographyEN,
                country: result.strCountry ,
                artistThumb: result.strArtistThumb ,
                artistLogo: result.strArtistLogo,
                artistFanart: result.strArtistFanart,
                artistFanart2: result.strArtistFanart2,
                artistFanart3: result.strArtistFanart3
            }
            artistData = artist;
            return artistData;
        }))
        .then(mappedResults => {
            // === use the created artist object to perform music video api call
            let artistId = mappedResults[0].artistId;
            let videos = [];
            axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/mvid.php?i=${artistId}`)
                .then(results => {
                    // If music videos available create video object and nest it within the artist object
                    if (results.data.mvids) {
                        results.data.mvids.map(result => {
                            let video = {
                                vidId: result.idTrack,
                                vidLink: result.strMusicVid,
                                vidThumb: result.strTrackThumb,
                                vidTrack: result.strTrack
                            }
                            // === modification for iframe compatability ===
                            video.vidLink = video.vidLink.replace("watch?v=", "embed/").replace("http:", "https:")
                            videos.push(video);
                            artistData.musicVideos = videos;
                            return artistData;              
                        })
                        res.json([artistData]);
                    // If no music videos available send artist data to front end
                    } else {
                        res.json([artistData]);
                    }
                })
        })
        .catch(err => res.status(422).json(err));
});

module.exports = router;