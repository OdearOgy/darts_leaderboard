const host = 'https://pure-thicket-74090.herokuapp.com';

export const hosts = {
	host,
	ApiHost: `${host}/api`,
	UserHost: `${host}/api/user`,
	GameHost: `${host}/api/game`,
};

export const options = {
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
};
