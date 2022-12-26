import {
	SAVE_COURSE,
	UPDATE_COURSE,
	DELETE_COURSE,
	GET_COURSES,
} from './actionTypes';

const toChangeCoursesState = (state = [], action) => {
	switch (action.type) {
		case SAVE_COURSE:
			return [...state, action.payload.course];
		case UPDATE_COURSE:
			return state.map((course) => {
				return course.id === action.payload.id ? action.course : course;
			});
		case DELETE_COURSE:
			state.forEach((course) => {
				if (course.id === action.payload.id) {
					const index = state.indexOf(course);
					state.splice(index, 1);
				}
			});
			return state.filter((course) => course.id !== action.payload.id);
		case GET_COURSES:
			return action.payload.courses;
		default:
			return state;
	}
};

export default toChangeCoursesState;
