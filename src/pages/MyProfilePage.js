import React, { Suspense, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SignOut } from '../components/auth';
import { Context } from '../components/Context';
import { UserProfile, Button } from '../components/styledComponents';
export const MyProfilePage = () => {
	const { resource, Loader } = useContext(Context);
	const history = useHistory();

	const logout = history => {
		SignOut(history);
	};

	return (
		<Suspense
			fallback={
				<>
					<Loader type="Oval" color="#292929" width={50} timeout={3000} />
					<h2>So long, and thanks for all the fish!</h2>
				</>
			}
		>
			<UserProfile resource={resource} user="me" />
			<Link to="/">
				<Button title="Go Back" />
			</Link>
			<div onClick={() => logout(history)}>
				<Button title="Logout" />
			</div>
		</Suspense>
	);
};
