import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';

import './index.css';
import App from './App';

axios.interceptors.request.use(
	request => {
		console.log(request);
		// here you can work with the request before it is sent on
		return request;
	},
	error => {
		console.log(error);
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	request => {
		console.log(request);
		// here you can work with the request before it is sent on
		return request;
	},
	error => {
		console.log(error);
		return Promise.reject(error);
	}
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
