import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Leaderboard.module.css';

const Leaderboard = ({ resource }) => {
	const users = resource.users.read().sort((a, b) => (a.score ? -1 : b.score ? 1 : 0));
	return (
		<div className={styles.leaderboard}>
			{users.map((user, index) => (
				<Link to={`user/${user.id}`} params={{ user_id: user.id }} key={user.id}>
					<div className={styles.user}>
						<p className={styles.userPosition}>{index + 1}. </p>
						<div className={styles.userImg} data-letter={user.name[0]}></div>
						<div className={styles.userInfo}>
							<h3 className={styles.name}>{user.email}</h3>
							<p className={styles.stats}>{user.score}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Leaderboard;
