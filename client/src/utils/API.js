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
    // === user favorites route ===
    // === restricted to logged in users only ===
    isLoggedIn: () => {
        return axios.get("/api/users/favorites");
    },
    // === send params to retrieve data from theaudiodb api ===
    getArtistInfo: (artistName) => {
        return axios.get("/api/artist/search", { params: { artistName } });
    },
    // === save artist to database
    saveArtist: (artistData) => {
        return axios.post("/api/artist", artistData);
    },
    // === get all favorites from database ===
    getFavorites: () => {
        return axios.get("/api/favorites/all")
    },
    // === send params to retrieve data from songkick api ===
    getSongKickInfo: (artistName) => {
        return axios.get("/api/songkick/search", { params: { artistName }});
    },
};