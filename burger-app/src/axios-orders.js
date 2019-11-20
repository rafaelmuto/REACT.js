import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://reactburger-fe2cf.firebaseio.com/'
});

export default instance;
