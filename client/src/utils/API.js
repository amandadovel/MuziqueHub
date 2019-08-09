import axios from "axios";

export default {
    login: (loginInfo) => {
        return axios.get("/api/users/login", loginInfo);
    },
    signup: (signupInfo) => {
        console.log("Signup Info: ", signupInfo);
        return axios.post("/api/users/signup", signupInfo);
    },
    getArtistInfo: (artistName) => {
        return axios.get("/api/artist/search", { params: { artistName } });
    }
};