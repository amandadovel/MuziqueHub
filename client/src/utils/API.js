import axios from "axios";

export default {
    // === user signup route ===
    signup: (signupInfo) => {
        return axios.post("/api/users/signup", signupInfo);
    },
    // === user login route ===
    login: (loginInfo) => {
        return axios.post("/api/users/login", loginInfo);
    },
    // === user logout route ===
    logout: () => {
        return axios.get("/api/users/logout");
    },
    // === restricted to logged in users only ===
    isLoggedIn: () => {
        return axios.get("/api/users/auth");
    },
    // === send params to retrieve data from theaudiodb api ===
    getArtistInfo: (artistName) => {
        return axios.get("/api/artist/search", { params: { artistName } });
    },
    // === send params to retrieve data from songkick api ===
    songkickArtistSearch: (artistName) => {
        return axios.get("/api/songkick/search", { params: { artistName }});
    },
    songkickLocationSearch: (location) => {
        return axios.get("/api/songkick/location", { params: { location }});
    },
    // === get all favorites from database ===
    findAllFavorites: () => {
        return axios.get("/api/favorites");
    },
    // === save favorite to user in database
    saveFavorite: (artistData) => {
        return axios.post("/api/favorites", artistData);
    },
    // === delete favorite from user in database
    deleteFavorite: (favoriteData) => {
        return axios.post("/api/favorites/delete", favoriteData);
    },
    // === clear all favorites from user in database
    clearFavorites: () => {
        return axios.get("/api/favorites/clear");
    },
};