import React from 'react';
import styles from './UserProfile.module.css';
export const UserProfile = ({ resource }) => {
	const profile = resource.read();
	console.log(profile);
	const { name, email, score } = profile;
	return (
		<div className={styles.user}>
			<div className={styles.avatar} data-letter={name[0]}></div>
			<div className={styles.info}>
				<h2 className={styles.name}>{name}</h2>
				<p className={styles.email}>{email}</p>
				<p className={styles.score}>Darts score: {score}</p>
			</div>
		</div>
	);
};
