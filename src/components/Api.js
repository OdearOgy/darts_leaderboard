import { hosts, options } from '../shared/constants/Settings';
import cookie from 'react-cookies';
const { ApiHost, UserHost, GameHost } = hosts;

const fetchUsers = () => {
	const url = `${UserHost}`;

	return fetch(url, options)
		.then(res => res.json())
		.then(res => res.data);
};

const fetchGames = () => {
	const url = `${GameHost}`;

	return fetch(url, options)
		.then(res => res.json())
		.then(res => res.data);
};

// const fetchUser = () => {
// 	const url = `${UserHost}`;
// 	return url;
// };

const fetchMyProfile = () => {
	const url = `${ApiHost}/me`;
	options['mehtod'] = 'GET';
	options['headers']['Authorization'] = `Bearer ${cookie.load('authToken')}`;
	return fetch(url, options)
		.then(res => res.json())
		.then(res => {
			cookie.save('loggedInUser', res, { path: '/' });
			return res;
		});
};

export const wrapPromise = promise => {
	let status = 'pending';
	let result = '';

	let suspender = promise.then(
		res => {
			status = 'success';
			result = res;
		},
		err => {
			status = 'error';
			result = err;
		}
	);

	return {
		read() {
			if (status === 'pending') {
				throw suspender;
			} else if (status === 'error') {
				throw result;
			}

			return result;
		},
	};
};

export const createResource = () => {
	return {
		users: wrapPromise(fetchUsers()),
		games: wrapPromise(fetchGames()),
		// user: wrapPromise(fetchUser()),
		myProfile: wrapPromise(fetchMyProfile()),
	};
};
