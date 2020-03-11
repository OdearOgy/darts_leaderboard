import React, { Suspense } from 'react';
import Leaderboard from '../components/leaderboard/Leaderboard';
import { createResource } from '../components/Api';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const resource = createResource();

export const LeaderboardPage = () => (
	<Suspense fallback={<Loader type="Oval" color="#292929" width={50} timeout={3000} />}>
		<Leaderboard resource={resource} />
	</Suspense>
);
