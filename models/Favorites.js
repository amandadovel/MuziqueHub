const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
    artistId: {
        type: String,
        required: true, 
        unique: true
    },
    artistName: {
        type: String,
        required: true,
        unique: true
    },
    label: String,
    genre: String,
    website: String,
    facebook: String,
    twitter: String,
    biographyEN: String,
    country: String,
    artistThumb: String,
    artistLogo: String,
    artistFanart: String
});

const Favorites = mongoose.model("Favorites", favoritesSchema);

module.exports = Favorites;