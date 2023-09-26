import axios from 'axios';  

const KEY='AIzaSyBWbQbxhwh_DibQKI6q1Y0TZtigg_St1oM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});