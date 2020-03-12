import React from 'react';
import styles from './Button.module.css';
export const Button = ({ title }) => {
	return <button className={styles.button}>{title}</button>;
};
