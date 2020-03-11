import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Landing.module.css';

const Landing = () => {
	return (
		<div className={styles.landing}>
			<h1 className={styles.title}>Hello Dear!</h1>

			<p className={styles.greeting}>Welcome to the Devolon's Dart Leaderboard</p>
			<p className={styles.info}>You can explore the following links</p>

			<div className={styles.links}>
				<Link to="/leaderboard">
					<button className={styles.linkBtns}>Leaderboard</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
