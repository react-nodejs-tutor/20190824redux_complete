import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
	handleIncrement = e => {
		this.props.onIncrement();
	};

	handleDecrement = e => {
		this.props.onDecrement();
	};

	render() {
		const { number, color } = this.props;

		const style = {
			color
		};

		return (
			<div className="Counter">
				<h1 style={style}>{number}</h1>
				<div className="btn-wrapper">
					<button onClick={this.handleIncrement}>+</button>
					<button onClick={this.handleDecrement}>-</button>
				</div>
			</div>
		);
	}
}

export default Counter;
