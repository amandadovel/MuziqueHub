const router = require("express").Router();


// Matches with "/api/youtube"
router.get("/", (req, res) => {
    
    const KEY = 'AIzaSyCF_T-A_YOPyj_MX9jt9GvCHxHRVHLieGQ';
    axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY
        }
    })
});

module.exports = router;