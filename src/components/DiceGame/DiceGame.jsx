import React from "react";
import './styles/Normalize.css';
import './styles/DiceGameDesktop.css';
import './styles/DiceGameMobile.css';
import Player from "../Player/Player.component";
import GameBoard from "../GameBoard/GameBoard";

const NUM_OF_PLAYERS = 2;

class DiceGame extends React.Component {
	constructor () {
		super();
		this.state = {
			pointsToWin: 100,
			dices: [5, 5],
			buttonDisabled: false,
			activePlayer: 'player1',
			idlePlayer: 'player2',
			players: {
				player1: {
					id: 1,
					playerName: 'player-1',
					playerColor: '',
					roundScore: 50,
					gameScore: 10,
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

		// ******************************************
		console.log("dice1: ", dice1);
		console.log("dice2: ", dice2);
		console.log("diceSum: ", diceSum);
		console.log("roundScore: ", this.state.players[activePlayer].roundScore);
		console.log("newRoundScore: ", newRoundScore);
// *********************************************
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
		console.log("active player: ", activePlayer);
		console.log(this.state.players[activePlayer]);
		console.log("round score: ", roundScore);
		console.log("game score: ", gameScore);
		console.log("total score: ", total);

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
						...prevState[prevState.idlePlayer],
						isActive: true
					}
				}
			
			}))	
		}
	}

}

export default DiceGame;