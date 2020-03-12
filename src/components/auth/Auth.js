import cookie from 'react-cookies';

export const SignOut = history => {
	cookie.remove('authToken', { path: '/' });
	history.push('/');
};
