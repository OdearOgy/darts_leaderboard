import React, { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../components/Context';
import { UserProfile, Button } from '../components/styledComponents';
import wrapPromise, { fetchUser } from '../components/Api';

export const UserProfilePage = ({ match }) => {
	const { Loader } = useContext(Context);
	const { id } = match.params;
	const resource = wrapPromise(fetchUser(id));

	return (
		<Suspense
			fallback={
				<>
					<Loader type="Oval" color="#292929" width={50} timeout={3000} />
					<h2>So long, and thanks for all the fish!</h2>
				</>
			}
		>
			<UserProfile resource={resource} />
			<Link to="/">
				<Button title="Go Back" />
			</Link>
		</Suspense>
	);
};
