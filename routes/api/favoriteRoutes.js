const router = require("express").Router();
const db = require("../../models/");

// Display all saved favorites
router.get("/", (req, res) => {
    db.User
        .find({ _id: req.user._id})
        .then(dbUser => res.json(dbUser))
});
    
// Save favorite to user in the database
router.post("/", (req, res) => {
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

// Remove favorite from user in database
router.post("/delete", (req, res) => {
    db.User
        .findOneAndUpdate(
            { _id: req.user._id },
            { $pull: { favorites: req.body }},
            { new: true }
        )
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err))
});

module.exports = router;