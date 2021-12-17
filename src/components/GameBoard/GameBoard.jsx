import React from "react";
import './GameBoard.css';

class GameBoard extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			dices: this.props.dices,
			pointsToWin: this.props.pointsToWin
		}
	}

	diceImages = [
		"../../assets/images/dice/dice-1.png",
		"../../assets/images/dice/dice-2.png",
		"../../assets/images/dice/dice-3.png",
		"../../assets/images/dice/dice-4.png",
		"../../assets/images/dice/dice-5.png",
		"../../assets/images/dice/dice-6.png",
	]
	render () {
		return (
			<section className="game-board-container">
				Hello from game board
				<button 
					className="game-board-new-game-btn"
					onClick={this.props.onClick}
				>
					Start New Game
				</button>
				<div className="game-board-dices-wrapper">
					<img 
						className="game-board-dice"
						src={this.diceImages[this.state.dices[0]]} 
						alt="Score on dice" 
					/>
					<img 
						className="game-board-dice"
						src={this.diceImages[this.state.dices[1]]} 
						alt="Score on dice" 
					/>
					<div>{this.state.dices[0]}</div>
					<div>{this.state.dices[1]}</div>
				</div>
				<div className="game-board-func-btns-wrapper">
					<button 
						className="game-board-roll-btn"
						onClick={this.props.onClick}
					>
						Roll Dices
					</button>
					<button 
						className="game-board-hold-btn"
						onClick={this.props.onClick}
					>
						Hold Your Turn
					</button>
				</div>
				<div className="game-board-points-to-win-wrapper">
					<div className="game-board-points-to-win-text">
						{this.state.pointsToWin}
					</div>
					<div className="game-board-points-to-win-header">
						Points to Win
					</div>
				</div>
			</section>
		);
	}
}

export default GameBoard;