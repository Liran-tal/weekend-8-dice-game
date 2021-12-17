import React from "react";
import './Player.component.css';

class Player extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			playerName: this.props.playerName,
			roundScore: this.props.roundScore,
			gameScore: this.props.gameScore,
			isActive: this.props.isActive,
			isWinner: this.props.isWinner,
			playerColor: this.props.playerColor,
		}
	}

	playerStatus = (use) => {
		if (this.state.isActive) {
			return (
				use === "text" 
					? 'Your turn!'
					: 'player-active'
			);
		};
		if (this.state.isWinner) {
			return (
				use === "text" 
					? 'WINNER!!!'
					: "player-winner"
			);
		};

		return '';
	}

	render () {
		return (
			<section className="player-container">
				hello from player
				<div 
					className="player-name" 
					style={
						{backgroundColor: this.state.playerColor}
					}
				>
					{this.state.playerName}
				</div>
				<div className={this.playerStatus("style")}>
					{this.playerStatus("text")}
				</div>
				<div className="player-game-score-wrapper">
					<div className="player-game-score-header">
						SCORE
					</div>
					<div 
						className="player-game-score"
						style={
							{backgroundColor: this.state.playerColor}
						}
					>
						{this.state.gameScore}
					</div>
				</div>
				<div className="player-round-score-wrapper">
					<div className="player-round-score-header">
						ROUND SCORE
					</div>
					<div 
						className="player-round-score"
						style={
							{backgroundColor: this.state.playerColor}
						}
					>
						{this.state.roundScore}
					</div>
				</div>
			</section>
		);
	}
}

export default Player;