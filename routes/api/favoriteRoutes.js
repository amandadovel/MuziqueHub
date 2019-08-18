const router = require("express").Router();
const db = require("../../models/");

// Display all saved favorites
router.get("/", (req, res) => {
    db.User
        .find({ _id: req.user._id})
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err))
});
    
// Save favorite to user in database
router.post("/", (req, res) => {
    // === find user and check if favorite already exists to avoid duplicates ===
    db.User
        .findOne({_id: req.user._id})
        .then(dbUser => dbUser.favorites.every(favorite => favorite.artistId !== req.body.artistId))
        .then(newFavorite => {
            // === if not duplicate, create favorite in DB then update user favorites ===
            if (newFavorite) {
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
            // === if duplicate, send message to front end
            } else {
                res.json({ message: "You already have that artist in your favorites." })
            }
        })
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

// Clear all favorites from user in db
router.get("/clear", (req, res) => {
    db.User
        .findOneAndUpdate(
            { _id: req.user._id },
            { $unset: { favorites: 1 }},
            { new: true }
        )
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err))
})

module.exports = router;