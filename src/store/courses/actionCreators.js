import {
	SAVE_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
	GET_COURSES,
} from './actionTypes';

export const saveCourse = (course) => ({
	type: SAVE_COURSE,
	payload: { course },
});

export const deleteCourse = (courseId) => ({
	type: DELETE_COURSE,
	payload: {
		id: courseId,
	},
});

export const updateCourse = (courseId, course) => ({
	type: UPDATE_COURSE,
	payload: {
		id: courseId,
		course,
	},
});

export const getCourses = (courses) => ({
	type: GET_COURSES,
	payload: {
		courses,
	},
});
