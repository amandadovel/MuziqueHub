const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const passport = require("../../passport");
const db = require("../../models");
const auth = require("../../passport/middleware/auth");

// Signup User
router.post("/signup",
    [
        // === signup validation ===
        check("username")
            .isLength({ min: 5 })
            .withMessage("Username must be between 5-15 characters"),
        check("email")
            .isEmail()
            .withMessage("Invalid email address")
            .custom(async email => {
                const user = await db.User.findOne({ email: email });
                if (user) {
                    return Promise.reject("Email already in use");
                }
            }),
        check("password")
            .isLength(8, 65)
            .withMessage("Password must be at least 8 characters")
            // === strong password validation ===
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,"i")
            .withMessage("Password must include a lowercase, uppercase, number, and a special character"),
        check("passwordConf")
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    return Promise.reject("Passwords do not match");
                } else if (value === "") {
                    return Promise.reject("Missing credentials");
                } else {
                    return value;
                };
            }),
    ],
    (req, res) => {
        // === validation error handling ===
        const errors = validationResult(req);
        const error = errors.array().map(error => error.msg);
        if (!errors.isEmpty()) {
            return res.json({ error: error });
        }
        // === user database handling ===
        const { username, email, password } = req.body;
        db.User.findOne({ username: username }, (err, user) => {
            if (err) throw err;
            if (user) {
                return res.json({ error: ["Username already exists"] });
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
    }
);

// Login User
router.post("/login", passport.authenticate("local-login", {
    // === failed login handling ===
    failureRedirect: "/api/users/restricted",
    failureFlash: true
}), (req, res) => {
    // === successful login handling ===
    res.json({ user: req.user, loggedIn: true });
});

// Logout User
router.get("/logout", auth.logout, (req, res, next) => {
    res.json("Logout successful");
});

// Auth route restricted to logged in users only
router.get("/auth", auth.loggedIn, (req, res, next) => {
    res.json({ user: req.user, loggedIn: true });
});

// Restricted route to send unauthorized users
router.get("/restricted", function(req, res) {
    let message = req.flash("error")[0];
    res.json({ message: message || "Login or Signup to save Favorites!" });
});

module.exports = router;