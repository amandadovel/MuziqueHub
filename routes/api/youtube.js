import axios from 'axios';
const KEY = 'AIzaSyCF_T-A_YOPyj_MX9jt9GvCHxHRVHLieGQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})