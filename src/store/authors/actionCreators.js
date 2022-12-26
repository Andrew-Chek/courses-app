import { SAVE_AUTHOR, GET_AUTHORS, UPDATE_AUTHOR } from './actionTypes';

export const saveAuthor = (author) => ({
	type: SAVE_AUTHOR,
	payload: { author },
});

export const updateAuthor = (authorId, author) => ({
	type: UPDATE_AUTHOR,
	payload: {
		id: authorId,
		author,
	},
});

export const getAuthors = (authors) => ({
	type: GET_AUTHORS,
	payload: {
		authors,
	},
});
