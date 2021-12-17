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
			dices: [null, null],
			gameOver: false,
			players: [
				{
					id: 0,
					playerName: 'player-1',
					color: '',
					roundScore: 0,
					gameScore: 0,
					combinedScore: 0,
					isActive: true,
					isWinner: false
				},
				{
					id: 1,
					playerName: 'player-2',
					color: '',
					roundScore: 0,
					gameScore: 0,
					combinedScore: 0,
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
	
	onClick = ({target}) => {
		switch (target.value) {
			case 'new':
				this.startNewGame();
				break;
			case 'roll':
				this.rollDices();
				break;
			case 'hold':
				this.holdTurn();
				break;
		}
	}

	startNewGame = () => {
		this.setState({
			pointsToWin: 100,
			dices: [null, null],
			gameOver: false,
			players: [
				{
					id: 1,
					roundScore: 0,
					gameScore: 0,
					isActive: true,
					isWinner: false
				},
				{
					id: 2,
					roundScore: 0,
					gameScore: 0,
					isActive: false,
					isWinner: false
				}
			]
		})
	}

	rollDices = () => {
		const combined_score = 0;
		// Try foreach once, if doesnt work, change to regular setState
		this.setState((prev) => {
			return this.prev.dices.forEach((dice) => {
				prev.dice = Math.floor(Math.random * 6);
				combined_score += prev.dice;
			})
		})

		this.setState((prev) => {
			const active = this.prev.players.find((player) => {
				return player.isActive;
			})
				
				return active.combinedScore = combined_score;
		})
	}
}

export default DiceGame;