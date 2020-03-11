import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
	return (
		<div className={styles.notFound}>
			<h1 className={styles.header}>Err. 404 Not Found</h1>
			<p className={styles.description}>Don't Panic!</p>
			<Link to="/">
				<button className={styles.goBackBtn}>Go Back</button>
			</Link>
		</div>
	);
};

export default NotFound;
