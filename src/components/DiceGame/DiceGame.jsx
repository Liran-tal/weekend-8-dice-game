import React from "react";
import './styles/Normalize.css';
import './styles/DiceGameDesktop.css';
import './styles/DiceGameMobile.css';
import Player from "../Player/Player.component";
import GameBoard from "../GameBoard/GameBoard";


class DiceGame extends React.Component {
	constructor () {
		super();
		this.state = {
			pointsToWin: 100,
			// dices: [null, null],
			dices: [5, 1],
			gameOver: false,
			players: [
				{
					id: 1,
					playerName: 'player-1',
					color: '',
					roundScore: 0,
					gameScore: 0,
					isActive: true,
					isWinner: false
				},
				{
					id: 2,
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
				Hello from Dice Game
				<Player
					playerName={this.state.players[0].playerName}
					roundScore={this.state.players[0].roundScore}
					gameScore={this.state.players[0].gameScore}
					isActive={this.state.players[0].isActive}
					isWinner={this.state.players[0].isWinner}
					playerColor={this.state.players[0].playerColor}
				/>
				<GameBoard
					dices={this.state.dices}
					pointsToWin={this.state.pointsToWin}
					onClick={this.onClick}
				/>
			</div>
		);
	}
}

export default DiceGame;