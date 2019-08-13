const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
    idArtist: {
        type: String,
        required: true, 
        unique: true
    },
    strArtist: {
        type: String,
        required: true,
        unique: true
    },
    strLabel: String,
    strGenre: String,
    strWebsite: String,
    strFacebook: String,
    strTwitter: String,
    strBiographyEN: String,
    strCountry: String,
    strArtistThumb: String,
    strArtistLogo: String,
    strArtistFanart: String
});

const Favorites = mongoose.model("Favorites", favoritesSchema);

module.exports = Favorites;