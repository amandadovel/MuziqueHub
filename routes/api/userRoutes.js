const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const passport = require("../../passport");
const db = require("../../models");
const isAuthenticated = require('../../passport/middleware/isAuthenticated')

// Test route to retrieve user info
router.get('/user', isAuthenticated, (req, res, next) => {
    console.log('this is the user', req.user)
    res.json(req.user)
})

// Signup User
router.post("/signup",    [
    // === signup validation ===
    check("username")
        .isLength({ min: 5 })
        .withMessage("Username must be between 5-15 characters"),
    check("email")
        .isEmail()
        .withMessage("Must use a valid email address")
        .custom(async email => {
            const user = await db.User.findOne({ email: email });
            if (user) {
                return Promise.reject("Email already in use");
            }
        }),
    check("password")
        .isLength(8, 65)
        .withMessage("Password must be between 8-60 characters."),
        // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,"i")
        // .withMessage("Password must include a lowercase, uppercase, number, and a special character."),
    check("passwordConf").custom((value, { req }) => {
        if (value !== req.body.password) {
            return Promise.reject("Passwords do not match.");
        } else {
            return value;
        }
    })
], function(req, res) {
    // === validation error handling ===
    const errors = validationResult(req);
    const error = errors.array().map(error => error.msg)
    if (!errors.isEmpty()) {
        return res.json({ error: error });
    }
    // === user database handling ===
    const { username, email, password } = req.body;
    db.User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (user) {
            return res.json({ error: "User already exists" });
        }
        if (!user) {
            let newUser = new db.User({
                username: username,
                email: email,
                password: password
            });
            newUser.password = newUser.generateHash(password);
            newUser.save((err, inserted) => {
                if (err) throw err;
                res.redirect(307, "/api/users/login");
            });
        }
    });
})

// Login User
router.post("/login", passport.authenticate("local-login", {
    // === failed login handling ===
    failureRedirect: "/api/users/restricted",
    failureFlash: true,
}), function(req, res) {
    // === successful login handling ===
    res.json({ user: req.user, loggedIn: true })
});

// Restricted route for unauthorized users
router.get("/restricted", function(req, res) {
    req.flash("error").map(err => {
        res.send(err) 
    });
})

module.exports = router;