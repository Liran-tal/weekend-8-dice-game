import React from "react";
import './styles/Normalize.css';
import './styles/DiceGameDesktop.css';
import './styles/DiceGameMobile.css';
import Player from "../Player/Player.component";


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
					color: '',
					roundScore: 0,
					gameScore: 0,
					isActive: true,
					isWinner: false
				},
				{
					Id: 2,
					playerName: 'player-2',
					color: '',
					roundScore: 0,
					gameScore: 0,
					isActive: false,
					isWinner: false
				}
			]
		}
	}

	render () {
		return (
			<div className="">
				<Player
					playerName={this.state.playerName}
					roundScore={this.state.roundScore}
					gameScore={this.state.gameScore}
					isActive={this.state.isActive}
					isWinner={this.state.isWinner}
					playerColor={this.state.playerColor}
				>
				</Player>
				Hello from Dice Game
			</div>
		);
	}
}

export default DiceGame;