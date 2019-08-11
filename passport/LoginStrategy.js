const Strategy = require("passport-local").Strategy;
const db = require("../models");

const LoginStrategy = new Strategy( (username, password, done) => {
    db.User.findOne({ username: username }).then((user, err) => {
        if (err) {
            return done(err, null);
        }
        if (!user) {
            return done(null, false, { message: "Username or Password not valid" });
        }
        if (!user.validatePassword(password, user.password)) {
            return done(null, false, { message: "Username or Password not valid" });
        }
        return done(null, user);
    });  
});

module.exports = LoginStrategy;