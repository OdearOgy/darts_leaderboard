import React from 'react';

import Sky from 'react-sky';
import './App.css';

import NotFound from './components/notFound/NotFound';
import { LeaderboardPage, GamesPage, LandingPage } from './pages/';

import { Route, Switch } from 'react-router-dom';

function App() {
	console.log(LeaderboardPage);
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/leaderboard" component={LeaderboardPage} />
				<Route exact path="/games" component={GamesPage} />
				<Route path="" />
				<Route path="*" component={NotFound} />
			</Switch>

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

export default App;
