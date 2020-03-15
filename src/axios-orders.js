import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-b8226.firebaseio.com/'
});

export default instance;