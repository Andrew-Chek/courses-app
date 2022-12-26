import { SAVE_AUTHOR, GET_AUTHORS, UPDATE_AUTHOR } from './actionTypes';

const toChangeAuthorsState = (state = [], action) => {
	switch (action.type) {
		case SAVE_AUTHOR:
			return [...state, action.payload.author];
		case UPDATE_AUTHOR:
			return state.map((author) => {
				return author.id === action.payload.id ? action.author : author;
			});
		case GET_AUTHORS:
			return action.payload.authors;
		default:
			return state;
	}
};

export default toChangeAuthorsState;
