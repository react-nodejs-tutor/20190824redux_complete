import React, { Component } from 'react';
import Counter from '../components/Counter';
import * as counterActions from '../store/modules/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
	render() {
		const { number, CounterActions, color } = this.props;
		return (
			<Counter
				number={number}
				onIncrement={CounterActions.increment}
				onDecrement={CounterActions.decrement}
				color={color}
			/>
		);
	}
}

const mapStateToProps = state => ({
	number: state.counter.number,
	color: state.counter.color
});

const mapDispatchToProps = dispatch => ({
	CounterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterContainer);
