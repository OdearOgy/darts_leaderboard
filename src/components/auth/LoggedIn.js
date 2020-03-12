import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import cookie from 'react-cookies';

import styles from './Form.module.css';

const LoggedIn = () => {
	const history = useHistory();

	const handleLogout = () => {
		cookie.remove('authToken', { path: '/' });
		history.push('/');
	};

	return (
		<>
			<h2 className={styles.title}>
				You're <span className={styles.highlightedTitle}>Logged In!</span>
			</h2>

			<div className={styles.btnWrapper}>
				<button className={styles.submit} onClick={() => history.push('/api/me')}>
					My Profile
				</button>

				<button className={styles.submit} onClick={handleLogout}>
					logout
				</button>
			</div>
		</>
	);
};

export default LoggedIn;
