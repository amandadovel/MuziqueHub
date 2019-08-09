const passport = require("passport");
const LoginStrategy = require("./LoginStrategy");
const db = require("../models");

passport.serializeUser((user, done) => {
    done(null, { _id: user.id } );
});

passport.deserializeUser((id, done) => {
    db.User.findOne(id, function(err, user) {
        done(err, user);
    });
});

passport.use("local-login", LoginStrategy);

module.exports = passport;