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

	render () {
		return (
			<div className="">
				
			</div>
		);
	}
}

export default Player;