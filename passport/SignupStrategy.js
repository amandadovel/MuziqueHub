const Strategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy({ usernameField: "email" }, (email, password, done) => {

    User.findOne({ email: email }).lean().exec((err, user) => {

        if (err) {
            return done(err, null);
        }

        if (user) {
            return done("User already exists", null);
        }

        const encryptedPassword = bcrypt.hashSync(password, salt);
        let newUser = new User({
            email: email,
            password: encryptedPassword
        });

        newUser.save((error, inserted) => {
            if (error) {
                return done(error, null);
            }
            delete inserted.password
            return done(null, inserted);
        });
    });

});

module.exports = SignupStrategy;