import axios from 'axios';

const KEY = 'AIzaSyAhMO-g7AYD9_jKiye_6njlf7EpWiTYgVg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
