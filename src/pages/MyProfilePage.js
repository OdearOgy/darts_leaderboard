import React, { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../components/Context';
import { UserProfile, Button } from '../components/styledComponents';
export const MyProfilePage = () => {
	const { resource, Loader } = useContext(Context);
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
		</Suspense>
	);
};
