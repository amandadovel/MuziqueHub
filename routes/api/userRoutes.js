const router = require("express").Router();
const passport = require("../../passport");

// Matches with "/api/users/signup"
router.post("/signup", (req, res, next) => {
    passport.authenticate("local-signup", (err, user, info) => {
        console.log(err);
        console.log(user);
        console.log(info);
        
        if (err) {
            return res.json({ message: err || "Oops something happened..." });
        } else if (!err) {
            return res.json(user);
        }
    })(req, res, next);
});

// Matches with "/api/users/login"
router.post("/login", (req, res, next) => {

    passport.authenticate("local-login", (err, user, info) => {
        if (err) {
            return res.status(500).json({
                message: err || "Oops something happened...",
            });
        }
        return res.json(user);
    })(req, res, next);
});

module.exports = router;