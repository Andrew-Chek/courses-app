import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: window.localStorage.getItem('jwt-token'),
};

const toChangeUserState = (state = userInitialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				name: action.payload.name,
				email: action.payload.email,
				isAuth: true,
				token: window.localStorage.getItem('jwt-token'),
			};
		case LOGOUT_USER:
			return {
				name: '',
				email: '',
				isAuth: false,
				token: window.localStorage.getItem('jwt-token'),
			};
		default:
			return state;
	}
};

export default toChangeUserState;
