const passport = require("passport");
const LoginStrategy = require("./LoginStrategy");
const User = require("../models/User");


passport.serializeUser((user, done) => {
    console.log('*** SerializeUser called, user: ')
    done(null, { _id: user.id } );
});

passport.deserializeUser((id, done) => {
    console.log('*** DeserializeUser called, user: ')
    User.findOne(id, function(err, user) {
        done(err, user);
    });
});

passport.use("local-login", LoginStrategy);

module.exports = passport;