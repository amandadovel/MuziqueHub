const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: "Favroites"
    }]
});

UserSchema.methods.generateHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

UserSchema.methods.validatePassword = (password, encrypted) => {
    return bcrypt.compareSync(password, encrypted)
}

const User = mongoose.model("User", UserSchema);

module.exports = User;