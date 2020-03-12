import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SignOut } from './Auth';
import cookie from 'react-cookies';

import styles from './Form.module.css';
import { Button } from '../styledComponents';
const LoggedIn = () => {
	const history = useHistory();

	const logout = history => {
		SignOut(history);
	};

	return (
		<>
			<h2 className={styles.title}>
				You're <span className={styles.highlightedTitle}>Logged In!</span>
			</h2>

			<div className={styles.btnWrapper}>
				<Link to="/me">
					<Button title="My Profile" />
				</Link>

				<div onClick={() => logout(history)}>
					<Button title="Logout" />
				</div>
			</div>
		</>
	);
};

export default LoggedIn;
