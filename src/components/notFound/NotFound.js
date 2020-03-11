import React from 'react';
import styles from './NotFound.module.css';

const NotFound = ({ history }) => {
	return (
		<div className={styles.notFound}>
			<h1 className={styles.header}>Err. 404 Not Found</h1>
			<p className={styles.description}>Don't Panic!</p>

			<button className={styles.goBackBtn} onClick={history.goBack}>
				Go Back
			</button>
		</div>
	);
};

export default NotFound;
