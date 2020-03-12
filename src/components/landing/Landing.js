import React from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

import styles from './Landing.module.css';
import { Button } from '../styledComponents';
const Landing = () => {
	return (
		<div className={styles.landing}>
			<h1 className={styles.title}>Hello Dear!</h1>

			<p className={styles.greeting}>Welcome to the Devolon's Dart Leaderboard</p>
			<p className={styles.info}>You can explore the following links</p>

			<div className={styles.links}>
				<Link to="/leaderboard">
					<Button title="Leaderboard" />
				</Link>

				{!cookie.load('authToken') ? (
					<Link to="/login">
						<Button title="Login" />
					</Link>
				) : (
					<>
						<Link to="/games">
							<Button title="Games" />
						</Link>
						<Link to="/me">
							<Button title="My Profile" />
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Landing;
