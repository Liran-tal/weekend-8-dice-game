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
			buttonDisabled: false,
			activePlayer: 'player1',
			idlePlayer: 'player2',
			players: {
				player1: {
					id: 1,
					playerName: 'player-1',
					playerColor: '',
					roundScore: 0,
					gameScore: 0,
					combinedScore: 0,
					isActive: true,
					isWinner: false
				},
				player2: {
					id: 2, 
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
		console.log("Hello from Dice Game");
		return (
			<div className="">
				<Player
					data={this.state.players.player1}
				/>
				<GameBoard
					dices={this.state.dices}
					pointsToWin={this.state.pointsToWin}
					onClick={this.onClick}
				/>
				<Player
					data={this.state.players.player2}
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
					break;
			case 'hold':
				this.holdTurn();
				break;
			default:
				break;
		}
	}

	startNewGame = () => {
		this.setState((prevState) => ({
			dices: [null, null],
			gameOver: false,
			
			players: {
				...prevState.players,
				player1: {
					...prevState.players.player1,
					gameScore: 0,
					roundScore: 0,
					combinedScore: 0,
					isActive: true,
					isWinner: false
				},
				player2: {
					...prevState.players.player2,
					gameScore: 0,
					roundScore: 0,
					combinedScore: 0,
					isActive: false,
					isWinner: false
				}
			}
		}))
	}

	rollDices = () => {
		console.log("hello from rollDices");
		const activePlayer = this.state.activePlayer;
		const dice1 = Math.floor(Math.random() * 6 + 1);
		const dice2 = Math.floor(Math.random() * 6 + 1);
		const diceSum = dice1 + dice2;
		const newRoundScore = this.state.players[activePlayer].roundScore + diceSum;
		const gameScore = this.state.players[activePlayer].gameScore;

		this.setState({dices: [dice1 - 1, dice2 - 1]});
		
		if ((diceSum) === 7) {
			this.setState((prevState) => ({
				players: {
					...prevState.players,
					[activePlayer]: {
						...prevState.players[activePlayer],
						roundScore: 0
					}
				}
			}), () => {this.holdTurn()});
		}
		else {
			this.setState((prevState) => ({
				players: {
					...prevState.players,
					[activePlayer]: {
						...prevState.players[activePlayer],
						roundScore: newRoundScore,
						combinedScore: newRoundScore + gameScore
					}
				}
			}))
		}
	}

	holdTurn = () => {
		const activePlayer = this.state.activePlayer;
		const roundScore = this.state.players[activePlayer].roundScore;
		const gameScore = this.state.players[activePlayer].gameScore;
		const total = roundScore + gameScore;

		if (total >= this.state.pointsToWin) {
			this.setState((prevState) => ({
				...prevState,
				buttonDisabled: true,
				players: {
					...prevState.players,
					[activePlayer]: {
						...prevState.players[activePlayer],
						roundScore: 0,
						isWinner: true
					}
				}
			}))
		}
		else {
			this.setState((prevState) => ({
				...prevState,
				activePlayer: prevState.activePlayer === 'player1' ? 'player2' : 'player1',
				idlePlayer: prevState.idlePlayer === 'player1' ? 'player2' : 'player1',
				players: {
					...prevState.players,
					[activePlayer]: {
						...prevState.players[activePlayer],
						gameScore: total,
						roundScore: 0,
						combinedScore: 0,
						isActive: false,
					},
					[prevState.idlePlayer]: {
						...prevState.players[prevState.idlePlayer],
						isActive: true
					}
				}
			}))	
		}
	}

}

export default DiceGame;