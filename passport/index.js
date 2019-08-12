const passport = require("passport");
const LoginStrategy = require("./LoginStrategy");
const db = require("../models");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db.User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use("local-login", LoginStrategy);

module.exports = passport;