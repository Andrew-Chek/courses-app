const store = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: window.localStorage.getItem('jwt-token'),
	},
	courses: [],
	authors: [],
};
