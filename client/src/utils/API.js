import axios from "axios";

export default {
    signup: (signupInfo) => {
        return axios.post("/api/users/signup", signupInfo);
    },
    login: (loginInfo) => {
        return axios.post("/api/users/login", loginInfo);
    },
    logout: () => {
        return axios.get("/api/users/logout");
    },
    isLoggedIn: () => {
        return axios.get("/api/users/favorites");
    },
    getArtistInfo: (artistName) => {
        return axios.get("/api/artist/search", { params: { artistName } });
    }
};