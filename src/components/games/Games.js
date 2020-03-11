import React from 'react';

const Games = ({ resource }) => {
	const games = resource.games.read();

	return (
		<div>
			{games.map(game => (
				<p key={game.id}>
					game: {game.id}
					<br />
					score: {game.target_score}
				</p>
			))}
		</div>
	);
};

export default Games;
