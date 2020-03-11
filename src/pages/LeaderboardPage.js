import React, { Suspense, useContext } from 'react';
import Leaderboard from '../components/leaderboard/Leaderboard';
import { Context } from '../components/Context';

export const LeaderboardPage = () => {
	const { resource, Loader } = useContext(Context);
	return (
		<Suspense
			fallback={
				<>
					<Loader type="Oval" color="#292929" width={50} timeout={3000} />
					<h2>So long, thanks for all the fish!</h2>
				</>
			}
		>
			<Leaderboard resource={resource} />
		</Suspense>
	);
};
