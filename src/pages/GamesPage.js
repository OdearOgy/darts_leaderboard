import React, { Suspense, useContext } from 'react';
import Games from '../components/games/Games';
import { Context } from '../components/Context';

export const GamesPage = () => {
	const { resource, Loader } = useContext(Context);

	return (
		<Suspense fallback={<Loader type="Oval" color="#292929" width={50} timeout={3000} />}>
			<Games resource={resource} />
		</Suspense>
	);
};
