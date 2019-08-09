const router = require("express").Router();
const passport = require("../../passport");
const User = require("../../models/User");

// Matches with "/api/users/signup"
router.post("/signup", (req, res, next) => {
    const { username, email, password } = req.body;
    User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (user) {
            console.log("User already exists");
            return res.json("User already exists");
        }
        if (!user) {
            let newUser = new db.User({
                username: username,
                email: email,
                password: password
            });
            newUser.password = newUser.generateHash(password);
            newUser.save((err, savedUser) => {
                if (err) throw err;
                console.log("New User Saved");
                res.redirect(307, "/api/users/login");
            });
        }
    });
});

// Matches with "/api/users/login"
router.post("/login", (req, res, next) => {
    console.log(req.body);
    
    passport.authenticate("local-login", (req, res) => {
        if (err) {
            return res.status(500).json(err)
        }
        console.log("Auth Login: ", req.user);
        return res.json(user);
    })(req, res, next);
});

module.exports = router;