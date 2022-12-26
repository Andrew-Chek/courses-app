import './Courses.css';
import CourseCard from './components/CourseCard/CourseCard';
import { useSelector } from 'react-redux';

const getAuthors = (course, authors) => {
	let filteredAuthors = [];
	course.authors.forEach((authorId) => {
		authors.forEach((author) => {
			if (authorId === author.id) {
				filteredAuthors.push(author);
			}
		});
	});
	return filteredAuthors;
};

export default function Courses({ courses }) {
	const stateAuthors = useSelector((state) => state.authors);
	return courses.map((course) => (
		<CourseCard
			key={course.id}
			course={course}
			authors={getAuthors(course, stateAuthors)}
		></CourseCard>
	));
}
export { getAuthors };
