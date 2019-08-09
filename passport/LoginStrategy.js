const Strategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");


const LoginStrategy = new Strategy((username, password, done) => {

    User.findOne({ username: username }).then((err, user) => {

        if (err) {
            return done(err, null);
        }

        if (!user) {
            return done("Username or Password not valid", null);
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return done("Username or Password not valid", null);
        }

        return done(null, user);
    });

});

module.exports = LoginStrategy;