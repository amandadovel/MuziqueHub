const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    idArtist: {type: String, required: true, unique: true},
    strArtist: {type: String, required: true, unique: true},
    strLabel: {type: String},
    strGenre: {type: String},
    strWebsite: {type: String},
    strFacebook: {type: String},
    strTwitter: {type: String},
    strBiographyEN: {type: String},
    strCountry: {type: String},
    strArtistThumb: {type: String},
    strArtistLogo: {type: String},
    strArtistFanart: {type: String}
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;