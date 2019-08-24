import React, { Component } from 'react';
import ListItem from './ListItem';
import './ColorList.css';

class ColorList extends Component {
	handleChange = e => {
		const { value } = e.target;
		const { ColorListActions } = this.props;
		ColorListActions.changeInput(value);
	};

	handleSubmit = e => {
		e.preventDefault();
		const { input, ColorListActions, CounterActions } = this.props;
		ColorListActions.insert(input);
		CounterActions.changeColor(input);
		ColorListActions.changeInput('');
	};

	handleUpdate = id => {
		const { ColorListActions } = this.props;
		ColorListActions.update(id);
	};

	handleRemove = id => {
		const { ColorListActions } = this.props;
		ColorListActions.remove(id);
	};

	render() {
		const { list, input } = this.props;

		return (
			<div>
				<form className="ColorList" onSubmit={this.handleSubmit}>
					<input
						placeholder="원하는 색을 입력하세요"
						value={input}
						onChange={this.handleChange}
					/>
				</form>
				{list.map(item => {
					return (
						<ListItem
							key={item.id}
							item={item}
							style={{
								backgroundColor: item.color,
								opacity: item.opacity,
								width: '50px',
								height: '50px',
								float: 'left'
							}}
							onUpdate={this.handleUpdate}
							onRemove={this.handleRemove}
						/>
					);
				})}
			</div>
		);
	}
}

export default ColorList;
