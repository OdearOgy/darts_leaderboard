const host = 'https://pure-thicket-74090.herokuapp.com';
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const hosts = {
	host,
	ApiHost: `${host}/api`,
	UserHost: `${host}/api/user`,
	GameHost: `${host}/api/game`,
};

const options = {
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
};

const body = {
	client_id: clientId,
	client_secret: clientSecret,
};

export { hosts, body, options };
