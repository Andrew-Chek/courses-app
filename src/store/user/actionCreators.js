import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const userLogin = (name, email) => ({
	type: LOGIN_USER,
	payload: {
		name,
		email,
	},
});

export const userLogOut = () => ({
	type: LOGOUT_USER,
});
