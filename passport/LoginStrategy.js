const Strategy = require("passport-local").Strategy;
const db = require("../models");

const LoginStrategy = new Strategy((username, password, done) => {
    db.User.findOne({ username: username }).then((user, err) => {
        if (err) {
            return done(err, null);
        }

        if (!user) {
            return done("Username or Password not valid", null);
        }

        if (!user.validatePassword(password, user.password)) {
            return done("Username or Password not valid", null);
        }
        delete user.password;
        return done(null, user);
    });  
});

module.exports = LoginStrategy;