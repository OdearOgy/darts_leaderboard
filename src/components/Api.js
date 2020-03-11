import { hosts, options } from '../shared/constants/Settings';

const { UserHost, GameHost } = hosts;

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
	};
};
