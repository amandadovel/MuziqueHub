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
    getSongKickInfo: (artistName) => {
        return axios.get("/api/songkick/search", { params: { artistName }});
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
};