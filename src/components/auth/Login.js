import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import cookie from 'react-cookies';
import useForm from '../../shared/hooks/useForm';
import { hosts, options, body } from '../../shared/constants/Settings';
import LoggedIn from './LoggedIn';
import { Button } from '../styledComponents';
import styles from './Form.module.css';

const types = {
	pass: 'password',
	eml: 'email',
};

export const Login = () => {
	const history = useHistory();

	const login = e => {
		e.preventDefault();
		const { host } = hosts;
		const url = `${host}/oauth/token`;
		const { email, password } = e.target;
		options['body'] = JSON.stringify({
			client_id: body['client_id'],
			client_secret: body['client_secret'],
			grant_type: 'password',
			username: email.value,
			password: password.value,
		});
		options['method'] = 'POST';

		fetch(url, options)
			.then(res => res.json())
			.then(res => {
				cookie.save('authToken', res['access_token'], { path: '/' });
				history.push('/');
			});
	};
	const { values, handleChange } = useForm(
		{
			email: '',
			password: '',
		},
		login
	);

	return (
		<div className={styles.formWrapper}>
			{!cookie.load('authToken') ? (
				<>
					<h2 className={styles.title}>
						SIGNIN or{' '}
						<Link className={styles.highlightedTitle} to="/signup">
							SIGNUP
						</Link>
					</h2>

					<form className={styles.form} onSubmit={login}>
						<label className={styles.label}>
							<span className={styles.labelText}>Email</span>
							<input
								className={styles.input}
								onChange={handleChange}
								name={types.eml}
								type={types.eml}
								value={values.email}
								placeholder={`Your ${types.eml}`}
							/>
						</label>

						<label className={styles.label}>
							<span className={styles.labelText}>Password</span>
							<input
								className={styles.input}
								onChange={handleChange}
								name={types.pass}
								type={types.pass}
								value={values.password}
								placeholder={`Your ${types.pass}`}
							/>
						</label>

						<Button title="Login" type="submit" />
					</form>
				</>
			) : (
				<LoggedIn />
			)}
		</div>
	);
};
