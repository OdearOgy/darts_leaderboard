import React, { Suspense } from 'react';
import Games from '../components/games/Games';
import { createResource } from '../components/Api';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const resource = createResource();

export const GamesPage = () => (
	<Suspense fallback={<Loader type="Oval" color="#292929" width={50} timeout={3000} />}>
		<Games resource={resource} />
	</Suspense>
);
