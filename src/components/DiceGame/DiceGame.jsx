import React from "react";
import './styles/Normalize.css';
import './styles/DiceGameDesktop.css';
import './styles/DiceGameMobile.css';

class DiceGame extends React.Component {
	constructor () {
		super();
		this.state = {
			pointsToWin: 100,
			dices: [null, null],
			gameOver: false,
			Players: [
				{
					Id: 1,
					name: 'player-1',
					currentScore: 0,
					sumScore: 0,
					isActive: false,
					isWinner: false
				},
				{
					Id: 2,
					name: 'player-2',
					currentScore: 0,
					sumScore: 0,
					isActive: false,
					isWinner: false
				}
			]
		}
	}

	render () {
		return (
			<div className="">
				Hello from Dice Game
			</div>
		);
	}
}

export default DiceGame;