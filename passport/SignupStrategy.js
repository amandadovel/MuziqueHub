const Strategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy({ usernameField: "email" }, (email, password, done) => {

    console.log("Email: ", email);
    User.findOne({ email: email }), (err, user) => {

        
        if (err) {
            return done(err);
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
            return done(null, inserted);
        });
    };

});

module.exports = SignupStrategy;