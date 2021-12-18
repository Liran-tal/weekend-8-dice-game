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
			dices: [5, 5],
			gameOver: false,
			players: {
				player1: {
					playerName: 'player-1',
					playerColor: '',
					roundScore: 50,
					gameScore: 10,
					combinedScore: 0,
					isActive: true,
					isWinner: false
				},
				player2: {
					playerName: 'player-2',
					color: '',
					roundScore: 0,
					gameScore: 0,
					combinedScore: 0,
					isActive: false,
					isWinner: false
				}
			}
		}
	}
	
	render () {
		return (
			<div className="">
				Hello from Dice Game
				<Player
					data={this.state.players.player1}
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
		console.log(target);
		switch (target.value) {
			case 'new':
				this.startNewGame();
				break;
			case 'roll':
				this.rollDices();
				if ((this.state.dices[0] + this.state.dices[1]) !== 7) {
					break;
				}
				else {
					this.setState({roundScore: 0});
				}
			case 'hold':
				this.holdTurn();
				break;
			default:
				break;
		}
	}

	startNewGame = () => {
		console.log("hello from new");
		this.setState((prevState) => ({
			dices: [null, null],
			gameOver: false,
			
			players: {
				...prevState.players,
				player1: {
					...prevState.players.player1,
					roundScore: 0,
					gameScore: 0,
					isActive: true,
					isWinner: false
				},
				player1: {
					...prevState.players.player2,
					roundScore: 0,
					gameScore: 0,
					isActive: false,
					isWinner: false
				}
			}
		}), () => console.log(this.state))
		// return	this.setState({dices: [1, 1]}, () => console.log(this.state));
	}

	// rollDices = () => {
	// 	this.setState((prev) => {
	// 		prev.dices[0] = Math.floor(Math.random * 6)
	// 		prev.dices[1] = Math.floor(Math.random * 6)
	// 		if ((prev.dices[0] + prev.dices[1]) !== 7) {
	// 			const active = this.prev.players.find((player) => {
	// 				return player.isActive;
	// 			})
				
	// 		}
			
	// 	})
// 	}
}

export default DiceGame;