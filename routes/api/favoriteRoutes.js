const router = require("express").Router();
const db = require("../../models/");

// Display all saved favorites
// router.get("/all")
//     .then()

// Save artist to the database
router.post("/", (req, res) => {
    console.log("Req.Body: ", req.body);
    console.log("Req.User: ", req.user);
    db.Favorites
        .create(req.body)
        .then(dbFavorite => {
            return db.User.findOneAndUpdate(
                { _id: req.user._id},
                { $push: { favorites: dbFavorite } },
                { new: true }
            );
        })
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err))
});

module.exports = router;