import React from "react";
import './Player.componentDesktop.css';
import './Player.componentMobile.css';


class Player extends React.Component {
	constructor (props) {
		super(props);
	}

	playerStatus = (use) => {
		if (this.props.data.isActive) {
			return (
				use === "text" 
					? 'Your turn!'
					: 'player-active'
			);
		};
		if (this.props.data.isWinner) {
			return (
				use === "text" 
					? 'WINNER!!!'
					: "player-winner"
			);
		};

		return '';
	}

	render () {
		console.log("player props: ", this.props);
		return (
			<section className="player-container flex-col">
				<div 
					className="player-name" 
					style={
						{backgroundColor: this.props.data.playerColor}
					}
				>
					{this.props.data.playerName}
				</div>
				<div className={this.playerStatus("style")}>
					{this.playerStatus("text")}
				</div>
				<div className="player-game-score-wrapper flex-col">
					<div className="player-game-score-header">
						SCORE
					</div>
					<div 
						className="player-game-score"
						style={
							{backgroundColor: this.props.data.playerColor}
						}
					>
						{`${this.props.data.gameScore} \n\n [${this.props.data.combinedScore}]`}
					</div>
				</div>
				<div className="player-round-score-wrapper flex-col">
					<div className="player-round-score-header">
						ROUND SCORE
					</div>
					<div 
						className="player-round-score"
						style={
							{backgroundColor: this.props.data.playerColor}
						}
					>
						{this.props.data.roundScore}
					</div>
				</div>
			</section>
		);
	}
}

export default Player;