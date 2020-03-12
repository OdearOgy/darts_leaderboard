import React from 'react';

import NotFound from './components/notFound/NotFound';
import {
	LeaderboardPage,
	GamesPage,
	LandingPage,
	LoginPage,
	SignupPage,
	MyProfilePage,
	UserProfilePage,
} from './pages/';

import { Route, Switch, withRouter } from 'react-router-dom';
import { Context } from './components/Context';
import { createResource } from './components/Api';

import Sky from 'react-sky';
import styles from './App.module.css';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const resource = createResource();

function App() {
	return (
		<div className={styles.App}>
			<Context.Provider
				value={{
					resource,
					Loader,
				}}
			>
				<div className={styles.appPage}>
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/signup" component={SignupPage} />
						<Route exact path="/leaderboard" component={LeaderboardPage} />
						<Route exact path="/games" component={GamesPage} />
						<Route exact path="/me" component={MyProfilePage} />
						<Route exact path="user:id" component={UserProfilePage} />
						<Route path="*" component={NotFound} />
					</Switch>
				</div>
			</Context.Provider>

			<Sky
				images={{
					0: 'https://image.flaticon.com/icons/svg/718/718479.svg',
					1: 'https://image.flaticon.com/icons/svg/265/265732.svg',
					2: 'https://image.flaticon.com/icons/svg/1223/1223362.svg',
				}}
				how={150}
				time={50}
				size={50}
				background={'#f4f5f7'}
			/>
		</div>
	);
}

export default withRouter(App);
