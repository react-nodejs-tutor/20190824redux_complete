import { createAction, handleActions } from 'redux-actions';

// action
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const CHANGE_COLOR = 'counter/CHANGE_COLOR';

// action creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const changeColor = createAction(CHANGE_COLOR, color => color);

const initialState = {
	number: 0,
	color: '#bfcd7e'
};

export default handleActions(
	{
		[INCREMENT]: (state, action) => ({
			...state,
			number: state.number + 1
		}),
		[DECREMENT]: (state, action) => ({
			...state,
			number: state.number - 1
		}),
		[CHANGE_COLOR]: (state, action) => ({
			...state,
			color: action.payload
		})
	},
	initialState
);
