const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const passport = require("../../passport");
const db = require("../../models");

// Matches with "/api/users/signup"
router.post("/signup",
    [
        check("username")
            .isLength({ min: 5 }).withMessage("Username must be between 5-15 characters"),
        check("email")
            .isEmail().withMessage("Must use a valid email address")
            .custom(async email => {
                const user = await db.User.findOne({ email: email });
                if (user) {
                    return Promise.reject("Email already in use");
                }
            }),
        check("password")
            .isLength(8, 65).withMessage("Password must be between 8-60 characters."),
        // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,"i")
        // .withMessage("Password must include a lowercase, uppercase, number, and a special character."),
        check("passwordConf").custom((value, { req }) => {
            if (value !== req.body.password) {
                return Promise.reject("Passwords do not match.");
            } else {
                return value;
            }
        })
    ],
    (req, res, next) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.array() });
        }
        
        const { username, email, password } = req.body;
        db.User.findOne({ username: username }, (err, user) => {
            if (err) throw err;
            if (user) {
                return res.json("User already exists");
            }  
            if (!user) {
                let newUser = new db.User({
                    username: username,
                    email: email,
                    password: password
                });
                newUser.password = newUser.generateHash(password);
                newUser.save(err => {
                    if (err) throw err;
                    res.redirect(307, "/api/users/login");
                });
            }
        });
    }
);

// Matches with "/api/users/login"
router.post("/login",
    [
        check("username")
            .not().isEmpty().withMessage("Username field cannot be empty."),
        check("password")
            .not().isEmpty().withMessage("Password field cannot be empty.")
    ],
    (req, res, next) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.array() });
        }

        passport.authenticate("local-login", (err, user, info) => {
            if (err) {
                return res.json({
                    message: "Login Auth Err...",
                    error: err || "Internal Server Error",
                    loggedIn: false
                });
            }
            if (user) {
                return res.json({
                    message: "User is now authenticated!!",
                    user: user,
                    loggedIn: true
                });
            }
        })(req, res, next);
    }
);

module.exports = router;