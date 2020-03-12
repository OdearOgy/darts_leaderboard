import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import cookie from 'react-cookies';
import useForm from '../../shared/hooks/useForm';
import { hosts, options } from '../../shared/constants/Settings';
import LoggedIn from './LoggedIn';
import { Button } from '../styledComponents';
import styles from './Form.module.css';

const types = {
	pass: 'password',
	eml: 'email',
	name: 'name',
};

export const Signup = () => {
	const history = useHistory();
	const signup = e => {
		e.preventDefault();
		const { UserHost } = hosts;
		const url = UserHost;
		const { email, password, name } = e.target;

		options['body'] = JSON.stringify({
			email: `${email.value}`,
			password: `${password.value}`,
			name: `${name.value}`,
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
			name: '',
		},
		signup
	);

	return (
		<div className={styles.formWrapper}>
			{!cookie.load('authToken') ? (
				<>
					<h2 className={styles.title}>
						SIGNUP or <Link to="/login">SIGNIN</Link>
					</h2>
					<form className={styles.form} onSubmit={signup}>
						<label className={styles.label}>
							<span className={styles.labelText}>Email</span>
							<input
								className={styles.input}
								onChange={handleChange}
								name={types.eml}
								type={types.eml}
								value={values.email}
								placeholder={`Your ${types.eml}`}
								required={true}
							/>
						</label>

						<label className={styles.label}>
							<span className={styles.labelText}>Name</span>
							<input
								className={styles.input}
								onChange={handleChange}
								name={types.name}
								type="text"
								value={values.name}
								placeholder={`Your ${types.name}`}
								required={true}
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
								required={true}
							/>
						</label>
						<Button title="Signup" type="submit" />
					</form>
				</>
			) : (
				<LoggedIn />
			)}
		</div>
	);
};
