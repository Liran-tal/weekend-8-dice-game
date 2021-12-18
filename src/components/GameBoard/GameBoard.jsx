import React from "react";
import './GameBoardDesktop.css';
import './GameBoardMobile.css';
import dice1 from "../../assets/images/dice/dice-1.png";
import dice2 from "../../assets/images/dice/dice-2.png";
import dice3 from "../../assets/images/dice/dice-3.png";
import dice4 from "../../assets/images/dice/dice-4.png";
import dice5 from "../../assets/images/dice/dice-5.png";
import dice6 from "../../assets/images/dice/dice-6.png";

const diceImages = [
	dice1,
	dice2,
	dice3,
	dice4,
	dice5,
	dice6,
];

class GameBoard extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		console.log("gameboard props: ", this.props);
		return (
			<section className="game-board-container flex-col">
				<button 
					className="game-board-new-game-btn game-board-button flex-row"
					onClick={this.props.onClick}
					value="new"
				>
					<span>&#x2022;</span> Start New Game <span>&#x2022;</span>
				</button>
				<div className="game-board-dices-wrapper flex-row">
					{this.props.dices[0] && <img 
						className="game-board-dice"
						src={diceImages[this.props.dices[0]]} 
						alt="Score on dice" 
					/>}
					{this.props.dices[0] && <img 
						className="game-board-dice"
						src={diceImages[this.props.dices[1]]} 
						alt="Score on dice"
					/>}
				</div>
				<div className="game-board-func-btns-wrapper flex-col">
					<button 
						className="game-board-roll-btn game-board-button flex-row"
						onClick={this.props.onClick}
						value="roll"
						disabled={this.props.buttonDisabled}
					>
						<span>&#x2022;</span> Roll Dices <span>&#x2022;</span>
					</button>
					<button 
						className="game-board-hold-btn game-board-button flex-row"
						onClick={this.props.onClick}
						value="hold"
						disabled={this.props.buttonDisabled}
					>
						<span>&#x2022;</span> Hold Your Turn <span>&#x2022;</span>
					</button>
				</div>
				<div className="game-board-points-to-win-wrapper flex-col">
					<div className="game-board-points-to-win-header">
						Points to Win
					</div>
					<div className="game-board-points-to-win-text">
						{this.props.pointsToWin}
					</div>
				</div>
			</section>
		);
	}
}

export default GameBoard;